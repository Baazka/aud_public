const oracledb = require("oracledb");
const database = require("../services/database.js");

const baseQuery = `SELECT 
RS.ID,
RS.SURVEY_YEAR,
RS.SURVEY_ENT_ID,
RS.SURVEY_AUDIT_ID,
FA.AUDIT_CODE,
FA.AUDIT_CHECK_DEP_ID,
RD.DEPARTMENT_NAME,
AE.ENT_NAME,
RS.SURVEY_ID,
RSU.SURVEY_NAME,
RSS.STATUS_NAME
FROM AUD_PUBLIC.REG_SURVEY RS 
INNER JOIN FAS_ADMIN.FAS_AUDIT FA ON RS.SURVEY_AUDIT_ID = FA.ID
INNER JOIN AUD_ORG.REF_DEPARTMENT RD ON FA.AUDIT_CHECK_DEP_ID = RD.DEPARTMENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY AE ON RS.SURVEY_ENT_ID = AE.ENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY TEZ ON AE.ENT_TEZ = TEZ.ENT_ID
LEFT JOIN AUD_ORG.AUDIT_ENTITY TTZ ON AE.ENT_TTZ = TTZ.ENT_ID
INNER JOIN AUD_ORG.REF_BUDGET_TYPE RBT ON AE.ENT_BUDGET_TYPE = RBT.BUDGET_TYPE_ID
INNER JOIN AUD_PUBLIC.REF_SURVEY RSU ON RS.SURVEY_ID = RSU.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY_STATUS RSS ON RS.SURVEY_STATUS_ID = RSS.ID
WHERE SURVEY_YEAR = :SURVEY_YEAR AND SURVEY_ENT_ID = :SURVEY_ENT_ID`;

