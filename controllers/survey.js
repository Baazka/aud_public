const survey = require("../db_apis/survey");
var dateFormat = require("dateformat");
const nodemailer = require("nodemailer");

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

//ENTITY SURVEY LIST
async function getEntList(req, res, next) {
  try {
    const context = {};
    context.ENT_ID = parseInt(req.params.ent_id, 10);

    const rows = await survey.getEntList(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getEntList = getEntList;

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
      req.body.BUDGET_AMOUNT != null
        ? parseFloat(req.body.BUDGET_AMOUNT)
        : null,
    RUNNING_COST_AMOUNT:
      req.body.RUNNING_COST_AMOUNT != null
        ? parseFloat(req.body.RUNNING_COST_AMOUNT)
        : null,
    INVESTMENT_COST_AMOUNT:
      req.body.INVESTMENT_COST_AMOUNT != null
        ? parseFloat(req.body.INVESTMENT_COST_AMOUNT)
        : null,
    EXECUTION_AMOUNT:
      req.body.EXECUTION_AMOUNT != null
        ? parseFloat(req.body.EXECUTION_AMOUNT)
        : null,
    EXECUTION_RUNNING_COST:
      req.body.EXECUTION_RUNNING_COST != null
        ? parseFloat(req.body.EXECUTION_RUNNING_COST)
        : null,
    EXECUTION_INVESTMENT_COST:
      req.body.EXECUTION_INVESTMENT_COST != null
        ? parseFloat(req.body.EXECUTION_INVESTMENT_COST)
        : null,
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
    HOLDING_PERCENT:
      req.body.HOLDING_PERCENT != null
        ? parseFloat(req.body.HOLDING_PERCENT)
        : null,
    REG_DATE: dateFormat(req.body.REG_DATE, "dd-mmm-yyyy"), //dateFormat(req.body.CREATED_DATE, "dd-mmm-yyyy"),
    REG_DOCUMENT_NO: req.body.REG_DOCUMENT_NO,
    IS_LEGAL18:
      req.body.IS_LEGAL18 != null ? parseFloat(req.body.IS_LEGAL18) : null,
    REG_CAPITAL_AMOUNT:
      req.body.REG_CAPITAL_AMOUNT != null
        ? parseFloat(req.body.REG_CAPITAL_AMOUNT)
        : null,
    STATE_CAPITAL_AMOUNT:
      req.body.STATE_CAPITAL_AMOUNT != null
        ? parseFloat(req.body.STATE_CAPITAL_AMOUNT)
        : null,
    STRUCTURE_DATE: dateFormat(req.body.STRUCTURE_DATE, "dd-mmm-yyyy"),
    STRUCTURE_DOCUMENT_NO: req.body.STRUCTURE_DOCUMENT_NO,
    HEAD_EMPLOYEE:
      req.body.HEAD_EMPLOYEE != null ? parseInt(req.body.HEAD_EMPLOYEE) : null,
    MIDDLE_EMPLOYEE:
      req.body.MIDDLE_EMPLOYEE != null
        ? parseFloat(req.body.MIDDLE_EMPLOYEE)
        : null,
    NORMAL_EMPLOYEE:
      req.body.NORMAL_EMPLOYEE != null
        ? parseInt(req.body.NORMAL_EMPLOYEE)
        : null,
    TOTAL_EMPLOYEE:
      req.body.TOTAL_EMPLOYEE != null
        ? parseFloat(req.body.TOTAL_EMPLOYEE)
        : null,
    PROFIT_PLAN:
      req.body.PROFIT_PLAN != null ? parseInt(req.body.PROFIT_PLAN) : null,
    PROFIT_COMPLETION:
      req.body.PROFIT_COMPLETION != null
        ? parseFloat(req.body.PROFIT_COMPLETION)
        : null,
    TARGET_LEVEL:
      req.body.TARGET_LEVEL != null ? parseFloat(req.body.TARGET_LEVEL) : null,
    TARGET_LEVEL_PERCENT:
      req.body.TARGET_LEVEL_PERCENT != null
        ? parseFloat(req.body.TARGET_LEVEL_PERCENT)
        : null,
    TARGET_LEVEL_DESCRIPTION: req.body.TARGET_LEVEL_DESCRIPTION,
    PREV_INCOME:
      req.body.PREV_INCOME != null ? parseFloat(req.body.PREV_INCOME) : null,
    PREV_PROCESS_COST:
      req.body.PREV_PROCESS_COST != null
        ? parseFloat(req.body.PREV_PROCESS_COST)
        : null,
    PREV_NON_PROCESS_COST:
      req.body.PREV_NON_PROCESS_COST != null
        ? parseFloat(req.body.PREV_NON_PROCESS_COST)
        : null,
    PREV_INCOME_TAX:
      req.body.PREV_INCOME_TAX != null
        ? parseFloat(req.body.PREV_INCOME_TAX)
        : null,
    PREV_PROFIT:
      req.body.PREV_PROFIT != null ? parseFloat(req.body.PREV_PROFIT) : null,
    PREV_DESCRIPTION: req.body.PREV_DESCRIPTION,
    CY_INCOME:
      req.body.CY_INCOME != null ? parseFloat(req.body.CY_INCOME) : null,
    CY_PROCESS_COST:
      req.body.CY_PROCESS_COST != null
        ? parseFloat(req.body.CY_PROCESS_COST)
        : null,
    CY_NON_PROCESS_COST:
      req.body.CY_NON_PROCESS_COST != null
        ? parseFloat(req.body.CY_NON_PROCESS_COST)
        : null,
    CY_INCOME_TAX:
      req.body.CY_INCOME_TAX != null
        ? parseFloat(req.body.CY_INCOME_TAX)
        : null,
    CY_PROFIT:
      req.body.CY_PROFIT != null ? parseFloat(req.body.CY_PROFIT) : null,
    CY_DESCRIPTION: req.body.CY_DESCRIPTION,
    IS_STATE: req.body.IS_STATE != null ? parseFloat(req.body.IS_STATE) : null,
    IS_STATE_DESCRIPTION: req.body.IS_STATE_DESCRIPTION,
    IS_CHANGE:
      req.body.IS_CHANGE != null ? parseFloat(req.body.IS_CHANGE) : null,
    IS_CHANGE_DESCRIPTION: req.body.IS_CHANGE_DESCRIPTION,
    IS_LINKED:
      req.body.IS_LINKED != null ? parseFloat(req.body.IS_LINKED) : null,
    IS_LINKED_DESCRIPTION: req.body.IS_LINKED_DESCRIPTION,
    IS_SCOPED:
      req.body.IS_SCOPED != null ? parseFloat(req.body.IS_SCOPED) : null,
    IS_SCOPED_DESCRIPTION: req.body.IS_SCOPED_DESCRIPTION,
    PREV_SALARY_COST:
      req.body.PREV_SALARY_COST != null
        ? parseFloat(req.body.PREV_SALARY_COST)
        : null,
    PREV_PROMOTION_COST:
      req.body.PREV_PROMOTION_COST != null
        ? parseFloat(req.body.PREV_PROMOTION_COST)
        : null,
    PREV_GUEST_COST:
      req.body.PREV_GUEST_COST != null
        ? parseFloat(req.body.PREV_GUEST_COST)
        : null,
    CY_SALARY_COST:
      req.body.CY_SALARY_COST != null
        ? parseFloat(req.body.CY_SALARY_COST)
        : null,
    CY_PROMOTION_COST:
      req.body.CY_PROMOTION_COST != null
        ? parseFloat(req.body.CY_PROMOTION_COST)
        : null,
    CY_GUEST_COST:
      req.body.CY_GUEST_COST != null
        ? parseFloat(req.body.CY_GUEST_COST)
        : null,
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
    RECEIVE_PREV_AMOUNT:
      req.body.RECEIVE_PREV_AMOUNT != null
        ? parseFloat(req.body.RECEIVE_PREV_AMOUNT)
        : null,
    RECEIVE_CY_AMOUNT:
      req.body.RECEIVE_CY_AMOUNT != null
        ? parseFloat(req.body.RECEIVE_CY_AMOUNT)
        : null,
    RECEIVE_DESCRIPTION: req.body.RECEIVE_DESCRIPTION,
    NONASSET_PREV_AMOUNT:
      req.body.NONASSET_PREV_AMOUNT != null
        ? parseFloat(req.body.NONASSET_PREV_AMOUNT)
        : null,
    NONASSET_CY_AMOUNT:
      req.body.NONASSET_CY_AMOUNT != null
        ? parseFloat(req.body.NONASSET_CY_AMOUNT)
        : null,
    NONASSET_DESCRIPTION: req.body.NONASSET_DESCRIPTION,
    DEBT_PREV_AMOUNT:
      req.body.DEBT_PREV_AMOUNT != null
        ? parseFloat(req.body.DEBT_PREV_AMOUNT)
        : null,
    DEBT_CY_AMOUNT:
      req.body.DEBT_CY_AMOUNT != null
        ? parseFloat(req.body.DEBT_CY_AMOUNT)
        : null,
    DEBT_DESCRIPTION: req.body.DEBT_DESCRIPTION,
    LONG_DEBT_PREV_AMOUNT:
      req.body.LONG_DEBT_PREV_AMOUNT != null
        ? parseFloat(req.body.LONG_DEBT_PREV_AMOUNT)
        : null,
    LONG_DEBT_CY_AMOUNT:
      req.body.LONG_DEBT_CY_AMOUNT != null
        ? parseFloat(req.body.LONG_DEBT_CY_AMOUNT)
        : null,
    LONG_DEBT_DESCRIPTION: req.body.LONG_DEBT_DESCRIPTION,
    LONG_DEBT_PAYMENT: req.body.LONG_DEBT_PAYMENT,
    LONG_DEBT_IS_COMPLETE:
      req.body.LONG_DEBT_IS_COMPLETE != null
        ? parseInt(req.body.LONG_DEBT_IS_COMPLETE)
        : null,
    PROPERTY_PREV_AMOUNT:
      req.body.PROPERTY_PREV_AMOUNT != null
        ? parseFloat(req.body.PROPERTY_PREV_AMOUNT)
        : null,
    PROPERTY_CY_AMOUNT:
      req.body.PROPERTY_CY_AMOUNT != null
        ? parseFloat(req.body.PROPERTY_CY_AMOUNT)
        : null,
    PROPERTY_DESCRIPTION: req.body.PROPERTY_DESCRIPTION,
    INCOME_PREV_AMOUNT:
      req.body.INCOME_PREV_AMOUNT != null
        ? parseFloat(req.body.INCOME_PREV_AMOUNT)
        : null,
    INCOME_CY_AMOUNT:
      req.body.INCOME_CY_AMOUNT != null
        ? parseFloat(req.body.INCOME_CY_AMOUNT)
        : null,
    INCOME_DESCRIPTION: req.body.INCOME_DESCRIPTION,
    PROFIT_PREV_AMOUNT:
      req.body.PROFIT_PREV_AMOUNT != null
        ? parseFloat(req.body.PROFIT_PREV_AMOUNT)
        : null,
    PROFIT_CY_AMOUNT:
      req.body.PROFIT_CY_AMOUNT != null
        ? parseFloat(req.body.PROFIT_CY_AMOUNT)
        : null,
    INVEST_ORG_PREV_AMOUNT:
      req.body.INVEST_ORG_PREV_AMOUNT != null
        ? parseFloat(req.body.INVEST_ORG_PREV_AMOUNT)
        : null,
    INVEST_ORG_CY_AMOUNT:
      req.body.INVEST_ORG_CY_AMOUNT != null
        ? parseFloat(req.body.INVEST_ORG_CY_AMOUNT)
        : null,
    INVEST_STATE_PREV_AMOUNT:
      req.body.INVEST_STATE_PREV_AMOUNT != null
        ? parseFloat(req.body.INVEST_STATE_PREV_AMOUNT)
        : null,
    INVEST_STATE_CY_AMOUNT:
      req.body.INVEST_STATE_CY_AMOUNT != null
        ? parseFloat(req.body.INVEST_STATE_CY_AMOUNT)
        : null,
    INVEST_LOCAL_PREV_AMOUNT:
      req.body.INVEST_LOCAL_PREV_AMOUNT != null
        ? parseFloat(req.body.INVEST_LOCAL_PREV_AMOUNT)
        : null,
    INVEST_LOCAL_CY_AMOUNT:
      req.body.INVEST_LOCAL_CY_AMOUNT != null
        ? parseFloat(req.body.INVEST_LOCAL_CY_AMOUNT)
        : null,
    INVEST_PROJECT_PREV_AMOUNT:
      req.body.INVEST_PROJECT_PREV_AMOUNT != null
        ? parseFloat(req.body.INVEST_PROJECT_PREV_AMOUNT)
        : null,
    INVEST_PROJECT_CY_AMOUNT:
      req.body.INVEST_PROJECT_CY_AMOUNT != null
        ? parseFloat(req.body.INVEST_PROJECT_CY_AMOUNT)
        : null,
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
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
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
    P_ID: parseInt(req.body.P_ID),
    HEAD_ROLE: req.body.HEAD_ROLE,
    HEAD_DATE: dateFormat(req.body.HEAD_DATE, "dd-mmm-yyyy"),
    HEAD_DOCUMENT_NO: req.body.HEAD_DOCUMENT_NO,
    HEAD_LASTNAME: req.body.HEAD_LASTNAME,
    HEAD_FIRSTNAME: req.body.HEAD_FIRSTNAME,
    HEAD_ORGANIZATION: req.body.HEAD_ORGANIZATION,
    HEAD_ORG_ROLE: req.body.HEAD_ORG_ROLE,
    HEAD_SALARY:
      req.body.HEAD_SALARY != null ? parseFloat(req.body.HEAD_SALARY) : null,
    HEAD_PROMOTION:
      req.body.HEAD_PROMOTION != null
        ? parseInt(req.body.HEAD_PROMOTION)
        : null,
    SUPPORT_DOCUMENT_NO: req.body.SUPPORT_DOCUMENT_NO,
    SUPPORT_DATE: dateFormat(req.body.SUPPORT_DATE, "dd-mmm-yyyy"),
    SUPPORT_AMOUNT:
      req.body.SUPPORT_AMOUNT != null
        ? parseFloat(req.body.SUPPORT_AMOUNT)
        : null,
    ASSESSMENT:
      req.body.ASSESSMENT != null ? parseInt(req.body.ASSESSMENT) : null,
    ASSESSMENT_DESC: req.body.ASSESSMENT_DESC,
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
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey2_3Delete = postSurvey2_3Delete;

//Survey 3
async function getSurvey3(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey3(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey3 = getSurvey3;

function getData3(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    PERSON_LASTNAME: req.body.PERSON_LASTNAME,
    PERSON_FIRSTNAME: req.body.PERSON_FIRSTNAME,
    PERSON_ROLE: req.body.PERSON_ROLE,
    PERSON_ROLE_LEVEL: req.body.PERSON_ROLE_LEVEL,
    WORKING_ROOM:
      req.body.WORKING_ROOM != null ? parseFloat(req.body.WORKING_ROOM) : null,
    RESTING_ROOM:
      req.body.RESTING_ROOM != null ? parseFloat(req.body.RESTING_ROOM) : null,
    TOILET: req.body.TOILET != null ? parseFloat(req.body.TOILET) : null,
    MEETING_ROOM:
      req.body.MEETING_ROOM != null ? parseFloat(req.body.MEETING_ROOM) : null,
    OTHER_ROOM:
      req.body.OTHER_ROOM != null ? parseFloat(req.body.OTHER_ROOM) : null,
    TOTAL_AREA:
      req.body.TOTAL_AREA != null ? parseFloat(req.body.TOTAL_AREA) : null,
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

async function postSurvey3CreateUpdate(req, res, next) {
  try {
    let data = getData3(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey3(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey3CreateUpdate = postSurvey3CreateUpdate;

async function postSurvey3Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey3({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey3Delete = postSurvey3Delete;

//Survey 4
async function getSurvey4(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey4(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey4 = getSurvey4;

function getData4(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    RENT_POSITION: req.body.RENT_POSITION,
    RENT_REGISTER_NO: req.body.RENT_REGISTER_NO,
    RENT_ORG_NAME: req.body.RENT_ORG_NAME,
    INVEST_TYPE_ID:
      req.body.INVEST_TYPE_ID != null
        ? parseFloat(req.body.INVEST_TYPE_ID)
        : null,
    CONTRACT_NO: req.body.CONTRACT_NO,
    RENT_SIZE:
      req.body.RENT_SIZE != null ? parseFloat(req.body.RENT_SIZE) : null,
    RENT_SQUARE_AMOUNT:
      req.body.RENT_SQUARE_AMOUNT != null
        ? parseFloat(req.body.RENT_SQUARE_AMOUNT)
        : null,
    RENT_TOTAL_AMOUNT:
      req.body.RENT_TOTAL_AMOUNT != null
        ? parseFloat(req.body.RENT_TOTAL_AMOUNT)
        : null,
    RENT_DESCRIPTION: req.body.RENT_DESCRIPTION,
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

async function postSurvey4CreateUpdate(req, res, next) {
  try {
    let data = getData4(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey4(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey4CreateUpdate = postSurvey4CreateUpdate;

async function postSurvey4Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey4({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey4Delete = postSurvey4Delete;

//Survey 5
async function getSurvey5(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey5(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey5 = getSurvey5;

function getData5(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    DONATION_DATE: dateFormat(req.body.DONATION_DATE, "dd-mmm-yyyy"),
    DONATION_VALUE: req.body.DONATION_VALUE,
    PROJECT_INTENT: req.body.PROJECT_INTENT,
    PROJECT_NAME: req.body.PROJECT_NAME,
    PROJECT_CODE: req.body.PROJECT_CODE,
    PROJECT_INTENT_NAME: req.body.PROJECT_INTENT_NAME,
    PROJECT_INTENT_CODE: req.body.PROJECT_INTENT_CODE,
    CONTRACT_AMOUNT:
      req.body.CONTRACT_AMOUNT != null
        ? parseFloat(req.body.CONTRACT_AMOUNT)
        : null,
    CONTRACT_PERIOD: req.body.CONTRACT_PERIOD,
    CY_INVEST_AMOUNT:
      req.body.CY_INVEST_AMOUNT != null
        ? parseFloat(req.body.CY_INVEST_AMOUNT)
        : null,
    IS_CONCLUTION:
      req.body.IS_CONCLUTION != null
        ? parseFloat(req.body.IS_CONCLUTION)
        : null,
    IS_REQUIRED:
      req.body.IS_REQUIRED != null ? parseFloat(req.body.IS_REQUIRED) : null,
    INVEST_DESCRIPTION: req.body.INVEST_DESCRIPTION,
    NGO_REGISTER_NO: req.body.NGO_REGISTER_NO,
    NGO_NAME: req.body.NGO_NAME,
    NGO_ACTIVITY: req.body.NGO_ACTIVITY,
    NGO_CONTACT: req.body.NGO_CONTACT,
    NGO_EMAIL: req.body.NGO_EMAIL,
    NGO_HEAD_LASTNAME: req.body.NGO_HEAD_LASTNAME,
    NGO_HEAD_FIRSTNAME: req.body.NGO_HEAD_FIRSTNAME,
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

async function postSurvey5CreateUpdate(req, res, next) {
  try {
    let data = getData5(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey5(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey5CreateUpdate = postSurvey5CreateUpdate;

async function postSurvey5Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey5({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey5Delete = postSurvey5Delete;

//Survey 6
async function getSurvey6(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey6(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey6 = getSurvey6;

function getData6(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    DONATER_NAME: req.body.DONATER_NAME,
    DONATION_TYPE_ID:
      req.body.DONATION_TYPE_ID != null
        ? parseFloat(req.body.DONATION_TYPE_ID)
        : null,
    DONATION_AMOUNT:
      req.body.DONATION_AMOUNT != null
        ? parseFloat(req.body.DONATION_AMOUNT)
        : null,
    ACCOUNT_NAME: req.body.ACCOUNT_NAME,
    ACCOUNT_AMOUNT:
      req.body.ACCOUNT_AMOUNT != null
        ? parseFloat(req.body.ACCOUNT_AMOUNT)
        : null,
    COST_DATE: dateFormat(req.body.COST_DATE, "dd-mmm-yyyy"),
    COST_DOCUMENT_NO: req.body.COST_DOCUMENT_NO,
    COST_AMOUNT:
      req.body.COST_AMOUNT != null ? parseFloat(req.body.COST_AMOUNT) : null,
    COST_ERROR_AMOUNT:
      req.body.COST_ERROR_AMOUNT != null
        ? parseFloat(req.body.COST_ERROR_AMOUNT)
        : null,
    C2_AMOUNT:
      req.body.C2_AMOUNT != null ? parseFloat(req.body.C2_AMOUNT) : null,
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

async function postSurvey6CreateUpdate(req, res, next) {
  try {
    let data = getData6(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey6(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey6CreateUpdate = postSurvey6CreateUpdate;

async function postSurvey6Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey6({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey6Delete = postSurvey6Delete;

//Survey 7
async function getSurvey7(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey7(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey7 = getSurvey7;

function getData7(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    HOSPITAL_NAME: req.body.HOSPITAL_NAME,
    PATIENT_COUNT:
      req.body.PATIENT_COUNT != null
        ? parseFloat(req.body.PATIENT_COUNT)
        : null,
    HOME_PATIENT_COUNT:
      req.body.HOME_PATIENT_COUNT != null
        ? parseFloat(req.body.HOME_PATIENT_COUNT)
        : null,
    REQUEST_AMOUNT:
      req.body.REQUEST_AMOUNT != null
        ? parseFloat(req.body.REQUEST_AMOUNT)
        : null,
    INVESTED_AMOUNT:
      req.body.INVESTED_AMOUNT != null
        ? parseFloat(req.body.INVESTED_AMOUNT)
        : null,
    TOTAL_COST_AMOUNT:
      req.body.TOTAL_COST_AMOUNT != null
        ? parseFloat(req.body.TOTAL_COST_AMOUNT)
        : null,
    PACKAGE_COUNT:
      req.body.PACKAGE_COUNT != null
        ? parseFloat(req.body.PACKAGE_COUNT)
        : null,
    PACKAGE_AMOUNT:
      req.body.PACKAGE_AMOUNT != null
        ? parseFloat(req.body.PACKAGE_AMOUNT)
        : null,
    PROTECTION_COST:
      req.body.PROTECTION_COST != null
        ? parseFloat(req.body.PROTECTION_COST)
        : null,
    GAS_COST: req.body.GAS_COST != null ? parseFloat(req.body.GAS_COST) : null,
    PHONE_COST:
      req.body.PHONE_COST != null ? parseFloat(req.body.PHONE_COST) : null,
    SALARY_COST:
      req.body.SALARY_COST != null ? parseFloat(req.body.SALARY_COST) : null,
    PROCESS_COST:
      req.body.PROCESS_COST != null ? parseFloat(req.body.PROCESS_COST) : null,
    PREPARE_COST:
      req.body.PREPARE_COST != null ? parseFloat(req.body.PREPARE_COST) : null,
    OTHER_COST:
      req.body.OTHER_COST != null ? parseFloat(req.body.OTHER_COST) : null,
    RECEIVE_AMOUNT:
      req.body.RECEIVE_AMOUNT != null
        ? parseFloat(req.body.RECEIVE_AMOUNT)
        : null,
    DIFF_AMOUNT:
      req.body.DIFF_AMOUNT != null ? parseFloat(req.body.DIFF_AMOUNT) : null,
    PACKAGE_C2_COUNT:
      req.body.PACKAGE_C2_COUNT != null
        ? parseFloat(req.body.PACKAGE_C2_COUNT)
        : null,
    PACKAGE_C2_AMOUNT:
      req.body.PACKAGE_C2_AMOUNT != null
        ? parseFloat(req.body.PACKAGE_C2_AMOUNT)
        : null,
    COST_DESCRIPTION: req.body.COST_DESCRIPTION,
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

async function postSurvey7CreateUpdate(req, res, next) {
  try {
    let data = getData7(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey7(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey7CreateUpdate = postSurvey7CreateUpdate;

async function postSurvey7Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey7({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey7Delete = postSurvey7Delete;

//Survey 8
async function getSurvey8(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey8(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey8 = getSurvey8;

function getData8(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    CAR_MARK: req.body.CAR_MARK,
    CAR_NUMBER: req.body.CAR_NUMBER,
    CAR_ENGINE:
      req.body.CAR_ENGINE != null ? parseFloat(req.body.CAR_ENGINE) : null,
    CAR_INTENT_TYPE_ID:
      req.body.CAR_INTENT_TYPE_ID != null
        ? parseFloat(req.body.CAR_INTENT_TYPE_ID)
        : null,
    CAR_USER: req.body.CAR_USER,
    CAR_GRANT_NAME: req.body.CAR_GRANT_NAME,
    CAR_GRANT_DATE: dateFormat(req.body.CAR_GRANT_DATE, "dd-mmm-yyyy"),
    CAR_GRANT_DOCUMENT: req.body.CAR_GRANT_DOCUMENT,
    DRIVER_ROLE: req.body.DRIVER_ROLE,
    DRIVER_SALARY:
      req.body.DRIVER_SALARY != null
        ? parseFloat(req.body.DRIVER_SALARY)
        : null,
    ACTIVE_YEAR:
      req.body.ACTIVE_YEAR != null ? parseFloat(req.body.ACTIVE_YEAR) : null,
    BALANCE_AMOUNT:
      req.body.BALANCE_AMOUNT != null
        ? parseFloat(req.body.BALANCE_AMOUNT)
        : null,
    REASON_TYPE: req.body.REASON_TYPE,
    GAS_COST_AMOUNT:
      req.body.GAS_COST_AMOUNT != null
        ? parseFloat(req.body.GAS_COST_AMOUNT)
        : null,
    GAS_COST_BUDGET: req.body.GAS_COST_BUDGET,
    SPARE_COST_AMOUNT:
      req.body.SPARE_COST_AMOUNT != null
        ? parseFloat(req.body.SPARE_COST_AMOUNT)
        : null,
    SPARE_COST_BUDGET: req.body.SPARE_COST_BUDGET,
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

async function postSurvey8CreateUpdate(req, res, next) {
  try {
    let data = getData8(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey8(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey8CreateUpdate = postSurvey8CreateUpdate;

async function postSurvey8Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey8({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey8Delete = postSurvey8Delete;

//Survey 9
async function getSurvey9(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey9(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey9 = getSurvey9;

function getData9(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    ATHLETE_LASTNAME: req.body.ATHLETE_LASTNAME,
    ATHLETE_FIRSTNAME: req.body.ATHLETE_FIRSTNAME,
    ATHLETE_ROLE: req.body.ATHLETE_ROLE,
    ATHLETE_SPORT: req.body.ATHLETE_SPORT,
    SUCCESS_OLYMPICS: req.body.SUCCESS_OLYMPICS,
    SUCCESS_WORLD: req.body.SUCCESS_WORLD,
    SUCCESS_STATE: req.body.SUCCESS_STATE,
    SALARY_TITLE_AMOUNT:
      req.body.SALARY_TITLE_AMOUNT != null
        ? parseFloat(req.body.SALARY_TITLE_AMOUNT)
        : null,
    SALARY_BASE_AMOUNT:
      req.body.SALARY_BASE_AMOUNT != null
        ? parseFloat(req.body.SALARY_BASE_AMOUNT)
        : null,
    SALARY_DEGREE_AMOUNT:
      req.body.SALARY_DEGREE_AMOUNT != null
        ? parseFloat(req.body.SALARY_DEGREE_AMOUNT)
        : null,
    PROMO_DATE: dateFormat(req.body.PROMO_DATE, "dd-mmm-yyyy"),
    PROMO_DOCUMENT_NO: req.body.PROMO_DOCUMENT_NO,
    PROMO_AMOUNT:
      req.body.PROMO_AMOUNT != null ? parseFloat(req.body.PROMO_AMOUNT) : null,
    NON_MONEY_TYPE: req.body.NON_MONEY_TYPE,
    NON_MONEY_PRICE:
      req.body.NON_MONEY_PRICE != null
        ? parseFloat(req.body.NON_MONEY_PRICE)
        : null,
    TOTAL_AMOUNT:
      req.body.TOTAL_AMOUNT != null ? parseFloat(req.body.TOTAL_AMOUNT) : null,
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

async function postSurvey9CreateUpdate(req, res, next) {
  try {
    let data = getData9(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey9(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey9CreateUpdate = postSurvey9CreateUpdate;

async function postSurvey9Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey9({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey9Delete = postSurvey9Delete;

//Survey 10
async function getSurvey10(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurvey10(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurvey10 = getSurvey10;

function getData10(req) {
  let data = {};
  data = {
    P_ID: parseInt(req.body.P_ID),
    MEDIA_NAME: req.body.MEDIA_NAME,
    MEDIA_REGISTER_NO: req.body.MEDIA_REGISTER_NO,
    MEDIA_TYPE: req.body.MEDIA_TYPE,
    CONTRACT_NAME: req.body.CONTRACT_NAME,
    CONTRACT_DATE: dateFormat(req.body.CONTRACT_DATE, "dd-mmm-yyyy"),
    CONTRACT_NO: req.body.CONTRACT_NO,
    BEGIN_DATE: dateFormat(req.body.BEGIN_DATE, "dd-mmm-yyyy"),
    END_DATE: dateFormat(req.body.END_DATE, "dd-mmm-yyyy"),
    CONTRACT_AMOUNT:
      req.body.CONTRACT_AMOUNT != null
        ? parseFloat(req.body.CONTRACT_AMOUNT)
        : null,
    PROCUREMENT_TYPE: req.body.PROCUREMENT_TYPE,
    COST_TYPE: req.body.COST_TYPE,
    IS_PLANNED:
      req.body.IS_PLANNED != null ? parseFloat(req.body.IS_PLANNED) : null,
    IS_PREV: req.body.IS_PREV != null ? parseFloat(req.body.IS_PREV) : null,
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

async function postSurvey10CreateUpdate(req, res, next) {
  try {
    let data = getData10(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createUpdateSurvey10(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey10CreateUpdate = postSurvey10CreateUpdate;

async function postSurvey10Delete(req, res, next) {
  try {
    result = await survey.deleteSurvey10({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey10Delete = postSurvey10Delete;

//Change Status
async function postStatus(req, res, next) {
  //console.log(req.body, "Irsen");
  try {
    let data = {
      btnID: parseInt(req.body.BtnID),
      SURVEY_ID: parseInt(req.body.SURVEY_ID),
      CREATED_BY: parseInt(req.body.CREATED_BY),
    };
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.UpdateStatus(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postStatus = postStatus;

//Survey Return
async function getSurveyReturn(req, res, next) {
  try {
    const context = {};
    context.SURVEY_ID = parseInt(req.params.surveyid, 10);

    const rows = await survey.getSurveyReturn(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.getSurveyReturn = getSurveyReturn;

async function postSurveyReturnCreateUpdate(req, res, next) {
  try {
    let data = {
      P_ID: req.body.P_ID != null ? req.body.P_ID : null,
      SURVEY_ID: parseInt(req.body.SURVEY_ID),
      RETURN_DESC: req.body.RETURN_DESC,
      CREATED_BY: parseInt(req.body.CREATED_BY),
    };
    result = await survey.createUpdateSurveyReturn(data);
    //console.log(req.body);
    if (req.body.P_ID == null) {
      let email = "";
      email = result.email;

      if (email !== "") {
        //Email
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secureConnection: "true",
          auth: {
            user: "mnao.mtt1@gmail.com", // generated ethereal user
            pass: "auZ'r5dU6qR)sf^b", // generated ethereal password
          },
        });

        var mailOptions = {
          from: "no-reply@audit.gov.mn",
          to: email,
          subject: "Төрийн аудитын байгууллага",
          text: "Төрийн аудитын байгууллага",
          html: `<!DOCTYPE html>
  <html>
  <body>  
  
  <div class = "container">
    <p>Сайн байна уу?</p>
  </div>
  
  <div class = "container topSpaceLittle">
    <p>
    Таны судалгаа буцаагдсан тул та нэвтрэх нэр, нууц үгээрээ системд дахин нэвтрэн орж судалгаагаа аудиторуудын өгсөн чиглэл зөвлөмжийн дагуу засаж бидэнд дахин илгээнэ үү.
    </p>
  </div>
  
  <div class = "container">
    <span>Энэхүү и-мэйл нь системээс шууд илгээгдэж байгаа тул та хариу бичих шаардлагагүй болно.</span>
  </div>
  <div class ="topSpace">
    <div class = "container">
      <p>Хүндэтгэсэн:</P>
    </div>
    <div class = "container">
      <p>Үндэсний аудитын газар</P>
    </div>
    <div class = "container">
      <p>Мэдээллийн технологийн төв</P>
      </div>
    <div class = "container">
      <p>2022 он</P>
    </div>
  </div>
  
  </body>
  <style>
    .container {
      display:block  
    }
    .topSpace {
    margin-top:60px;
    }
    .topSpaceLittle {
    margin-top:20px;
  }  
  </style>
  
  </html>`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.status(200).json({
              error: error,
            });
          } else {
            transporter.verify(function (error, success) {
              if (error) {
                res.status(200).json({
                  message: "fail",
                });
              } else {
                res.status(200).json({
                  info: info.response,
                  message: "success",
                });
              }
            });
          }
        });
        transporter.close();
      } else res.status(200).json(result);
    } else res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurveyReturnCreateUpdate = postSurveyReturnCreateUpdate;

async function postSurveyReturnDelete(req, res, next) {
  try {
    result = await survey.deleteSurveyReturn({
      DELETED_BY: req.body.DELETED_BY,
      P_ID: req.body.P_ID,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurveyReturnDelete = postSurveyReturnDelete;
