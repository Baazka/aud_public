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

//Zadargaa tailan
async function postZad01(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad01(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad01 = postZad01;

async function postZad21(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad21(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad21 = postZad21;

async function postZad22(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad22(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad22 = postZad22;

async function postZad23(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad23(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad23 = postZad23;

async function postZad03(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad03(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad03 = postZad03;

async function postZad04(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad04(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad04 = postZad04;

async function postZad05(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad05(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad05 = postZad05;

async function postZad06(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad06(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad06 = postZad06;

async function postZad07(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad07(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad07 = postZad07;

async function postZad08(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad08(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad08 = postZad08;

async function postZad09(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad09(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad09 = postZad09;

async function postZad10(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postZad10(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postZad10 = postZad10;

//Negtgel tailan
async function postNeg01(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postNeg01(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postNeg01 = postNeg01;

async function postNeg21(req, res, next) {
  try {
    const context = {};
    context.dep_id =
      req.body.DEPARTMENT_ID == "" ||
      req.body.DEPARTMENT_ID == "null" ||
      req.body.DEPARTMENT_ID == null ||
      req.body.DEPARTMENT_ID == "undefined" ||
      req.body.DEPARTMENT_ID == undefined
        ? null
        : parseInt(req.body.DEPARTMENT_ID, 10);
    const rows = await report.postNeg21(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postNeg21 = postNeg21;
