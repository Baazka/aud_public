const survey = require("../db_apis/survey");
var dateFormat = require("dateformat");

async function get(req, res, next) {
  try {
    const context = {};
    context.SURVEY_YEAR = parseInt(req.params.yearid, 10);
    context.SURVEY_ENT_ID = parseInt(req.params.entid, 10);

    const rows = await survey.get(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.get = get;

//Survey 1
async function getSurvey1(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey1(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey1 = getSurvey1;

function getData(req) {
  let data = {};
  data = {
    BUDGET_AMOUNT:
      req.body.BUDGET_AMOUNT != null ? parseFloat(req.body.BUDGET_AMOUNT) : null,
    RUNNING_COST_AMOUNT:
      req.body.RUNNING_COST_AMOUNT != null ? parseFloat(req.body.RUNNING_COST_AMOUNT) : null,
    INVESTMENT_COST_AMOUNT:
      req.body.INVESTMENT_COST_AMOUNT != null ? parseFloat(req.body.INVESTMENT_COST_AMOUNT) : null,
    EXECUTION_AMOUNT:
      req.body.EXECUTION_AMOUNT != null ? parseFloat(req.body.EXECUTION_AMOUNT) : null,
    EXECUTION_RUNNING_COST:
      req.body.EXECUTION_RUNNING_COST != null ? parseFloat(req.body.EXECUTION_RUNNING_COST) : null,
    EXECUTION_INVESTMENT_COST:
      req.body.EXECUTION_INVESTMENT_COST != null ? parseFloat(req.body.EXECUTION_INVESTMENT_COST) : null,
    HEMNELT_DUN:
      req.body.HEMNELT_DUN != null ? parseFloat(req.body.HEMNELT_DUN) : null,
    NEW_EMP_COUNT:
      req.body.NEW_EMP_COUNT != null ? parseInt(req.body.NEW_EMP_COUNT) : null,
    NEW_EMP_SALARY:
      req.body.NEW_EMP_SALARY != null
        ? parseFloat(req.body.NEW_EMP_SALARY)
        : null,
    RENEW_EMP_COUNT:
      req.body.RENEW_EMP_COUNT != null
        ? parseInt(req.body.RENEW_EMP_COUNT)
        : null,
    RENEW_EMP_SALARY:
      req.body.RENEW_EMP_SALARY != null
        ? parseFloat(req.body.RENEW_EMP_SALARY)
        : null,
    IMP_SALARY_COUNT:
      req.body.IMP_SALARY_COUNT != null
        ? parseInt(req.body.IMP_SALARY_COUNT)
        : null,
    IMP_SALARY_AMOUNT:
      req.body.IMP_SALARY_AMOUNT != null
        ? parseFloat(req.body.IMP_SALARY_AMOUNT)
        : null,
    IMP_PROMO_COUNT:
      req.body.IMP_PROMO_COUNT != null
        ? parseInt(req.body.IMP_PROMO_COUNT)
        : null,
    IMP_PROMO_AMOUNT:
      req.body.IMP_PROMO_AMOUNT != null
        ? parseFloat(req.body.IMP_PROMO_AMOUNT)
        : null,
    IMP_GUEST_AMOUNT:
      req.body.IMP_GUEST_AMOUNT != null
        ? parseFloat(req.body.IMP_GUEST_AMOUNT)
        : null,
    IMP_GIFT_AMOUNT:
      req.body.IMP_GIFT_AMOUNT != null
        ? parseFloat(req.body.IMP_GIFT_AMOUNT)
        : null,
    CAR_COUNT: req.body.CAR_COUNT != null ? parseInt(req.body.CAR_COUNT) : null,
    CAR_AMOUNT:
      req.body.CAR_AMOUNT != null ? parseFloat(req.body.CAR_AMOUNT) : null,
    FURNITURE_AMOUNT:
      req.body.FURNITURE_AMOUNT != null
        ? parseFloat(req.body.FURNITURE_AMOUNT)
        : null,
    CLOTHES_AMOUNT:
      req.body.CLOTHES_AMOUNT != null
        ? parseFloat(req.body.CLOTHES_AMOUNT)
        : null,
    OTHER_TOOLS_AMOUNT:
      req.body.OTHER_TOOLS_AMOUNT != null
        ? parseFloat(req.body.OTHER_TOOLS_AMOUNT)
        : null,
    EXTERNAL_EVENT_AMOUNT:
      req.body.EXTERNAL_EVENT_AMOUNT != null
        ? parseFloat(req.body.EXTERNAL_EVENT_AMOUNT)
        : null,
    INTERNAL_EVENT_AMOUNT:
      req.body.INTERNAL_EVENT_AMOUNT != null
        ? parseFloat(req.body.INTERNAL_EVENT_AMOUNT)
        : null,
    CEREMONY_AMOUNT:
      req.body.CEREMONY_AMOUNT != null
        ? parseFloat(req.body.CEREMONY_AMOUNT)
        : null,
    CONTENT_AMOUNT:
      req.body.CONTENT_AMOUNT != null
        ? parseFloat(req.body.CONTENT_AMOUNT)
        : null,
    BASE_PLAN_AMOUNT:
      req.body.BASE_PLAN_AMOUNT != null
        ? parseFloat(req.body.BASE_PLAN_AMOUNT)
        : null,
    BASE_COMPLETION_AMOUNT:
      req.body.BASE_COMPLETION_AMOUNT != null
        ? parseFloat(req.body.BASE_COMPLETION_AMOUNT)
        : null,
    DOCUMENT_PLAN_AMOUNT:
      req.body.DOCUMENT_PLAN_AMOUNT != null
        ? parseFloat(req.body.DOCUMENT_PLAN_AMOUNT)
        : null,
    DOCUMENT_COMPLETION_AMOUNT:
      req.body.DOCUMENT_COMPLETION_AMOUNT != null
        ? parseFloat(req.body.DOCUMENT_COMPLETION_AMOUNT)
        : null,
    CREATED_BY: parseInt(req.body.CREATED_BY),
  };
  if (req.body.ID != null) {
    data.P_ID = req.body.ID;
  } else {
    data.P_ID = null;
    data.SURVEY_ID = parseInt(req.body.SURVEY_ID);
  }

  return data;
}

async function postSurvey1CreateUpdate(req, res, next) {
  try {
    let data = getData(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey1(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey1CreateUpdate = postSurvey1CreateUpdate;

async function postSurvey1Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey1({
      UPDATED_BY: req.body.UPDATED_BY,
      P_ID: req.body.ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey1Delete = postSurvey1Delete;

//Survey 2_1
async function getSurvey2_1(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey2_1(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey2_1 = getSurvey2_1;

function getData2_1(req) {
  let data = {};
  data = {
    BRANCH_ID:
      req.body.BRANCH_ID != null ? parseFloat(req.body.BRANCH_ID) : null,
      ACTIVITY_NAME: req.body.ACTIVITY_NAME,
      HOLDING_PERCENT: req.body.HOLDING_PERCENT != null ? parseFloat(req.body.HOLDING_PERCENT) : null,
      REG_DATE: dateFormat(req.body.CREATED_DATE, "dd-mmm-yyyy"),
      REG_DOCUMENT_NO: req.body.REG_DOCUMENT_NO,
      IS_LEGAL18: req.body.IS_LEGAL18 != null ? parseFloat(req.body.IS_LEGAL18) : null,
      REG_CAPITAL_AMOUNT: req.body.REG_CAPITAL_AMOUNT != null ? parseFloat(req.body.REG_CAPITAL_AMOUNT) : null,
      STATE_CAPITAL_AMOUNT: req.body.STATE_CAPITAL_AMOUNT != null ? parseFloat(req.body.STATE_CAPITAL_AMOUNT) : null,
      STRUCTURE_DATE: dateFormat(req.body.STRUCTURE_DATE, "dd-mmm-yyyy"),
      STRUCTURE_DOCUMENT_NO: req.body.STRUCTURE_DOCUMENT_NO,
      HEAD_EMPLOYEE: req.body.HEAD_EMPLOYEE != null ? parseInt(req.body.HEAD_EMPLOYEE) : null,
      MIDDLE_EMPLOYEE: req.body.MIDDLE_EMPLOYEE != null ? parseFloat(req.body.MIDDLE_EMPLOYEE) : null,
      NORMAL_EMPLOYEE: req.body.NORMAL_EMPLOYEE != null ? parseInt(req.body.NORMAL_EMPLOYEE) : null,
      TOTAL_EMPLOYEE: req.body.TOTAL_EMPLOYEE != null ? parseFloat(req.body.TOTAL_EMPLOYEE) : null,
      PROFIT_PLAN: req.body.PROFIT_PLAN != null ? parseInt(req.body.PROFIT_PLAN) : null,
      PROFIT_COMPLETION: req.body.PROFIT_COMPLETION != null ? parseFloat(req.body.PROFIT_COMPLETION) : null,
      TARGET_LEVEL: req.body.TARGET_LEVEL != null ? parseFloat(req.body.TARGET_LEVEL) : null,
      TARGET_LEVEL_PERCENT: req.body.TARGET_LEVEL_PERCENT != null ? parseFloat(req.body.TARGET_LEVEL_PERCENT) : null,
      TARGET_LEVEL_DESCRIPTION: req.body.TARGET_LEVEL_DESCRIPTION,
      PREV_INCOME: req.body.PREV_INCOME != null ? parseFloat(req.body.PREV_INCOME) : null,
      PREV_PROCESS_COST: req.body.PREV_PROCESS_COST != null ? parseFloat(req.body.PREV_PROCESS_COST) : null,
      PREV_NON_PROCESS_COST: req.body.PREV_NON_PROCESS_COST != null ? parseFloat(req.body.PREV_NON_PROCESS_COST) : null,
      PREV_INCOME_TAX: req.body.PREV_INCOME_TAX != null ? parseFloat(req.body.PREV_INCOME_TAX) : null,
      PREV_PROFIT: req.body.PREV_PROFIT != null ? parseFloat(req.body.PREV_PROFIT) : null,
      PREV_DESCRIPTION: req.body.PREV_DESCRIPTION,
      CY_INCOME: req.body.CY_INCOME != null ? parseFloat(req.body.CY_INCOME) : null,
      CY_PROCESS_COST: req.body.CY_PROCESS_COST != null ? parseFloat(req.body.CY_PROCESS_COST) : null,
      CY_NON_PROCESS_COST: req.body.CY_NON_PROCESS_COST != null ? parseFloat(req.body.CY_NON_PROCESS_COST) : null,
      CY_INCOME_TAX: req.body.CY_INCOME_TAX != null ? parseFloat(req.body.CY_INCOME_TAX) : null,
      CY_PROFIT: req.body.CY_PROFIT != null ? parseFloat(req.body.CY_PROFIT) : null,
      CY_DESCRIPTION: req.body.CY_DESCRIPTION,
      IS_STATE: req.body.IS_STATE != null ? parseFloat(req.body.IS_STATE) : null,
      IS_STATE_DESCRIPTION: req.body.IS_STATE_DESCRIPTION,
      IS_CHANGE: req.body.IS_CHANGE != null ? parseFloat(req.body.IS_CHANGE) : null,
      IS_CHANGE_DESCRIPTION: req.body.IS_CHANGE_DESCRIPTION,
      IS_LINKED: req.body.IS_LINKED != null ? parseFloat(req.body.IS_LINKED) : null,
      IS_LINKED_DESCRIPTION: req.body.IS_LINKED_DESCRIPTION,
      IS_SCOPED: req.body.IS_SCOPED != null ? parseFloat(req.body.IS_SCOPED) : null,
      IS_SCOPED_DESCRIPTION: req.body.IS_SCOPED_DESCRIPTION,
      PREV_SALARY_COST: req.body.PREV_SALARY_COST != null ? parseFloat(req.body.PREV_SALARY_COST) : null,
      PREV_PROMOTION_COST: req.body.PREV_PROMOTION_COST != null ? parseFloat(req.body.PREV_PROMOTION_COST) : null,
      PREV_GUEST_COST: req.body.PREV_GUEST_COST != null ? parseFloat(req.body.PREV_GUEST_COST) : null,
      CY_SALARY_COST: req.body.CY_SALARY_COST != null ? parseFloat(req.body.CY_SALARY_COST) : null,
      CY_PROMOTION_COST: req.body.CY_PROMOTION_COST != null ? parseFloat(req.body.CY_PROMOTION_COST) : null,
      CY_GUEST_COST: req.body.CY_GUEST_COST != null ? parseFloat(req.body.CY_GUEST_COST) : null,
      CREATED_BY: parseInt(req.body.CREATED_BY),
  };
  if (req.body.P_ID != null) {
    data.P_ID = req.body.P_ID;
  } else {
    data.P_ID = null;
    data.SURVEY_ID = parseInt(req.body.SURVEY_ID);
  }

  return data;
}

async function postSurvey2_1CreateUpdate(req, res, next) {
  try {
    let data = getData2_1(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey2_1(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey2_1CreateUpdate = postSurvey2_1CreateUpdate;

async function postSurvey2_1Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey2_1({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey2_1Delete = postSurvey2_1Delete;

//Survey 2_2
async function getSurvey2_2(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey2_2(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey2_2 = getSurvey2_2;

function getData2_2(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.ID),
    BUDGET_AMOUNT:
      req.body.BUDGET_AMOUNT != null ? parseFloat(req.body.BUDGET_AMOUNT) : null,
    RUNNING_COST_AMOUNT:
      req.body.RUNNING_COST_AMOUNT != null ? parseFloat(req.body.RUNNING_COST_AMOUNT) : null,
    INVESTMENT_COST_AMOUNT:
      req.body.INVESTMENT_COST_AMOUNT != null ? parseFloat(req.body.INVESTMENT_COST_AMOUNT) : null,
    EXECUTION_AMOUNT:
      req.body.EXECUTION_AMOUNT != null ? parseFloat(req.body.EXECUTION_AMOUNT) : null,
    EXECUTION_RUNNING_COST:
      req.body.EXECUTION_RUNNING_COST != null ? parseFloat(req.body.EXECUTION_RUNNING_COST) : null,
    EXECUTION_INVESTMENT_COST:
      req.body.EXECUTION_INVESTMENT_COST != null ? parseFloat(req.body.EXECUTION_INVESTMENT_COST) : null,
    HEMNELT_DUN:
      req.body.HEMNELT_DUN != null ? parseFloat(req.body.HEMNELT_DUN) : null,
    HEMNELT_PERCENT:
      req.body.HEMNELT_PERCENT != null
        ? parseFloat(req.body.HEMNELT_PERCENT)
        : null,
    NEW_EMP_COUNT:
      req.body.NEW_EMP_COUNT != null ? parseInt(req.body.NEW_EMP_COUNT) : null,
    NEW_EMP_SALARY:
      req.body.NEW_EMP_SALARY != null
        ? parseFloat(req.body.NEW_EMP_SALARY)
        : null,
    RENEW_EMP_COUNT:
      req.body.RENEW_EMP_COUNT != null
        ? parseInt(req.body.RENEW_EMP_COUNT)
        : null,
    RENEW_EMP_SALARY:
      req.body.RENEW_EMP_SALARY != null
        ? parseFloat(req.body.RENEW_EMP_SALARY)
        : null,
    IMP_SALARY_COUNT:
      req.body.IMP_SALARY_COUNT != null
        ? parseInt(req.body.IMP_SALARY_COUNT)
        : null,
    IMP_SALARY_AMOUNT:
      req.body.IMP_SALARY_AMOUNT != null
        ? parseFloat(req.body.IMP_SALARY_AMOUNT)
        : null,
    IMP_PROMO_COUNT:
      req.body.IMP_PROMO_COUNT != null
        ? parseInt(req.body.IMP_PROMO_COUNT)
        : null,
    IMP_PROMO_AMOUNT:
      req.body.IMP_PROMO_AMOUNT != null
        ? parseFloat(req.body.IMP_PROMO_AMOUNT)
        : null,
    IMP_GUEST_AMOUNT:
      req.body.IMP_GUEST_AMOUNT != null
        ? parseFloat(req.body.IMP_GUEST_AMOUNT)
        : null,
    IMP_GIFT_AMOUNT:
      req.body.IMP_GIFT_AMOUNT != null
        ? parseFloat(req.body.IMP_GIFT_AMOUNT)
        : null,
    CAR_COUNT: req.body.CAR_COUNT != null ? parseInt(req.body.CAR_COUNT) : null,
    CAR_AMOUNT:
      req.body.CAR_AMOUNT != null ? parseFloat(req.body.CAR_AMOUNT) : null,
    FURNITURE_AMOUNT:
      req.body.FURNITURE_AMOUNT != null
        ? parseFloat(req.body.FURNITURE_AMOUNT)
        : null,
    CLOTHES_AMOUNT:
      req.body.CLOTHES_AMOUNT != null
        ? parseFloat(req.body.CLOTHES_AMOUNT)
        : null,
    OTHER_TOOLS_AMOUNT:
      req.body.OTHER_TOOLS_AMOUNT != null
        ? parseFloat(req.body.OTHER_TOOLS_AMOUNT)
        : null,
    EXTERNAL_EVENT_AMOUNT:
      req.body.EXTERNAL_EVENT_AMOUNT != null
        ? parseFloat(req.body.EXTERNAL_EVENT_AMOUNT)
        : null,
    INTERNAL_EVENT_AMOUNT:
      req.body.INTERNAL_EVENT_AMOUNT != null
        ? parseFloat(req.body.INTERNAL_EVENT_AMOUNT)
        : null,
    CEREMONY_AMOUNT:
      req.body.CEREMONY_AMOUNT != null
        ? parseFloat(req.body.CEREMONY_AMOUNT)
        : null,
    CONTENT_AMOUNT:
      req.body.CONTENT_AMOUNT != null
        ? parseFloat(req.body.CONTENT_AMOUNT)
        : null,
    BASE_PLAN_AMOUNT:
      req.body.BASE_PLAN_AMOUNT != null
        ? parseFloat(req.body.BASE_PLAN_AMOUNT)
        : null,
    BASE_COMPLETION_AMOUNT:
      req.body.BASE_COMPLETION_AMOUNT != null
        ? parseFloat(req.body.BASE_COMPLETION_AMOUNT)
        : null,
    BASE_PERCENT:
      req.body.BASE_PERCENT != null ? parseFloat(req.body.BASE_PERCENT) : null,
    DOCUMENT_PLAN_AMOUNT:
      req.body.DOCUMENT_PLAN_AMOUNT != null
        ? parseFloat(req.body.DOCUMENT_PLAN_AMOUNT)
        : null,
    DOCUMENT_COMPLETION_AMOUNT:
      req.body.DOCUMENT_COMPLETION_AMOUNT != null
        ? parseFloat(req.body.DOCUMENT_COMPLETION_AMOUNT)
        : null,
    DOCUMENT_PERCENT:
      req.body.DOCUMENT_PERCENT != null
        ? parseFloat(req.body.DOCUMENT_PERCENT)
        : null,
    CREATED_BY: parseInt(req.body.CREATED_BY),
  };
  if (req.body.ID != null) {
    data.P_ID = req.body.ID;
  } else {
    data.P_ID = null;
    data.SURVEY_ID = parseInt(req.body.SURVEY_ID);
  }

  return data;
}

async function postSurvey2_2CreateUpdate(req, res, next) {
  try {
    let data = getData2_2(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey2_2(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey2_2CreateUpdate = postSurvey2_2CreateUpdate;

async function postSurvey2_2Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey2_2({
      CREATED_BY: req.body.CREATED_BY,
      P_ID: req.params.surveyid,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey2_2Delete = postSurvey2_2Delete;

//Survey 2_3
async function getSurvey2_3(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey2_3(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey2_3 = getSurvey2_3;

function getData2_3(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.ID),
    BUDGET_AMOUNT:
      req.body.BUDGET_AMOUNT != null ? parseFloat(req.body.BUDGET_AMOUNT) : null,
    RUNNING_COST_AMOUNT:
      req.body.RUNNING_COST_AMOUNT != null ? parseFloat(req.body.RUNNING_COST_AMOUNT) : null,
    INVESTMENT_COST_AMOUNT:
      req.body.INVESTMENT_COST_AMOUNT != null ? parseFloat(req.body.INVESTMENT_COST_AMOUNT) : null,
    EXECUTION_AMOUNT:
      req.body.EXECUTION_AMOUNT != null ? parseFloat(req.body.EXECUTION_AMOUNT) : null,
    EXECUTION_RUNNING_COST:
      req.body.EXECUTION_RUNNING_COST != null ? parseFloat(req.body.EXECUTION_RUNNING_COST) : null,
    EXECUTION_INVESTMENT_COST:
      req.body.EXECUTION_INVESTMENT_COST != null ? parseFloat(req.body.EXECUTION_INVESTMENT_COST) : null,
    HEMNELT_DUN:
      req.body.HEMNELT_DUN != null ? parseFloat(req.body.HEMNELT_DUN) : null,
    HEMNELT_PERCENT:
      req.body.HEMNELT_PERCENT != null
        ? parseFloat(req.body.HEMNELT_PERCENT)
        : null,
    NEW_EMP_COUNT:
      req.body.NEW_EMP_COUNT != null ? parseInt(req.body.NEW_EMP_COUNT) : null,
    NEW_EMP_SALARY:
      req.body.NEW_EMP_SALARY != null
        ? parseFloat(req.body.NEW_EMP_SALARY)
        : null,
    RENEW_EMP_COUNT:
      req.body.RENEW_EMP_COUNT != null
        ? parseInt(req.body.RENEW_EMP_COUNT)
        : null,
    RENEW_EMP_SALARY:
      req.body.RENEW_EMP_SALARY != null
        ? parseFloat(req.body.RENEW_EMP_SALARY)
        : null,
    IMP_SALARY_COUNT:
      req.body.IMP_SALARY_COUNT != null
        ? parseInt(req.body.IMP_SALARY_COUNT)
        : null,
    IMP_SALARY_AMOUNT:
      req.body.IMP_SALARY_AMOUNT != null
        ? parseFloat(req.body.IMP_SALARY_AMOUNT)
        : null,
    IMP_PROMO_COUNT:
      req.body.IMP_PROMO_COUNT != null
        ? parseInt(req.body.IMP_PROMO_COUNT)
        : null,
    IMP_PROMO_AMOUNT:
      req.body.IMP_PROMO_AMOUNT != null
        ? parseFloat(req.body.IMP_PROMO_AMOUNT)
        : null,
    IMP_GUEST_AMOUNT:
      req.body.IMP_GUEST_AMOUNT != null
        ? parseFloat(req.body.IMP_GUEST_AMOUNT)
        : null,
    IMP_GIFT_AMOUNT:
      req.body.IMP_GIFT_AMOUNT != null
        ? parseFloat(req.body.IMP_GIFT_AMOUNT)
        : null,
    CAR_COUNT: req.body.CAR_COUNT != null ? parseInt(req.body.CAR_COUNT) : null,
    CAR_AMOUNT:
      req.body.CAR_AMOUNT != null ? parseFloat(req.body.CAR_AMOUNT) : null,
    FURNITURE_AMOUNT:
      req.body.FURNITURE_AMOUNT != null
        ? parseFloat(req.body.FURNITURE_AMOUNT)
        : null,
    CLOTHES_AMOUNT:
      req.body.CLOTHES_AMOUNT != null
        ? parseFloat(req.body.CLOTHES_AMOUNT)
        : null,
    OTHER_TOOLS_AMOUNT:
      req.body.OTHER_TOOLS_AMOUNT != null
        ? parseFloat(req.body.OTHER_TOOLS_AMOUNT)
        : null,
    EXTERNAL_EVENT_AMOUNT:
      req.body.EXTERNAL_EVENT_AMOUNT != null
        ? parseFloat(req.body.EXTERNAL_EVENT_AMOUNT)
        : null,
    INTERNAL_EVENT_AMOUNT:
      req.body.INTERNAL_EVENT_AMOUNT != null
        ? parseFloat(req.body.INTERNAL_EVENT_AMOUNT)
        : null,
    CEREMONY_AMOUNT:
      req.body.CEREMONY_AMOUNT != null
        ? parseFloat(req.body.CEREMONY_AMOUNT)
        : null,
    CONTENT_AMOUNT:
      req.body.CONTENT_AMOUNT != null
        ? parseFloat(req.body.CONTENT_AMOUNT)
        : null,
    BASE_PLAN_AMOUNT:
      req.body.BASE_PLAN_AMOUNT != null
        ? parseFloat(req.body.BASE_PLAN_AMOUNT)
        : null,
    BASE_COMPLETION_AMOUNT:
      req.body.BASE_COMPLETION_AMOUNT != null
        ? parseFloat(req.body.BASE_COMPLETION_AMOUNT)
        : null,
    BASE_PERCENT:
      req.body.BASE_PERCENT != null ? parseFloat(req.body.BASE_PERCENT) : null,
    DOCUMENT_PLAN_AMOUNT:
      req.body.DOCUMENT_PLAN_AMOUNT != null
        ? parseFloat(req.body.DOCUMENT_PLAN_AMOUNT)
        : null,
    DOCUMENT_COMPLETION_AMOUNT:
      req.body.DOCUMENT_COMPLETION_AMOUNT != null
        ? parseFloat(req.body.DOCUMENT_COMPLETION_AMOUNT)
        : null,
    DOCUMENT_PERCENT:
      req.body.DOCUMENT_PERCENT != null
        ? parseFloat(req.body.DOCUMENT_PERCENT)
        : null,
    CREATED_BY: parseInt(req.body.CREATED_BY),
  };
  if (req.body.ID != null) {
    data.P_ID = req.body.ID;
  } else {
    data.P_ID = null;
    data.SURVEY_ID = parseInt(req.body.SURVEY_ID);
  }

  return data;
}

async function postSurvey2_3CreateUpdate(req, res, next) {
  try {
    let data = getData2_3(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey2_3(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey2_3CreateUpdate = postSurvey2_3CreateUpdate;

async function postSurvey2_3Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey2_3({
      CREATED_BY: req.body.CREATED_BY,
      P_ID: req.params.surveyid,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey2_3Delete = postSurvey2_3Delete;
