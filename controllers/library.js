const library = require("../db_apis/library");

async function get(req, res, next) {
  try {
    const context = {};

    context.name = req.params.name.toLowerCase();

    const rows = await library.find(context);

    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
