$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 470897,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Verify that browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "duration": 102500762,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_browser_is_triggered()"
});
formatter.result({
  "duration": 195010,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_that_browser_is_started()"
});
formatter.result({
  "duration": 182693,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on net banking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User logins into application with username as \"mehta\" and password as \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Cards displayed as \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_net_banking_landing_page()"
});
formatter.result({
  "duration": 212663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehta",
      "offset": 47
    },
    {
      "val": "4321",
      "offset": 71
    }
  ],
  "location": "stepDefination.user_logins_into_application_with_username_as_something_and_password_as_something(String,String)"
});
formatter.result({
  "duration": 3444076,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.homepage_is_displayed()"
});
formatter.result({
  "duration": 174893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 20
    }
  ],
  "location": "stepDefination.cards_displayed_as(String)"
});
formatter.result({
  "duration": 290667,
  "status": "passed"
});
formatter.before({
  "duration": 85393,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Verify that browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "duration": 174893,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_browser_is_triggered()"
});
formatter.result({
  "duration": 139176,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.verify_that_browser_is_started()"
});
formatter.result({
  "duration": 178998,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on net banking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "krupa",
        "mehta",
        "33",
        "Plano",
        "TX",
        "USA",
        "9999999"
      ],
      "line": 27
    },
    {
      "cells": [
        "vineet",
        "kamdar",
        "34",
        "Pune",
        "MH",
        "IN",
        "8886767"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Cards displayed as \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_net_banking_landing_page()"
});
formatter.result({
  "duration": 181051,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 3515100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.homepage_is_displayed()"
});
formatter.result({
  "duration": 296415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 20
    }
  ],
  "location": "stepDefination.cards_displayed_as(String)"
});
formatter.result({
  "duration": 141639,
  "status": "passed"
});
});