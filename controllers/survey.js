const survey = require("../db_apis/survey");
//var dateFormat = require("dateformat");

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
    P_ID: parseInt(req.body.ID),
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
      CREATED_BY: req.body.CREATED_BY,
      P_ID: req.params.surveyid,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey1Delete = postSurvey1Delete;
