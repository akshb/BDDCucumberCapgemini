$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/SearchAndLogout.feature");
formatter.feature({
  "name": "feature to search and logout functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search\u0026Logout"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Check user is able to logout succesfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user logout from the site",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "atulvp18@gmail.com",
        "Atul@1995"
      ]
    },
    {
      "cells": [
        "akshatababar90@gmail.com",
        "aksh@123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User views Udemy website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_views_Udemy_website()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check user is able to logout succesfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search\u0026Logout"
    },
    {
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters atulvp18@gmail.com and Atul@1995",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_enters_atulvp18_gmail_com_and_Atul(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logout from the site",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_logout_from_the_site()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //div[text()\u003d\u0027Log out\u0027] (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027DESKTOP-JAHKTIJ\u0027, ip: \u0027169.254.164.76\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.85, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53861}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b163b414eea98e10619440e33a9d7c18\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:138)\r\n\tat org.openqa.selenium.support.ui.FluentWait.lambda$checkConditionInLoop$2(FluentWait.java:255)\r\n\tat java.util.concurrent.CompletableFuture$AsyncSupply.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n\tat ✽.user logout from the site(file:///C:/Users/Admin/eclipse-workspace/DemoProject_Capgemini/CucumberJava/src/test/resources/Features/SearchAndLogout.feature:27)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User views Udemy website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_views_Udemy_website()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check user is able to logout succesfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search\u0026Logout"
    },
    {
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters akshatababar90@gmail.com and aksh@123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_enters_atulvp18_gmail_com_and_Atul(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logout from the site",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginStefDef.user_logout_from_the_site()"
});
formatter.result({
  "status": "passed"
});
});