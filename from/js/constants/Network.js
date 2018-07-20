var IP = 'http://192.168.0.182:8081';

{ /** 登录**/ }
var LOGIN_URL = IP + '/bpm/task/logined.do?';
exports.LOGIN_URL = LOGIN_URL;

{ /* 主菜单*/ }
var MENU_URL = IP + '/bpm/task/menu.do';
exports.MENU_URL = MENU_URL;

{/*个人-我的团队*/}
var PERSONAL_URL= IP+'/bpm/task/personal.do?';
exports.PERSONAL_URL = PERSONAL_URL;

{ /** 报告**/ }
var REPORT_URL = IP + '/bpm/task/report.do?';
exports.REPORT_URL = REPORT_URL;

{ /** 测评**/ }
var EVALUSTE_URL = IP + '/bpm/task/evaluate.do?';
exports.EVALUSTE_URL = EVALUSTE_URL;

{/*企业--企业团队*/}
var COMPANYTEAM_URL= IP+'/bpm/task/companyteam.do?';
exports.COMPANYTEAM_URL = COMPANYTEAM_URL;

{/*企业--企业员工*/}
var COMPANYEMPLOYEES_URL= IP+'/bpm/task/companyEmployees.do?';
exports.COMPANYEMPLOYEES_URL = COMPANYEMPLOYEES_URL;

{ /** 完善个人信息**/ }
var PERFECT_PERSONAL_URL = IP + '/bpm/task/perfectPersonal.do?';
exports.PERFECT_PERSONAL_URL = PERFECT_PERSONAL_URL;

{ /** 企业--企业培训**/ }
var COMPANYTRAINING_URL = IP + '/bpm/task/companyTraining.do?';
exports.COMPANYTRAINING_URL = COMPANYTRAINING_URL;

{ /** 企业--企业培训内容管理**/ }
var COMPANYTRAINCONTENT_URL = IP + '/bpm/task/companyTrainContent.do?';
exports.COMPANYTRAINCONTENT_URL = COMPANYTRAINCONTENT_URL;

{ /** 企业--企业答题内容管理**/ }
var COMPANYANSWERCONTENT_URL = IP + '/bpm/task/companyAnswerContent.do?';
exports.COMPANYANSWERCONTENT_URL = COMPANYANSWERCONTENT_URL;

/** 一级-督导任务-省辖市**/
var SUPERVISECITY_URL = IP + '/bpm/task/superviseCity.do?';
exports.SUPERVISECITY_URL = SUPERVISECITY_URL;

{ /** 一级操作员--审核--督导目标建立**/ }
var SUPERVISETARGET_URL = IP + '/bpm/task/superviseTarget.do?';
exports.SUPERVISETARGET_URL = SUPERVISETARGET_URL;

{ /** 一级操作员--考核进度--省辖市**/ }
var PROGRESSCITY_URL = IP + '/bpm/task/progressCity.do?';
exports.PROGRESSCITY_URL = PROGRESSCITY_URL;

{ /** 一级操作员--年度考核--年度考核分数**/ }
var ASSESSMENTSCORE_URL = IP + '/bpm/task/assessmentScore.do?';
exports.ASSESSMENTSCORE_URL = ASSESSMENTSCORE_URL;

/*督导平台-首页-工作动态*/
var WORKTREND_URL = IP + '/bpm/task/workTrend.do?';
exports.WORKTREND_URL = WORKTREND_URL;

// /*督导平台-首页-工作动态*/
// var WORKLISTTREND_URL = IP + '/bpm/task/workTrend.do?';
// exports.WORKLISTTREND_URL = WORKLISTTREND_URL;
/*后台-一级操作员*/
var CLASSA_URL = IP + '/bpm/task/classa.do?';
exports.CLASSA_URL = CLASSA_URL;
/*后台-一级操作员*/
var CLASSB_URL = IP + '/bpm/task/classbdo?';
exports.CLASSB_URL = CLASSB_URL;
//后台-督导对象
var CLASSC_URL = IP + '/bpm/task/classcdo?';
exports.CLASSC_URL = CLASSC_URL;
//后台-部门管理
var LEADINGGROUP_URL= IP + '/bpm/task/leadinggroup.do?';
exports.LEADINGGROUP_URL = LEADINGGROUP_URL;
/*督导对象--督导任务*/
var SUPERVISIONOBJECT_URL = IP + '/bpm/task/supervisionObject.do?';
exports.SUPERVISIONOBJECT_URL = SUPERVISIONOBJECT_URL;

/*二级操作员--省辖市督导任务*/
var SUPERVISIONTASKA_URL = IP + '/bpm/task/supervisiontaska.do?';
exports.SUPERVISIONTASKA_URL = SUPERVISIONTASKA_URL;
/*二级操作员--任务分配*/
var EXAMINE_URL = IP + '/bpm/task/examine.do?';
exports.EXAMINE_URL = EXAMINE_URL;
//督导对象
var EXAMINATIONRESULT_URL = IP + '/bpm/task/examinationresult.do?';
exports.EXAMINATIONRESULT_URL = EXAMINATIONRESULT_URL