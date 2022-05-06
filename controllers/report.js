const report = require("../db_apis/report");

//Guitsetgel
async function postGuitsetgel(req, res, next) {
  try {
    const context = {};

    const rows = await report.postGuitsetgel(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postGuitsetgel = postGuitsetgel;

//Ilgeegeegui
async function postUnsent(req, res, next) {
  try {
    const context = {};
    context.survey_id = parseInt(req.body.SURVEY_ID, 10);
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postUnsent(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postUnsent = postUnsent;

//Zadargaa
async function postAuditorZadargaa(req, res, next) {
  try {
    const context = {};
    context.userid = parseInt(req.body.USER_ID, 10);
    context.usertype = req.body.USER_TYPE != null ? req.body.USER_TYPE : null;

    const rows = await report.postAuditorZadargaa(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postAuditorZadargaa = postAuditorZadargaa;
