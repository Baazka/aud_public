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
  if (req.body.ID != null)
    data = {
      P_ID: parseInt(req.body.ID),
      HEMNELT_DUN: parseFloat(req.body.HEMNELT_DUN),
      HEMNELT_PERCENT: parseFloat(req.body.HEMNELT_PERCENT),
      NEW_EMP_COUNT: parseInt(req.body.NEW_EMP_COUNT),
      NEW_EMP_SALARY: parseFloat(req.body.NEW_EMP_SALARY),
      RENEW_EMP_COUNT: parseInt(req.body.RENEW_EMP_COUNT),
      RENEW_EMP_SALARY: parseFloat(req.body.RENEW_EMP_SALARY),
      IMP_SALARY_COUNT: parseInt(req.body.IMP_SALARY_COUNT),
      IMP_SALARY_AMOUNT: parseFloat(req.body.IMP_SALARY_AMOUNT),
      IMP_PROMO_COUNT: parseInt(req.body.IMP_PROMO_COUNT),
      IMP_PROMO_AMOUNT: parseFloat(req.body.IMP_PROMO_AMOUNT),
      IMP_GUEST_AMOUNT: parseFloat(req.body.IMP_GUEST_AMOUNT),
      IMP_GIFT_AMOUNT: parseFloat(req.body.IMP_GIFT_AMOUNT),
      CAR_COUNT: parseInt(req.body.CAR_COUNT),
      CAR_AMOUNT: parseFloat(req.body.CAR_AMOUNT),
      FURNITURE_AMOUNT: parseFloat(req.body.FURNITURE_AMOUNT),
      CLOTHES_AMOUNT: parseFloat(req.body.CLOTHES_AMOUNT),
      OTHER_TOOLS_AMOUNT: parseFloat(req.body.OTHER_TOOLS_AMOUNT),
      EXTERNAL_EVENT_AMOUNT: parseFloat(req.body.EXTERNAL_EVENT_AMOUNT),
      INTERNAL_EVENT_AMOUNT: parseFloat(req.body.INTERNAL_EVENT_AMOUNT),
      CEREMONY_AMOUNT: parseFloat(req.body.CEREMONY_AMOUNT),
      CONTENT_AMOUNT: parseFloat(req.body.CONTENT_AMOUNT),
      BASE_PLAN_AMOUNT: parseFloat(req.body.BASE_PLAN_AMOUNT),
      BASE_COMPLETION_AMOUNT: parseFloat(req.body.BASE_COMPLETION_AMOUNT),
      BASE_PERCENT: parseFloat(req.body.BASE_PERCENT),
      DOCUMENT_PLAN_AMOUNT: parseFloat(req.body.DOCUMENT_PLAN_AMOUNT),
      DOCUMENT_COMPLETION_AMOUNT: parseFloat(
        req.body.DOCUMENT_COMPLETION_AMOUNT
      ),
      DOCUMENT_PERCENT: parseFloat(req.body.DOCUMENT_PERCENT),
      CREATED_BY: parseInt(req.body.CREATED_BY),
    };
  else
    data = {
      P_ID: null,
      SURVEY_ID: parseInt(req.body.SURVEY_ID),
      HEMNELT_DUN: parseFloat(req.body.HEMNELT_DUN),
      HEMNELT_PERCENT: parseFloat(req.body.HEMNELT_PERCENT),
      NEW_EMP_COUNT: parseInt(req.body.NEW_EMP_COUNT),
      NEW_EMP_SALARY: parseFloat(req.body.NEW_EMP_SALARY),
      RENEW_EMP_COUNT: parseInt(req.body.RENEW_EMP_COUNT),
      RENEW_EMP_SALARY: parseFloat(req.body.RENEW_EMP_SALARY),
      IMP_SALARY_COUNT: parseInt(req.body.IMP_SALARY_COUNT),
      IMP_SALARY_AMOUNT: parseFloat(req.body.IMP_SALARY_AMOUNT),
      IMP_PROMO_COUNT: parseInt(req.body.IMP_PROMO_COUNT),
      IMP_PROMO_AMOUNT: parseFloat(req.body.IMP_PROMO_AMOUNT),
      IMP_GUEST_AMOUNT: parseFloat(req.body.IMP_GUEST_AMOUNT),
      IMP_GIFT_AMOUNT: parseFloat(req.body.IMP_GIFT_AMOUNT),
      CAR_COUNT: parseInt(req.body.CAR_COUNT),
      CAR_AMOUNT: parseFloat(req.body.CAR_AMOUNT),
      FURNITURE_AMOUNT: parseFloat(req.body.FURNITURE_AMOUNT),
      CLOTHES_AMOUNT: parseFloat(req.body.CLOTHES_AMOUNT),
      OTHER_TOOLS_AMOUNT: parseFloat(req.body.OTHER_TOOLS_AMOUNT),
      EXTERNAL_EVENT_AMOUNT: parseFloat(req.body.EXTERNAL_EVENT_AMOUNT),
      INTERNAL_EVENT_AMOUNT: parseFloat(req.body.INTERNAL_EVENT_AMOUNT),
      CEREMONY_AMOUNT: parseFloat(req.body.CEREMONY_AMOUNT),
      CONTENT_AMOUNT: parseFloat(req.body.CONTENT_AMOUNT),
      BASE_PLAN_AMOUNT: parseFloat(req.body.BASE_PLAN_AMOUNT),
      BASE_COMPLETION_AMOUNT: parseFloat(req.body.BASE_COMPLETION_AMOUNT),
      BASE_PERCENT: parseFloat(req.body.BASE_PERCENT),
      DOCUMENT_PLAN_AMOUNT: parseFloat(req.body.DOCUMENT_PLAN_AMOUNT),
      DOCUMENT_COMPLETION_AMOUNT: parseFloat(
        req.body.DOCUMENT_COMPLETION_AMOUNT
      ),
      DOCUMENT_PERCENT: parseFloat(req.body.DOCUMENT_PERCENT),
      CREATED_BY: parseInt(req.body.CREATED_BY),
    };
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
