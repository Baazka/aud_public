const oracledb = require("oracledb");
const database = require("../services/database.js");

const loginSql = `SELECT AUD_REG.F_CHECK_USER_SYSTEM(:P_LOGINNAME, :P_PASSWORD, :P_SYSTEMID) AS USER_ID FROM DUAL`;

async function login(login) {
  const result = await database.simpleExecute(loginSql, login);

  if (result.Error !== undefined) return { code: 405, result };
  else return result.rows[0];
}

module.exports.login = login;