async function get(context) {
  let query = baseQuery;

  const binds = {};
  binds.SURVEY_YEAR = context.SURVEY_YEAR;
  binds.SURVEY_ENT_ID = context.SURVEY_ENT_ID;

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.get = get;

//Survey 1
const baseQuery1 = `SELECT 
RS1.ID,
RS.ID SUR_ID,
TEZ.ENT_NAME,
TTZ.ENT_NAME,
RBT.BUDGET_TYPE_NAME,
FA.AUDIT_CODE,
AE.ENT_NAME,
RS1.BUDGET_AMOUNT,
RS1.RUNNING_COST_AMOUNT,
RS1.INVESTMENT_COST_AMOUNT,
RS1.EXECUTION_AMOUNT,
RS1.EXECUTION_RUNNING_COST,
RS1.EXECUTION_INVESTMENT_COST,
RS1.HEMNELT_DUN ,
RS1.HEMNELT_PERCENT ,
RS1.NEW_EMP_COUNT ,
RS1.NEW_EMP_SALARY ,
RS1.RENEW_EMP_COUNT ,
RS1.RENEW_EMP_SALARY ,
RS1.IMP_SALARY_COUNT ,
RS1.IMP_SALARY_AMOUNT ,
RS1.IMP_PROMO_COUNT ,
RS1.IMP_PROMO_AMOUNT ,
RS1.IMP_GUEST_AMOUNT ,
RS1.IMP_GIFT_AMOUNT ,
RS1.CAR_COUNT ,
RS1.CAR_AMOUNT ,
RS1.FURNITURE_AMOUNT ,
RS1.CLOTHES_AMOUNT ,
RS1.OTHER_TOOLS_AMOUNT ,
RS1.EXTERNAL_EVENT_AMOUNT ,
RS1.INTERNAL_EVENT_AMOUNT ,
RS1.CEREMONY_AMOUNT ,
RS1.CONTENT_AMOUNT ,
RS1.BASE_PLAN_AMOUNT ,
RS1.BASE_COMPLETION_AMOUNT ,
RS1.BASE_PERCENT ,
RS1.DOCUMENT_PLAN_AMOUNT ,
RS1.DOCUMENT_COMPLETION_AMOUNT ,
RS1.DOCUMENT_PERCENT,
RD.DEPARTMENT_NAME,
(SELECT LISTAGG(SU.USER_CODE||'-'||SU.USER_NAME, ', ') WITHIN GROUP (ORDER BY TD.ID)  FROM FAS_ADMIN.FAS_AUDIT F
INNER JOIN FAS_ADMIN.FAS_AUDIT_TEAM_DATA TD ON F.ID = TD.FAS_AUDIT_ID
INNER JOIN AUD_REG.SYSTEM_USER SU ON TD.AUDITOR_ID = SU.USER_ID
WHERE TD.ROLE_ID = 3 AND F.ID = FA.ID
GROUP BY FA.ID) AUDITORS
FROM AUD_PUBLIC.REG_SURVEY_1 RS1
INNER JOIN AUD_PUBLIC.REG_SURVEY RS ON RS1.SURVEY_ID = RS.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY RSU ON RS.SURVEY_ID = RSU.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY_STATUS RSS ON RS.SURVEY_STATUS_ID = RSS.ID
INNER JOIN FAS_ADMIN.FAS_AUDIT FA ON RS.SURVEY_AUDIT_ID = FA.ID
INNER JOIN AUD_ORG.REF_DEPARTMENT RD ON FA.AUDIT_CHECK_DEP_ID = RD.DEPARTMENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY AE ON RS.SURVEY_ENT_ID = AE.ENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY TEZ ON AE.ENT_TEZ = TEZ.ENT_ID
LEFT JOIN AUD_ORG.AUDIT_ENTITY TTZ ON AE.ENT_TTZ = TTZ.ENT_ID
INNER JOIN AUD_ORG.REF_BUDGET_TYPE RBT ON AE.ENT_BUDGET_TYPE = RBT.BUDGET_TYPE_ID
WHERE RS1.IS_ACTIVE = 1 AND RS1.SURVEY_ID = :SURVEY_ID`;

async function getSurvey1(context) {
  let query = baseQuery1;
  const binds = {};
  binds.SURVEY_ID = context.SURVEY_ID;

  console.log(binds, query);
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.getSurvey1 = getSurvey1;

const createSqlSurvey1 = `INSERT INTO AUD_PUBLIC.REG_SURVEY_1 (ID, SURVEY_ID, BUDGET_AMOUNT, RUNNING_COST_AMOUNT, INVESTMENT_COST_AMOUNT,
  EXECUTION_AMOUNT, EXECUTION_RUNNING_COST, EXECUTION_INVESTMENT_COST, HEMNELT_DUN,  NEW_EMP_COUNT,  NEW_EMP_SALARY,  
  RENEW_EMP_COUNT,  RENEW_EMP_SALARY, IMP_SALARY_COUNT,  IMP_SALARY_AMOUNT,  IMP_PROMO_COUNT,  IMP_PROMO_AMOUNT,  IMP_GUEST_AMOUNT,  IMP_GIFT_AMOUNT,  CAR_COUNT,  CAR_AMOUNT,  FURNITURE_AMOUNT,  CLOTHES_AMOUNT, OTHER_TOOLS_AMOUNT,  EXTERNAL_EVENT_AMOUNT,  INTERNAL_EVENT_AMOUNT,  CEREMONY_AMOUNT,  CONTENT_AMOUNT,  BASE_PLAN_AMOUNT,  BASE_COMPLETION_AMOUNT,  DOCUMENT_PLAN_AMOUNT, DOCUMENT_COMPLETION_AMOUNT,
  IS_ACTIVE, CREATED_BY, CREATED_DATE
) VALUES (:P_ID, :SURVEY_ID, :BUDGET_AMOUNT, :RUNNING_COST_AMOUNT, :INVESTMENT_COST_AMOUNT, :EXECUTION_AMOUNT, :EXECUTION_RUNNING_COST, :EXECUTION_INVESTMENT_COST, :HEMNELT_DUN, :NEW_EMP_COUNT,  :NEW_EMP_SALARY,  :RENEW_EMP_COUNT,  :RENEW_EMP_SALARY,  
  :IMP_SALARY_COUNT,  :IMP_SALARY_AMOUNT,  :IMP_PROMO_COUNT,  :IMP_PROMO_AMOUNT,  :IMP_GUEST_AMOUNT,  :IMP_GIFT_AMOUNT,  :CAR_COUNT,  :CAR_AMOUNT,  :FURNITURE_AMOUNT,  :CLOTHES_AMOUNT, :OTHER_TOOLS_AMOUNT,  :EXTERNAL_EVENT_AMOUNT,  :INTERNAL_EVENT_AMOUNT,  :CEREMONY_AMOUNT,  :CONTENT_AMOUNT,  :BASE_PLAN_AMOUNT,  :BASE_COMPLETION_AMOUNT,  :DOCUMENT_PLAN_AMOUNT, :DOCUMENT_COMPLETION_AMOUNT,  1,  :CREATED_BY,  SYSDATE)`;

const updateSqlSurvey1 = `UPDATE AUD_PUBLIC.REG_SURVEY_1
  SET BUDGET_AMOUNT = :BUDGET_AMOUNT,
  RUNNING_COST_AMOUNT = :RUNNING_COST_AMOUNT,
  INVESTMENT_COST_AMOUNT = :INVESTMENT_COST_AMOUNT,
  EXECUTION_AMOUNT = :EXECUTION_AMOUNT,
  EXECUTION_RUNNING_COST = :EXECUTION_RUNNING_COST,
  EXECUTION_INVESTMENT_COST = :EXECUTION_INVESTMENT_COST,
  HEMNELT_DUN = :HEMNELT_DUN, 
  NEW_EMP_COUNT = :NEW_EMP_COUNT,
  NEW_EMP_SALARY = :NEW_EMP_SALARY,
  RENEW_EMP_COUNT = :RENEW_EMP_COUNT,
  RENEW_EMP_SALARY = :RENEW_EMP_SALARY,
  IMP_SALARY_COUNT = :IMP_SALARY_COUNT,
  IMP_SALARY_AMOUNT = :IMP_SALARY_AMOUNT,
  IMP_PROMO_COUNT = :IMP_PROMO_COUNT,
  IMP_PROMO_AMOUNT = :IMP_PROMO_AMOUNT,
  IMP_GUEST_AMOUNT = :IMP_GUEST_AMOUNT,
  IMP_GIFT_AMOUNT = :IMP_GIFT_AMOUNT,
  CAR_COUNT = :CAR_COUNT,
  CAR_AMOUNT = :CAR_AMOUNT,
  FURNITURE_AMOUNT = :FURNITURE_AMOUNT,
  CLOTHES_AMOUNT = :CLOTHES_AMOUNT,
  OTHER_TOOLS_AMOUNT = :OTHER_TOOLS_AMOUNT,
  EXTERNAL_EVENT_AMOUNT = :EXTERNAL_EVENT_AMOUNT,
  INTERNAL_EVENT_AMOUNT = :INTERNAL_EVENT_AMOUNT,
  CEREMONY_AMOUNT = :CEREMONY_AMOUNT,
  CONTENT_AMOUNT = :CONTENT_AMOUNT,
  BASE_PLAN_AMOUNT = :BASE_PLAN_AMOUNT,
  BASE_COMPLETION_AMOUNT = :BASE_COMPLETION_AMOUNT,
  DOCUMENT_PLAN_AMOUNT = :DOCUMENT_PLAN_AMOUNT,
  DOCUMENT_COMPLETION_AMOUNT = :DOCUMENT_COMPLETION_AMOUNT,
  UPDATED_BY = :CREATED_BY,
  UPDATED_DATE = SYSDATE
      WHERE ID = :P_ID`;

async function createUpdateSurvey1(data) {
  if (data.P_ID === null) {
    const result = await database.simpleExecute(createSqlSurvey1, data, {
      autoCommit: true,
    });

    if (result.Error !== undefined) return { code: 405, result };
    console.log(result);
    return {
      message: "success",
    };
  } else {
    const result = await database.simpleExecute(updateSqlSurvey1, data, {
      autoCommit: true,
    });

    if (result.rowsAffected) {
      return {
        message: "success",
      };
    } else {
      return null;
    }
  }
}

module.exports.createUpdateSurvey1 = createUpdateSurvey1;

const deleteSqlSurvey1 = `UPDATE AUD_PUBLIC.REG_SURVEY_1
SET IS_ACTIVE = 0,
UPDATED_BY = :CREATED_BY,
UPDATED_DATE = SYSDATE
    WHERE ID = :P_ID;)`;

async function deleteSurvey1(data) {
  const result = await database.simpleExecute(deleteSqlSurvey1, data, {
    autoCommit: true,
  });

  if (result.rowsAffected) {
    return {
      message: "success",
    };
  } else {
    return null;
  }
}

module.exports.deleteSurvey1 = deleteSurvey1;

//SURVEY 2_1
const baseQuery2_1 = `SELECT 
RS1.ID,
RS.ID SUR_ID,
TEZ.ENT_NAME,
TTZ.ENT_NAME,
RBT.BUDGET_TYPE_NAME,
FA.AUDIT_CODE,
AE.ENT_NAME,
RS1.BRANCH_ID ,
RB.BRANCH_NAME ,
RS1.ACTIVITY_NAME ,
RS1.HOLDING_PERCENT ,
RS1.REG_DATE ,
RS1.REG_DOCUMENT_NO ,
RS1.IS_LEGAL18 ,
RS1.REG_CAPITAL_AMOUNT ,
RS1.STATE_CAPITAL_AMOUNT ,
RS1.STRUCTURE_DATE ,
RS1.STRUCTURE_DOCUMENT_NO ,
RS1.HEAD_EMPLOYEE ,
RS1.MIDDLE_EMPLOYEE ,
RS1.NORMAL_EMPLOYEE ,
RS1.TOTAL_EMPLOYEE ,
RS1.PROFIT_PLAN ,
RS1.PROFIT_COMPLETION ,
RS1.TARGET_LEVEL ,
RS1.TARGET_LEVEL_PERCENT ,
RS1.TARGET_LEVEL_DESCRIPTION ,
RS1.PREV_INCOME ,
RS1.PREV_PROCESS_COST ,
RS1.PREV_NON_PROCESS_COST ,
RS1.PREV_INCOME_TAX ,
RS1.PREV_PROFIT ,
RS1.PREV_DESCRIPTION ,
RS1.CY_INCOME ,
RS1.CY_PROCESS_COST ,
RS1.CY_NON_PROCESS_COST ,
RS1.CY_INCOME_TAX ,
RS1.CY_PROFIT ,
RS1.CY_DESCRIPTION ,
RS1.IS_STATE ,
RS1.IS_STATE_DESCRIPTION ,
RS1.IS_CHANGE ,
RS1.IS_CHANGE_DESCRIPTION ,
RS1.IS_LINKED ,
RS1.IS_LINKED_DESCRIPTION ,
RS1.IS_SCOPED ,
RS1.IS_SCOPED_DESCRIPTION ,
RS1.PREV_SALARY_COST ,
RS1.PREV_PROMOTION_COST ,
RS1.PREV_GUEST_COST ,
RS1.CY_SALARY_COST ,
RS1.CY_PROMOTION_COST ,
RS1.CY_GUEST_COST ,
RD.DEPARTMENT_NAME,
(SELECT LISTAGG(SU.USER_CODE||'-'||SU.USER_NAME, ', ') WITHIN GROUP (ORDER BY TD.ID)  FROM FAS_ADMIN.FAS_AUDIT F
INNER JOIN FAS_ADMIN.FAS_AUDIT_TEAM_DATA TD ON F.ID = TD.FAS_AUDIT_ID
INNER JOIN AUD_REG.SYSTEM_USER SU ON TD.AUDITOR_ID = SU.USER_ID
WHERE TD.ROLE_ID = 3 AND F.ID = FA.ID
GROUP BY FA.ID) AUDITORS
FROM AUD_PUBLIC.REG_SURVEY_2_1 RS1
INNER JOIN AUD_PUBLIC.REG_SURVEY RS ON RS1.SURVEY_ID = RS.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY RSU ON RS.SURVEY_ID = RSU.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY_STATUS RSS ON RS.SURVEY_STATUS_ID = RSS.ID
INNER JOIN FAS_ADMIN.FAS_AUDIT FA ON RS.SURVEY_AUDIT_ID = FA.ID
INNER JOIN AUD_ORG.REF_DEPARTMENT RD ON FA.AUDIT_CHECK_DEP_ID = RD.DEPARTMENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY AE ON RS.SURVEY_ENT_ID = AE.ENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY TEZ ON AE.ENT_TEZ = TEZ.ENT_ID
LEFT JOIN AUD_ORG.AUDIT_ENTITY TTZ ON AE.ENT_TTZ = TTZ.ENT_ID
INNER JOIN AUD_ORG.REF_BUDGET_TYPE RBT ON AE.ENT_BUDGET_TYPE = RBT.BUDGET_TYPE_ID
INNER JOIN AUD_PUBLIC.REF_BRANCH RB ON RS1.BRANCH_ID = RB.ID
WHERE RS1.IS_ACTIVE = 1 AND RS1.SURVEY_ID = :SURVEY_ID`;

const createSqlSurvey2_1 = `INSERT INTO AUD_PUBLIC.REG_SURVEY_2_1 (SURVEY_ID, BRANCH_ID, ACTIVITY_NAME, HOLDING_PERCENT, REG_DATE, REG_DOCUMENT_NO, IS_LEGAL18, REG_CAPITAL_AMOUNT, STATE_CAPITAL_AMOUNT, STRUCTURE_DATE, STRUCTURE_DOCUMENT_NO, HEAD_EMPLOYEE, MIDDLE_EMPLOYEE, NORMAL_EMPLOYEE, 
TOTAL_EMPLOYEE, PROFIT_PLAN, PROFIT_COMPLETION, TARGET_LEVEL, TARGET_LEVEL_PERCENT, TARGET_LEVEL_DESCRIPTION, PREV_INCOME, PREV_PROCESS_COST, 
PREV_NON_PROCESS_COST, PREV_INCOME_TAX, PREV_PROFIT, PREV_DESCRIPTION, CY_INCOME, CY_PROCESS_COST, CY_NON_PROCESS_COST, CY_INCOME_TAX, CY_PROFIT, 
CY_DESCRIPTION, IS_STATE, IS_STATE_DESCRIPTION, IS_CHANGE, IS_CHANGE_DESCRIPTION, IS_LINKED, IS_LINKED_DESCRIPTION, IS_SCOPED, IS_SCOPED_DESCRIPTION, 
PREV_SALARY_COST, PREV_PROMOTION_COST, PREV_GUEST_COST, CY_SALARY_COST, CY_PROMOTION_COST, CY_GUEST_COST, IS_ACTIVE, CREATED_BY, CREATED_DATE) 
VALUES (:SURVEY_ID, :BRANCH_ID, :ACTIVITY_NAME, :HOLDING_PERCENT, :REG_DATE, :REG_DOCUMENT_NO, :IS_LEGAL18, :REG_CAPITAL_AMOUNT, :STATE_CAPITAL_AMOUNT, :STRUCTURE_DATE, :STRUCTURE_DOCUMENT_NO, :HEAD_EMPLOYEE, :MIDDLE_EMPLOYEE, :NORMAL_EMPLOYEE, :TOTAL_EMPLOYEE, :PROFIT_PLAN, :PROFIT_COMPLETION, :TARGET_LEVEL, :TARGET_LEVEL_PERCENT, :TARGET_LEVEL_DESCRIPTION, :PREV_INCOME, :PREV_PROCESS_COST, :PREV_NON_PROCESS_COST, :PREV_INCOME_TAX, :PREV_PROFIT, 
:PREV_DESCRIPTION, :CY_INCOME, :CY_PROCESS_COST, :CY_NON_PROCESS_COST, :CY_INCOME_TAX, :CY_PROFIT, :CY_DESCRIPTION, :IS_STATE, :IS_STATE_DESCRIPTION, :IS_CHANGE, :IS_CHANGE_DESCRIPTION, :IS_LINKED, :IS_LINKED_DESCRIPTION, :IS_SCOPED, :IS_SCOPED_DESCRIPTION, :PREV_SALARY_COST,
:PREV_PROMOTION_COST, :PREV_GUEST_COST, :CY_SALARY_COST, :CY_PROMOTION_COST, :CY_GUEST_COST, 1, :CREATED_BY, SYSDATE)`;

const updateSqlSurvey2_1 = `UPDATE AUD_PUBLIC.REG_SURVEY_1
  SET BUDGET_AMOUNT = :BUDGET_AMOUNT,
  RUNNING_COST_AMOUNT = :RUNNING_COST_AMOUNT,
  INVESTMENT_COST_AMOUNT = :INVESTMENT_COST_AMOUNT,
  EXECUTION_AMOUNT = :EXECUTION_AMOUNT,
  EXECUTION_RUNNING_COST = :EXECUTION_RUNNING_COST,
  EXECUTION_INVESTMENT_COST = :EXECUTION_INVESTMENT_COST,
  HEMNELT_DUN = :HEMNELT_DUN, 
  HEMNELT_PERCENT = :HEMNELT_PERCENT,
  NEW_EMP_COUNT = :NEW_EMP_COUNT,
  NEW_EMP_SALARY = :NEW_EMP_SALARY,
  RENEW_EMP_COUNT = :RENEW_EMP_COUNT,
  RENEW_EMP_SALARY = :RENEW_EMP_SALARY,
  IMP_SALARY_COUNT = :IMP_SALARY_COUNT,
  IMP_SALARY_AMOUNT = :IMP_SALARY_AMOUNT,
  IMP_PROMO_COUNT = :IMP_PROMO_COUNT,
  IMP_PROMO_AMOUNT = :IMP_PROMO_AMOUNT,
  IMP_GUEST_AMOUNT = :IMP_GUEST_AMOUNT,
  IMP_GIFT_AMOUNT = :IMP_GIFT_AMOUNT,
  CAR_COUNT = :CAR_COUNT,
  CAR_AMOUNT = :CAR_AMOUNT,
  FURNITURE_AMOUNT = :FURNITURE_AMOUNT,
  CLOTHES_AMOUNT = :CLOTHES_AMOUNT,
  OTHER_TOOLS_AMOUNT = :OTHER_TOOLS_AMOUNT,
  EXTERNAL_EVENT_AMOUNT = :EXTERNAL_EVENT_AMOUNT,
  INTERNAL_EVENT_AMOUNT = :INTERNAL_EVENT_AMOUNT,
  CEREMONY_AMOUNT = :CEREMONY_AMOUNT,
  CONTENT_AMOUNT = :CONTENT_AMOUNT,
  BASE_PLAN_AMOUNT = :BASE_PLAN_AMOUNT,
  BASE_COMPLETION_AMOUNT = :BASE_COMPLETION_AMOUNT,
  BASE_PERCENT = :BASE_PERCENT,
  DOCUMENT_PLAN_AMOUNT = :DOCUMENT_PLAN_AMOUNT,
  DOCUMENT_COMPLETION_AMOUNT = :DOCUMENT_COMPLETION_AMOUNT,
  DOCUMENT_PERCENT = :DOCUMENT_PERCENT,
  UPDATED_BY = :CREATED_BY,
  UPDATED_DATE = SYSDATE
      WHERE ID = :P_ID`;

const deleteSqlSurvey2_1 = `UPDATE AUD_PUBLIC.REG_SURVEY_2_1
SET IS_ACTIVE = 0,
UPDATED_BY = :CREATED_BY,
UPDATED_DATE = SYSDATE
    WHERE ID = :P_ID;)`;

async function getSurvey2_1(context) {
  let query = baseQuery2_1;
  const binds = {};
  binds.SURVEY_ID = context.SURVEY_ID;

  console.log(binds, query);
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.getSurvey2_1 = getSurvey2_1;

async function createUpdateSurvey2_1(data) {
  if (data.P_ID === null) {
    const result = await database.simpleExecute(createSqlSurvey2_1, data, {
      autoCommit: true,
    });

    if (result.Error !== undefined) return { code: 405, result };
    return {
      message: "success",
    };
  } else {
    const result = await database.simpleExecute(updateSqlSurvey2_1, data, {
      autoCommit: true,
    });

    if (result.rowsAffected) {
      return {
        message: "success",
      };
    } else {
      return null;
    }
  }
}

module.exports.createUpdateSurvey2_1 = createUpdateSurvey2_1;

async function deleteSurvey2_1(data) {
  const result = await database.simpleExecute(deleteSqlSurvey2_1, data, {
    autoCommit: true,
  });

  if (result.rowsAffected) {
    return {
      message: "success",
    };
  } else {
    return null;
  }
}

module.exports.deleteSurvey2_1 = deleteSurvey2_1;

//SURVEY 2_2
const baseQuery2_2 = `SELECT 
RS1.ID,
RS.ID SUR_ID,
TEZ.ENT_NAME,
TTZ.ENT_NAME,
RBT.BUDGET_TYPE_NAME,
FA.AUDIT_CODE,
AE.ENT_NAME,
RS1.BRANCH_ID ,
RB.BRANCH_NAME ,
RS1.ACTIVITY_NAME ,
RS1.HOLDING_PERCENT ,
RS1.REG_DATE ,
RS1.REG_DOCUMENT_NO ,
RS1.IS_LEGAL18 ,
RS1.REG_CAPITAL_AMOUNT ,
RS1.STATE_CAPITAL_AMOUNT ,
RS1.STRUCTURE_DATE ,
RS1.STRUCTURE_DOCUMENT_NO ,
RS1.HEAD_EMPLOYEE ,
RS1.MIDDLE_EMPLOYEE ,
RS1.NORMAL_EMPLOYEE ,
RS1.TOTAL_EMPLOYEE ,
RS1.PROFIT_PLAN ,
RS1.PROFIT_COMPLETION ,
RS1.TARGET_LEVEL ,
RS1.TARGET_LEVEL_PERCENT ,
RS1.TARGET_LEVEL_DESCRIPTION ,
RS1.PREV_INCOME ,
RS1.PREV_PROCESS_COST ,
RS1.PREV_NON_PROCESS_COST ,
RS1.PREV_INCOME_TAX ,
RS1.PREV_PROFIT ,
RS1.PREV_DESCRIPTION ,
RS1.CY_INCOME ,
RS1.CY_PROCESS_COST ,
RS1.CY_NON_PROCESS_COST ,
RS1.CY_INCOME_TAX ,
RS1.CY_PROFIT ,
RS1.CY_DESCRIPTION ,
RS1.IS_STATE ,
RS1.IS_STATE_DESCRIPTION ,
RS1.IS_CHANGE ,
RS1.IS_CHANGE_DESCRIPTION ,
RS1.IS_LINKED ,
RS1.IS_LINKED_DESCRIPTION ,
RS1.IS_SCOPED ,
RS1.IS_SCOPED_DESCRIPTION ,
RS1.PREV_SALARY_COST ,
RS1.PREV_PROMOTION_COST ,
RS1.PREV_GUEST_COST ,
RS1.CY_SALARY_COST ,
RS1.CY_PROMOTION_COST ,
RS1.CY_GUEST_COST ,
RD.DEPARTMENT_NAME,
(SELECT LISTAGG(SU.USER_CODE||'-'||SU.USER_NAME, ', ') WITHIN GROUP (ORDER BY TD.ID)  FROM FAS_ADMIN.FAS_AUDIT F
INNER JOIN FAS_ADMIN.FAS_AUDIT_TEAM_DATA TD ON F.ID = TD.FAS_AUDIT_ID
INNER JOIN AUD_REG.SYSTEM_USER SU ON TD.AUDITOR_ID = SU.USER_ID
WHERE TD.ROLE_ID = 3 AND F.ID = FA.ID
GROUP BY FA.ID) AUDITORS
FROM AUD_PUBLIC.REG_SURVEY_2_1 RS1
INNER JOIN AUD_PUBLIC.REG_SURVEY RS ON RS1.SURVEY_ID = RS.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY RSU ON RS.SURVEY_ID = RSU.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY_STATUS RSS ON RS.SURVEY_STATUS_ID = RSS.ID
INNER JOIN FAS_ADMIN.FAS_AUDIT FA ON RS.SURVEY_AUDIT_ID = FA.ID
INNER JOIN AUD_ORG.REF_DEPARTMENT RD ON FA.AUDIT_CHECK_DEP_ID = RD.DEPARTMENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY AE ON RS.SURVEY_ENT_ID = AE.ENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY TEZ ON AE.ENT_TEZ = TEZ.ENT_ID
LEFT JOIN AUD_ORG.AUDIT_ENTITY TTZ ON AE.ENT_TTZ = TTZ.ENT_ID
INNER JOIN AUD_ORG.REF_BUDGET_TYPE RBT ON AE.ENT_BUDGET_TYPE = RBT.BUDGET_TYPE_ID
INNER JOIN AUD_PUBLIC.REF_BRANCH RB ON RS1.BRANCH_ID = RB.ID
WHERE RS1.IS_ACTIVE = 1 AND RS1.SURVEY_ID = :SURVEY_ID`;

const createSqlSurvey2_2 = `INSERT INTO AUD_PUBLIC.REG_SURVEY_2_1 (SURVEY_ID, BRANCH_ID, ACTIVITY_NAME, HOLDING_PERCENT, REG_DATE, REG_DOCUMENT_NO, IS_LEGAL18, REG_CAPITAL_AMOUNT, STATE_CAPITAL_AMOUNT, STRUCTURE_DATE, STRUCTURE_DOCUMENT_NO, HEAD_EMPLOYEE, MIDDLE_EMPLOYEE, NORMAL_EMPLOYEE, 
TOTAL_EMPLOYEE, PROFIT_PLAN, PROFIT_COMPLETION, TARGET_LEVEL, TARGET_LEVEL_PERCENT, TARGET_LEVEL_DESCRIPTION, PREV_INCOME, PREV_PROCESS_COST, 
PREV_NON_PROCESS_COST, PREV_INCOME_TAX, PREV_PROFIT, PREV_DESCRIPTION, CY_INCOME, CY_PROCESS_COST, CY_NON_PROCESS_COST, CY_INCOME_TAX, CY_PROFIT, 
CY_DESCRIPTION, IS_STATE, IS_STATE_DESCRIPTION, IS_CHANGE, IS_CHANGE_DESCRIPTION, IS_LINKED, IS_LINKED_DESCRIPTION, IS_SCOPED, IS_SCOPED_DESCRIPTION, 
PREV_SALARY_COST, PREV_PROMOTION_COST, PREV_GUEST_COST, CY_SALARY_COST, CY_PROMOTION_COST, CY_GUEST_COST, IS_ACTIVE, CREATED_BY, CREATED_DATE) 
VALUES (:SURVEY_ID, :BRANCH_ID, :ACTIVITY_NAME, :HOLDING_PERCENT, :REG_DATE, :REG_DOCUMENT_NO, :IS_LEGAL18, :REG_CAPITAL_AMOUNT, :STATE_CAPITAL_AMOUNT, :STRUCTURE_DATE, :STRUCTURE_DOCUMENT_NO, :HEAD_EMPLOYEE, :MIDDLE_EMPLOYEE, :NORMAL_EMPLOYEE, :TOTAL_EMPLOYEE, :PROFIT_PLAN, :PROFIT_COMPLETION, :TARGET_LEVEL, :TARGET_LEVEL_PERCENT, :TARGET_LEVEL_DESCRIPTION, :PREV_INCOME, :PREV_PROCESS_COST, :PREV_NON_PROCESS_COST, :PREV_INCOME_TAX, :PREV_PROFIT, 
:PREV_DESCRIPTION, :CY_INCOME, :CY_PROCESS_COST, :CY_NON_PROCESS_COST, :CY_INCOME_TAX, :CY_PROFIT, :CY_DESCRIPTION, :IS_STATE, :IS_STATE_DESCRIPTION, :IS_CHANGE, :IS_CHANGE_DESCRIPTION, :IS_LINKED, :IS_LINKED_DESCRIPTION, :IS_SCOPED, :IS_SCOPED_DESCRIPTION, :PREV_SALARY_COST,
:PREV_PROMOTION_COST, :PREV_GUEST_COST, :CY_SALARY_COST, :CY_PROMOTION_COST, :CY_GUEST_COST, 1, :CREATED_BY, SYSDATE)`;

const updateSqlSurvey2_2 = `UPDATE AUD_PUBLIC.REG_SURVEY_1
  SET BUDGET_AMOUNT = :BUDGET_AMOUNT,
  RUNNING_COST_AMOUNT = :RUNNING_COST_AMOUNT,
  INVESTMENT_COST_AMOUNT = :INVESTMENT_COST_AMOUNT,
  EXECUTION_AMOUNT = :EXECUTION_AMOUNT,
  EXECUTION_RUNNING_COST = :EXECUTION_RUNNING_COST,
  EXECUTION_INVESTMENT_COST = :EXECUTION_INVESTMENT_COST,
  HEMNELT_DUN = :HEMNELT_DUN, 
  HEMNELT_PERCENT = :HEMNELT_PERCENT,
  NEW_EMP_COUNT = :NEW_EMP_COUNT,
  NEW_EMP_SALARY = :NEW_EMP_SALARY,
  RENEW_EMP_COUNT = :RENEW_EMP_COUNT,
  RENEW_EMP_SALARY = :RENEW_EMP_SALARY,
  IMP_SALARY_COUNT = :IMP_SALARY_COUNT,
  IMP_SALARY_AMOUNT = :IMP_SALARY_AMOUNT,
  IMP_PROMO_COUNT = :IMP_PROMO_COUNT,
  IMP_PROMO_AMOUNT = :IMP_PROMO_AMOUNT,
  IMP_GUEST_AMOUNT = :IMP_GUEST_AMOUNT,
  IMP_GIFT_AMOUNT = :IMP_GIFT_AMOUNT,
  CAR_COUNT = :CAR_COUNT,
  CAR_AMOUNT = :CAR_AMOUNT,
  FURNITURE_AMOUNT = :FURNITURE_AMOUNT,
  CLOTHES_AMOUNT = :CLOTHES_AMOUNT,
  OTHER_TOOLS_AMOUNT = :OTHER_TOOLS_AMOUNT,
  EXTERNAL_EVENT_AMOUNT = :EXTERNAL_EVENT_AMOUNT,
  INTERNAL_EVENT_AMOUNT = :INTERNAL_EVENT_AMOUNT,
  CEREMONY_AMOUNT = :CEREMONY_AMOUNT,
  CONTENT_AMOUNT = :CONTENT_AMOUNT,
  BASE_PLAN_AMOUNT = :BASE_PLAN_AMOUNT,
  BASE_COMPLETION_AMOUNT = :BASE_COMPLETION_AMOUNT,
  BASE_PERCENT = :BASE_PERCENT,
  DOCUMENT_PLAN_AMOUNT = :DOCUMENT_PLAN_AMOUNT,
  DOCUMENT_COMPLETION_AMOUNT = :DOCUMENT_COMPLETION_AMOUNT,
  DOCUMENT_PERCENT = :DOCUMENT_PERCENT,
  UPDATED_BY = :CREATED_BY,
  UPDATED_DATE = SYSDATE
      WHERE ID = :P_ID`;

const deleteSqlSurvey2_2 = `UPDATE AUD_PUBLIC.REG_SURVEY_2_1
SET IS_ACTIVE = 0,
UPDATED_BY = :CREATED_BY,
UPDATED_DATE = SYSDATE
    WHERE ID = :P_ID;)`;

async function getSurvey2_2(context) {
  let query = baseQuery2_1;
  const binds = {};
  binds.SURVEY_ID = context.SURVEY_ID;

  console.log(binds, query);
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.getSurvey2_2 = getSurvey2_2;

async function createUpdateSurvey2_2(data) {
  if (data.P_ID === null) {
    const result = await database.simpleExecute(createSqlSurvey2_1, data, {
      autoCommit: true,
    });

    if (result.Error !== undefined) return { code: 405, result };
    return {
      message: "success",
    };
  } else {
    const result = await database.simpleExecute(updateSqlSurvey2_1, data, {
      autoCommit: true,
    });

    if (result.rowsAffected) {
      return {
        message: "success",
      };
    } else {
      return null;
    }
  }
}

module.exports.createUpdateSurvey2_2 = createUpdateSurvey2_2;

async function deleteSurvey2_2(data) {
  const result = await database.simpleExecute(deleteSqlSurvey2_1, data, {
    autoCommit: true,
  });

  if (result.rowsAffected) {
    return {
      message: "success",
    };
  } else {
    return null;
  }
}

module.exports.deleteSurvey2_2 = deleteSurvey2_2;

//SURVEY 2_3
const baseQuery2_3 = `SELECT 
RS1.ID,
RS.ID SUR_ID,
TEZ.ENT_NAME,
TTZ.ENT_NAME,
RBT.BUDGET_TYPE_NAME,
FA.AUDIT_CODE,
AE.ENT_NAME,
RS1.BRANCH_ID ,
RB.BRANCH_NAME ,
RS1.ACTIVITY_NAME ,
RS1.HOLDING_PERCENT ,
RS1.REG_DATE ,
RS1.REG_DOCUMENT_NO ,
RS1.IS_LEGAL18 ,
RS1.REG_CAPITAL_AMOUNT ,
RS1.STATE_CAPITAL_AMOUNT ,
RS1.STRUCTURE_DATE ,
RS1.STRUCTURE_DOCUMENT_NO ,
RS1.HEAD_EMPLOYEE ,
RS1.MIDDLE_EMPLOYEE ,
RS1.NORMAL_EMPLOYEE ,
RS1.TOTAL_EMPLOYEE ,
RS1.PROFIT_PLAN ,
RS1.PROFIT_COMPLETION ,
RS1.TARGET_LEVEL ,
RS1.TARGET_LEVEL_PERCENT ,
RS1.TARGET_LEVEL_DESCRIPTION ,
RS1.PREV_INCOME ,
RS1.PREV_PROCESS_COST ,
RS1.PREV_NON_PROCESS_COST ,
RS1.PREV_INCOME_TAX ,
RS1.PREV_PROFIT ,
RS1.PREV_DESCRIPTION ,
RS1.CY_INCOME ,
RS1.CY_PROCESS_COST ,
RS1.CY_NON_PROCESS_COST ,
RS1.CY_INCOME_TAX ,
RS1.CY_PROFIT ,
RS1.CY_DESCRIPTION ,
RS1.IS_STATE ,
RS1.IS_STATE_DESCRIPTION ,
RS1.IS_CHANGE ,
RS1.IS_CHANGE_DESCRIPTION ,
RS1.IS_LINKED ,
RS1.IS_LINKED_DESCRIPTION ,
RS1.IS_SCOPED ,
RS1.IS_SCOPED_DESCRIPTION ,
RS1.PREV_SALARY_COST ,
RS1.PREV_PROMOTION_COST ,
RS1.PREV_GUEST_COST ,
RS1.CY_SALARY_COST ,
RS1.CY_PROMOTION_COST ,
RS1.CY_GUEST_COST ,
RD.DEPARTMENT_NAME,
(SELECT LISTAGG(SU.USER_CODE||'-'||SU.USER_NAME, ', ') WITHIN GROUP (ORDER BY TD.ID)  FROM FAS_ADMIN.FAS_AUDIT F
INNER JOIN FAS_ADMIN.FAS_AUDIT_TEAM_DATA TD ON F.ID = TD.FAS_AUDIT_ID
INNER JOIN AUD_REG.SYSTEM_USER SU ON TD.AUDITOR_ID = SU.USER_ID
WHERE TD.ROLE_ID = 3 AND F.ID = FA.ID
GROUP BY FA.ID) AUDITORS
FROM AUD_PUBLIC.REG_SURVEY_2_1 RS1
INNER JOIN AUD_PUBLIC.REG_SURVEY RS ON RS1.SURVEY_ID = RS.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY RSU ON RS.SURVEY_ID = RSU.ID
INNER JOIN AUD_PUBLIC.REF_SURVEY_STATUS RSS ON RS.SURVEY_STATUS_ID = RSS.ID
INNER JOIN FAS_ADMIN.FAS_AUDIT FA ON RS.SURVEY_AUDIT_ID = FA.ID
INNER JOIN AUD_ORG.REF_DEPARTMENT RD ON FA.AUDIT_CHECK_DEP_ID = RD.DEPARTMENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY AE ON RS.SURVEY_ENT_ID = AE.ENT_ID
INNER JOIN AUD_ORG.AUDIT_ENTITY TEZ ON AE.ENT_TEZ = TEZ.ENT_ID
LEFT JOIN AUD_ORG.AUDIT_ENTITY TTZ ON AE.ENT_TTZ = TTZ.ENT_ID
INNER JOIN AUD_ORG.REF_BUDGET_TYPE RBT ON AE.ENT_BUDGET_TYPE = RBT.BUDGET_TYPE_ID
INNER JOIN AUD_PUBLIC.REF_BRANCH RB ON RS1.BRANCH_ID = RB.ID
WHERE RS1.IS_ACTIVE = 1 AND RS1.SURVEY_ID = :SURVEY_ID`;

const createSqlSurvey2_3 = `INSERT INTO AUD_PUBLIC.REG_SURVEY_2_1 (SURVEY_ID, BRANCH_ID, ACTIVITY_NAME, HOLDING_PERCENT, REG_DATE, REG_DOCUMENT_NO, IS_LEGAL18, REG_CAPITAL_AMOUNT, STATE_CAPITAL_AMOUNT, STRUCTURE_DATE, STRUCTURE_DOCUMENT_NO, HEAD_EMPLOYEE, MIDDLE_EMPLOYEE, NORMAL_EMPLOYEE, 
TOTAL_EMPLOYEE, PROFIT_PLAN, PROFIT_COMPLETION, TARGET_LEVEL, TARGET_LEVEL_PERCENT, TARGET_LEVEL_DESCRIPTION, PREV_INCOME, PREV_PROCESS_COST, 
PREV_NON_PROCESS_COST, PREV_INCOME_TAX, PREV_PROFIT, PREV_DESCRIPTION, CY_INCOME, CY_PROCESS_COST, CY_NON_PROCESS_COST, CY_INCOME_TAX, CY_PROFIT, 
CY_DESCRIPTION, IS_STATE, IS_STATE_DESCRIPTION, IS_CHANGE, IS_CHANGE_DESCRIPTION, IS_LINKED, IS_LINKED_DESCRIPTION, IS_SCOPED, IS_SCOPED_DESCRIPTION, 
PREV_SALARY_COST, PREV_PROMOTION_COST, PREV_GUEST_COST, CY_SALARY_COST, CY_PROMOTION_COST, CY_GUEST_COST, IS_ACTIVE, CREATED_BY, CREATED_DATE) 
VALUES (:SURVEY_ID, :BRANCH_ID, :ACTIVITY_NAME, :HOLDING_PERCENT, :REG_DATE, :REG_DOCUMENT_NO, :IS_LEGAL18, :REG_CAPITAL_AMOUNT, :STATE_CAPITAL_AMOUNT, :STRUCTURE_DATE, :STRUCTURE_DOCUMENT_NO, :HEAD_EMPLOYEE, :MIDDLE_EMPLOYEE, :NORMAL_EMPLOYEE, :TOTAL_EMPLOYEE, :PROFIT_PLAN, :PROFIT_COMPLETION, :TARGET_LEVEL, :TARGET_LEVEL_PERCENT, :TARGET_LEVEL_DESCRIPTION, :PREV_INCOME, :PREV_PROCESS_COST, :PREV_NON_PROCESS_COST, :PREV_INCOME_TAX, :PREV_PROFIT, 
:PREV_DESCRIPTION, :CY_INCOME, :CY_PROCESS_COST, :CY_NON_PROCESS_COST, :CY_INCOME_TAX, :CY_PROFIT, :CY_DESCRIPTION, :IS_STATE, :IS_STATE_DESCRIPTION, :IS_CHANGE, :IS_CHANGE_DESCRIPTION, :IS_LINKED, :IS_LINKED_DESCRIPTION, :IS_SCOPED, :IS_SCOPED_DESCRIPTION, :PREV_SALARY_COST,
:PREV_PROMOTION_COST, :PREV_GUEST_COST, :CY_SALARY_COST, :CY_PROMOTION_COST, :CY_GUEST_COST, 1, :CREATED_BY, SYSDATE)`;

const updateSqlSurvey2_3 = `UPDATE AUD_PUBLIC.REG_SURVEY_1
  SET BUDGET_AMOUNT = :BUDGET_AMOUNT,
  RUNNING_COST_AMOUNT = :RUNNING_COST_AMOUNT,
  INVESTMENT_COST_AMOUNT = :INVESTMENT_COST_AMOUNT,
  EXECUTION_AMOUNT = :EXECUTION_AMOUNT,
  EXECUTION_RUNNING_COST = :EXECUTION_RUNNING_COST,
  EXECUTION_INVESTMENT_COST = :EXECUTION_INVESTMENT_COST,
  HEMNELT_DUN = :HEMNELT_DUN, 
  HEMNELT_PERCENT = :HEMNELT_PERCENT,
  NEW_EMP_COUNT = :NEW_EMP_COUNT,
  NEW_EMP_SALARY = :NEW_EMP_SALARY,
  RENEW_EMP_COUNT = :RENEW_EMP_COUNT,
  RENEW_EMP_SALARY = :RENEW_EMP_SALARY,
  IMP_SALARY_COUNT = :IMP_SALARY_COUNT,
  IMP_SALARY_AMOUNT = :IMP_SALARY_AMOUNT,
  IMP_PROMO_COUNT = :IMP_PROMO_COUNT,
  IMP_PROMO_AMOUNT = :IMP_PROMO_AMOUNT,
  IMP_GUEST_AMOUNT = :IMP_GUEST_AMOUNT,
  IMP_GIFT_AMOUNT = :IMP_GIFT_AMOUNT,
  CAR_COUNT = :CAR_COUNT,
  CAR_AMOUNT = :CAR_AMOUNT,
  FURNITURE_AMOUNT = :FURNITURE_AMOUNT,
  CLOTHES_AMOUNT = :CLOTHES_AMOUNT,
  OTHER_TOOLS_AMOUNT = :OTHER_TOOLS_AMOUNT,
  EXTERNAL_EVENT_AMOUNT = :EXTERNAL_EVENT_AMOUNT,
  INTERNAL_EVENT_AMOUNT = :INTERNAL_EVENT_AMOUNT,
  CEREMONY_AMOUNT = :CEREMONY_AMOUNT,
  CONTENT_AMOUNT = :CONTENT_AMOUNT,
  BASE_PLAN_AMOUNT = :BASE_PLAN_AMOUNT,
  BASE_COMPLETION_AMOUNT = :BASE_COMPLETION_AMOUNT,
  BASE_PERCENT = :BASE_PERCENT,
  DOCUMENT_PLAN_AMOUNT = :DOCUMENT_PLAN_AMOUNT,
  DOCUMENT_COMPLETION_AMOUNT = :DOCUMENT_COMPLETION_AMOUNT,
  DOCUMENT_PERCENT = :DOCUMENT_PERCENT,
  UPDATED_BY = :CREATED_BY,
  UPDATED_DATE = SYSDATE
      WHERE ID = :P_ID`;

const deleteSqlSurvey2_3 = `UPDATE AUD_PUBLIC.REG_SURVEY_2_1
SET IS_ACTIVE = 0,
UPDATED_BY = :CREATED_BY,
UPDATED_DATE = SYSDATE
    WHERE ID = :P_ID;)`;

async function getSurvey2_3(context) {
  let query = baseQuery2_1;
  const binds = {};
  binds.SURVEY_ID = context.SURVEY_ID;

  console.log(binds, query);
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.getSurvey2_3 = getSurvey2_3;

async function createUpdateSurvey2_3(data) {
  if (data.P_ID === null) {
    const result = await database.simpleExecute(createSqlSurvey2_1, data, {
      autoCommit: true,
    });

    if (result.Error !== undefined) return { code: 405, result };
    return {
      message: "success",
    };
  } else {
    const result = await database.simpleExecute(updateSqlSurvey2_1, data, {
      autoCommit: true,
    });

    if (result.rowsAffected) {
      return {
        message: "success",
      };
    } else {
      return null;
    }
  }
}

module.exports.createUpdateSurvey2_3 = createUpdateSurvey2_3;

async function deleteSurvey2_3(data) {
  const result = await database.simpleExecute(deleteSqlSurvey2_1, data, {
    autoCommit: true,
  });

  if (result.rowsAffected) {
    return {
      message: "success",
    };
  } else {
    return null;
  }
}

module.exports.deleteSurvey2_3 = deleteSurvey2_3;