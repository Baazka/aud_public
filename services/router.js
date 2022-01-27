const express = require("express");
const { route } = require("express/lib/application");
const router = new express.Router();
const survey = require("../controllers/survey.js");

router.route("/survey/:yearid/:entid").get(survey.get);
//survey1
router.route("/survey1/:surveyid").get(survey.getSurvey1);
router.route("/survey1Insert").post(survey.postSurvey1CreateUpdate);
router.route("/survey1Delete/:surveyid").post(survey.postSurvey1Delete);
//survey2_1
router.route("/survey2_1/:surveyid").get(survey.getSurvey2_1);
router.route("/survey2_1Insert").post(survey.postSurvey2_1CreateUpdate);
router.route("/survey2_1Delete/:surveyid").post(survey.postSurvey2_1Delete);
//survey2_2
router.route("/survey2_2/:surveyid").get(survey.getSurvey2_2);
router.route("/survey2_2Insert").post(survey.postSurvey2_2CreateUpdate);
router.route("/survey2_2Delete/:surveyid").post(survey.postSurvey2_2Delete);
//survey2_3
router.route("/survey2_3/:surveyid").get(survey.getSurvey2_3);
router.route("/survey2_3Insert").post(survey.postSurvey2_3CreateUpdate);
router.route("/survey2_3Delete/:surveyid").post(survey.postSurvey2_3Delete);

module.exports = router;
