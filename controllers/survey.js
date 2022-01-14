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
  let letter = {
    P_FAS_LETTER_DATA_ID: req.body.ID != null ? parseInt(req.body.ID) : null,
    P_FAS_AUDIT_ID: parseInt(req.body.FAS_AUDIT_ID),
    P_DOCUMENT_ID: parseInt(req.body.DOCUMENT_ID),
    P_LETTER_TO: null,
    P_REPORT_TYPE: null,
    P_LAWS_NO: null,
    P_BUDGET_TYPE: null,
    P_LETTER_YEAR: null,
    P_LETTER_MONTH: null,
    P_LETTER_DAY: null,
    P_REPORT_TYPE2: null,
    P_REPORT_TYPE3: null,
    P_DELIVERED_DATE:
      req.body.DELIVERED_DATE != null
        ? dateFormat(req.body.DELIVERED_DATE, "dd-mmm-yyyy")
        : null,
    P_LETTER_DESC: req.body.LETTER_DESC,
    P_IS_ACTIVE: parseInt(req.body.IS_ACTIVE),
    P_CREATED_BY: parseInt(req.body.CREATED_BY),
    P_CREATED_DATE: dateFormat(req.body.CREATED_DATE, "dd-mmm-yyyy"),
  };

  return letter;
}

async function postSurvey1Create(req, res, next) {
  try {
    let data = getData(req);
    if (data.status !== "undefined" && data.status === "failed") {
      res.status(200).json({ message: "failed" });
    } else {
      result = await survey.createSurvey1(data);

      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.postSurvey1Create = postSurvey1Create;
