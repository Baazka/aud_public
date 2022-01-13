const oracledb = require("oracledb");
const database = require("../services/database.js");

const baseQuery = `SELECT SU.USER_ID, SU.USER_CODE, SU.USER_NAME, SU.USER_DEPARTMENT_ID, SU.USER_SUB_DEPARTMENT_ID, SU.USER_EMAIL, SU.USER_REG_DATE, RD.DEPARTMENT_NAME, UPPER(RAL.ACCESS_LEVEL_NAME) AS USER_TYPE_NAME 
FROM AUD_REG.SYSTEM_USER SU
INNER JOIN AUD_ORG.REF_DEPARTMENT RD ON RD.DEPARTMENT_ID = SU.USER_DEPARTMENT_ID 
INNER JOIN AUD_REG.SYSTEM_ACCESS SA ON SU.USER_ID = SA.USER_ID 
INNER JOIN AUD_REG.REF_ACCESS_LEVEL RAL ON SA.ACCESS_LEVEL_ID = RAL.ACCESS_LEVEL_ID`;

async function get(context) {
  let query = baseQuery;
  if (context.id) {
    query +=
      "\nWHERE SU.USER_ID = " +
      context.id +
      `AND SA.SYSTEM_ID = ` +
      context.sysid;
  }

  const result = await database.simpleExecute(query);

  if (result?.rows.length > 0) return result.rows[0];
  else return result;
}

module.exports.get = get;
