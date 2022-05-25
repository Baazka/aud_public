const express = require("express");
const { route } = require("express/lib/application");
const router = new express.Router();
//Lib
const library = require("../controllers/library");
const survey = require("../controllers/survey.js");
const report = require("../controllers/report.js");
const auditor = require("../controllers/auditor.js");

router.route("/survey/:yearid/:entid").get(survey.get);

//Lib
router.route("/library/:name").get(library.get);
//ENTITY SURVEY LIST
router.route("/surveyList/:ent_id").get(survey.getEntList);
//survey1
router.route("/survey1/:surveyid").get(survey.getSurvey1);
router.route("/survey1Insert").post(survey.postSurvey1CreateUpdate);
router.route("/survey1Delete").post(survey.postSurvey1Delete);
//survey2_1
router.route("/survey2_1/:surveyid").get(survey.getSurvey2_1);
router.route("/survey2_1Insert").post(survey.postSurvey2_1CreateUpdate);
router.route("/survey2_1Delete").post(survey.postSurvey2_1Delete);
//survey2_2
router.route("/survey2_2/:surveyid").get(survey.getSurvey2_2);
router.route("/survey2_2Insert").post(survey.postSurvey2_2CreateUpdate);
router.route("/survey2_2Delete").post(survey.postSurvey2_2Delete);
//survey2_3
router.route("/survey2_3/:surveyid").get(survey.getSurvey2_3);
router.route("/survey2_3Insert").post(survey.postSurvey2_3CreateUpdate);
router.route("/survey2_3Delete").post(survey.postSurvey2_3Delete);
//survey3
router.route("/survey3/:surveyid").get(survey.getSurvey3);
router.route("/survey3Insert").post(survey.postSurvey3CreateUpdate);
router.route("/survey3Delete").post(survey.postSurvey3Delete);
//survey4
router.route("/survey4/:surveyid").get(survey.getSurvey4);
router.route("/survey4Insert").post(survey.postSurvey4CreateUpdate);
router.route("/survey4Delete").post(survey.postSurvey4Delete);
//survey5
router.route("/survey5/:surveyid").get(survey.getSurvey5);
router.route("/survey5Insert").post(survey.postSurvey5CreateUpdate);
router.route("/survey5Delete").post(survey.postSurvey5Delete);
//survey6
router.route("/survey6/:surveyid").get(survey.getSurvey6);
router.route("/survey6Insert").post(survey.postSurvey6CreateUpdate);
router.route("/survey6Delete").post(survey.postSurvey6Delete);
//survey7
router.route("/survey7/:surveyid").get(survey.getSurvey7);
router.route("/survey7Insert").post(survey.postSurvey7CreateUpdate);
router.route("/survey7Delete").post(survey.postSurvey7Delete);
//survey8
router.route("/survey8/:surveyid").get(survey.getSurvey8);
router.route("/survey8Insert").post(survey.postSurvey8CreateUpdate);
router.route("/survey8Delete").post(survey.postSurvey8Delete);
//survey9
router.route("/survey9/:surveyid").get(survey.getSurvey9);
router.route("/survey9Insert").post(survey.postSurvey9CreateUpdate);
router.route("/survey9Delete").post(survey.postSurvey9Delete);
//survey10
router.route("/survey10/:surveyid").get(survey.getSurvey10);
router.route("/survey10Insert").post(survey.postSurvey10CreateUpdate);
router.route("/survey10Delete").post(survey.postSurvey10Delete);

//surveyStatus
router.route("/surveyStatus").post(survey.postStatus);

//surveyReturn
router.route("/surveyReturn/:surveyid").get(survey.getSurveyReturn);
router.route("/surveyReturnInsert").post(survey.postSurveyReturnCreateUpdate);
router.route("/surveyReturnDelete").post(survey.postSurveyReturnDelete);

//Report

router.route("/reportGuitsetgel").post(report.postGuitsetgel);
router.route("/reportUnsent").post(report.postUnsent);
router.route("/reportZadargaa").post(report.postAuditorZadargaa);
router.route("/reportZad01").post(report.postZad01);
router.route("/reportZad21").post(report.postZad21);
router.route("/reportZad22").post(report.postZad22);
router.route("/reportZad23").post(report.postZad23);
router.route("/reportZad03").post(report.postZad03);
router.route("/reportZad04").post(report.postZad04);
router.route("/reportZad05").post(report.postZad05);
router.route("/reportZad06").post(report.postZad06);
router.route("/reportZad07").post(report.postZad07);
router.route("/reportZad08").post(report.postZad08);
router.route("/reportZad09").post(report.postZad09);
router.route("/reportZad10").post(report.postZad10);

router.route("/reportNeg01").post(report.postNeg01);
router.route("/reportNeg21").post(report.postNeg21);
router.route("/reportNeg22").post(report.postNeg22);
router.route("/reportNeg23").post(report.postNeg23);
router.route("/reportNeg03").post(report.postNeg03);
router.route("/reportNeg04").post(report.postNeg04);
router.route("/reportNeg05").post(report.postNeg05);
router.route("/reportNeg06").post(report.postNeg06);
router.route("/reportNeg07").post(report.postNeg07);
router.route("/reportNeg08").post(report.postNeg08);
router.route("/reportNeg09").post(report.postNeg09);
router.route("/reportNeg10").post(report.postNeg10);

//Auditor
router.route("/auditorList").post(auditor.postList);
module.exports = router;
