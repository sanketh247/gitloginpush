$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/GitHublogin.feature");
formatter.feature({
  "line": 1,
  "name": "Git Hub Login Feature",
  "description": "",
  "id": "git-hub-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 14,
      "id": "git-hub-login-feature;login-scenario;;1"
    },
    {
      "cells": [
        "sanketh247",
        "gopala247",
        "Git Hub"
      ],
      "line": 15,
      "id": "git-hub-login-feature;login-scenario;;2"
    },
    {
      "cells": [
        "sanketh246",
        "gopala247",
        "Sign In Git Hub"
      ],
      "line": 16,
      "id": "git-hub-login-feature;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
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
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 9088354826,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters sanketh247 as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters gopala247 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sanketh247",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_sanketh247_as_username(String)"
});
formatter.result({
  "duration": 131734985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gopala247",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_gopala247_as_password(String)"
});
formatter.result({
  "duration": 94381576,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Clicks_on_SignIn()"
});
formatter.result({
  "duration": 1691978160,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat skeleton.Stepdefs.user_Clicks_on_SignIn(Stepdefs.java:36)\r\n\tat ✽.And User Clicks on SignIn(skeleton/GitHublogin.feature:10)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_navigates_to_Git_Hub(String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 6807348246,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters sanketh246 as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters gopala247 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to Sign In Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sanketh246",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_sanketh247_as_username(String)"
});
formatter.result({
  "duration": 178127691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gopala247",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_gopala247_as_password(String)"
});
formatter.result({
  "duration": 167771002,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Clicks_on_SignIn()"
});
formatter.result({
  "duration": 790931367,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat skeleton.Stepdefs.user_Clicks_on_SignIn(Stepdefs.java:36)\r\n\tat ✽.And User Clicks on SignIn(skeleton/GitHublogin.feature:10)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_navigates_to_Git_Hub(String)"
});
formatter.result({
  "status": "skipped"
});
});