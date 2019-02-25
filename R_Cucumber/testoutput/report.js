$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/pratik/workspace/selenium/R_Cucumber/src/main/java/com/features/config.feature");
formatter.feature({
  "line": 1,
  "name": "LoginTest",
  "description": "",
  "id": "logintest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check Login Functionality",
  "description": "",
  "id": "logintest;check-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password and click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "message displayes user loged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_is_on_Login_page()"
});
formatter.result({
  "duration": 35103459666,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enters_username_and_password_and_click_on_Login_button()"
});
formatter.result({
  "duration": 1630323779,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.message_displayes_user_loged_in()"
});
formatter.result({
  "duration": 43779884,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Content Hom]e\u003e but was:\u003c[Sign In | MindTickl]e\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.stepDefination.stepDefination.message_displayes_user_loged_in(stepDefination.java:39)\r\n\tat ✽.Then message displayes user loged in(C:/Users/pratik/workspace/selenium/R_Cucumber/src/main/java/com/features/config.feature:7)\r\n",
  "status": "failed"
});
});