const oracledb = require("oracledb");
const database = require("../services/database.js");

const baseQuery = `SELECT FA.ID, FA.ENT_ID, FA.AUDIT_CODE, NVL(FDD.IND_VALUE,AE.ENT_NAME) ENT_NAME, BT.BUDGET_SHORT_NAME, SU.USER_NAME, SU.USER_CODE FROM FAS_ADMIN.FAS_AUDIT FA
INNER JOIN AUD_ORG.AUDIT_ENTITY AE ON FA.ENT_ID = AE.ENT_ID
INNER JOIN AUD_ORG.AUDIT_ORGANIZATION AO ON AE.ENT_ORG_ID = AO.ORG_ID
INNER JOIN FAS_ADMIN.FAS_ENT_EMAIL EE ON FA.ENT_ID = EE.ENT_ID
LEFT JOIN AUD_ORG.REF_BUDGET_TYPE BT ON AE.ENT_BUDGET_TYPE = BT.BUDGET_TYPE_ID
LEFT JOIN AUD_REG.SYSTEM_USER SU ON EE.CREATED_BY = SU.USER_ID
LEFT JOIN FAS_ADMIN.FAS_DOCUMENT_DATA FDD ON FA.ID = FDD.FAS_AUDIT_ID AND FDD.IS_ACTIVE = 1 AND FDD.IND_ID IN (287, 344)
WHERE FA.IS_ACTIVE = 1 AND AE.IS_ACTIVE = 1`;

async function postList(context) {
  let query = baseQuery;

  const binds = {};
  if (context.usertype === "ADMIN") {
    query += `\n AND 1 = 1 `;
  } else {
    binds.USER_ID = context.userid;
    query += `\n AND EE.CREATED_BY = :USER_ID`;
  }
  query += `\n ORDER BY NVL(FDD.IND_VALUE,AE.ENT_NAME), BT.BUDGET_SHORT_NAME`;
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.postList = postList;
