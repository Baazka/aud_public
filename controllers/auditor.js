const auditor = require("../db_apis/auditor");

//Guitsetgel
async function postList(req, res, next) {
  try {
    const context = {};
    context.userid = parseInt(req.body.USER_ID, 10);
    context.depid =
      req.body.DEPARTMENT_ID != null
        ? parseInt(req.body.DEPARTMENT_ID, 10)
        : null;
    context.usertype = req.body.USER_TYPE != null ? req.body.USER_TYPE : null;

    const rows = await auditor.postList(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
module.exports.postList = postList;
