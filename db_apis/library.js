const oracledb = require("oracledb");
const database = require("../services/database.js");

async function find(context) {
  let query = "";
  if (context.name === "survey") {
    query =
      "SELECT ID, SURVEY_NAME FROM AUD_PUBLIC.REF_SURVEY WHERE IS_ACTIVE = 1 ORDER BY SURVEY_ORDER";
  } else if (context.name === "department") {
    query =
      "SELECT ID, DEPARTMENT_NAME FROM FAS_ADMIN.REF_CHECK_DEPARTMENT WHERE IS_ACTIVE = 1 ORDER BY ID";
  }

  const binds = {};

  const result = await database.simpleExecute(query, binds);
  return result.rows;
}

module.exports.find = find;
