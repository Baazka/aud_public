const express = require("express");
const router = new express.Router();
const survey = require("../controllers/survey.js");

router.route("/survey/:yearid/:entid").get(survey.get);
router
  .route("/survey1/:surveyid")
  .get(survey.getSurvey1)
  .post(survey.postSurvey1CreateUpdate);
router.route("/survey1Delete/:surveyid").post(survey.postSurvey1Delete);

module.exports = router;
