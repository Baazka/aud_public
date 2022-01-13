const profile = require("../db_apis/profile");

async function get(req, res, next) {
  try {
    const context = {};
    context.id = parseInt(req.params.id, 10);
    context.sysid = parseInt(req.params.sysid, 10);

    const rows = await profile.get(context);

    res.status(200).json(rows);
  } catch (err) {
    next(err);
    res.status(404).end();
  }
}

module.exports.get = get;
