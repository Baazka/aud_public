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
