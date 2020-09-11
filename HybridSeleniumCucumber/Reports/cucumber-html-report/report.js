$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TestCase.feature");
formatter.feature({
  "name": "Test the OrangeHRM Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check the login functionality of OrangeHRM",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To Launch the browser and Navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.to_Launch_the_browser_and_Navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter UserName and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.enter_UserName_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the page Title and ScreenShot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.get_the_page_Title_and_ScreenShot()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To check the login functionality of OrangeHRM with data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter \"\u003cuname\u003e\" and \"\u003cpas\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click submit button",
  "keyword": "Then "
});
formatter.step({
  "name": "Get the page title and  get screen shot",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "pas"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check the login functionality of OrangeHRM with data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"Admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the page title and  get screen shot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.get_the_page_title_and_get_screen_shot()"
});
formatter.result({
  "error_message": "java.lang.RuntimeException: Unexpected result for screenshot command: null\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:304)\r\n\tat com.seleniumReusableFunctions.SeleniumUtilities.to_take_screenshot(SeleniumUtilities.java:25)\r\n\tat com.stepDefinition.LoginStepsWithDataDriven.get_the_page_title_and_get_screen_shot(LoginStepsWithDataDriven.java:39)\r\n\tat ✽.Get the page title and  get screen shot(file:///C:/Users/malar/git/repository/HybridSeleniumCucumber/src/test/resources/Features/TestCase.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To check the login functionality of OrangeHRM with data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d85.0.4183.83)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GGRQII7R\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0031D383+3134339]\n\tOrdinal0 [0x0020A171+2007409]\n\tOrdinal0 [0x000AAD90+568720]\n\tOrdinal0 [0x000A1364+529252]\n\tOrdinal0 [0x000A19FC+530940]\n\tOrdinal0 [0x000A2C15+535573]\n\tOrdinal0 [0x0009DFC5+516037]\n\tOrdinal0 [0x000ABF70+573296]\n\tOrdinal0 [0x00051916+203030]\n\tOrdinal0 [0x00050C1D+199709]\n\tOrdinal0 [0x0004EB0B+191243]\n\tOrdinal0 [0x00032E77+77431]\n\tOrdinal0 [0x00033E3E+81470]\n\tOrdinal0 [0x00033DC9+81353]\n\tOrdinal0 [0x00220CD9+2100441]\n\tGetHandleVerifier [0x0048B75A+1396954]\n\tGetHandleVerifier [0x0048B3D9+1396057]\n\tGetHandleVerifier [0x00497126+1444518]\n\tGetHandleVerifier [0x0048BCE8+1398376]\n\tOrdinal0 [0x00217F51+2064209]\n\tOrdinal0 [0x002222EB+2106091]\n\tOrdinal0 [0x00222411+2106385]\n\tOrdinal0 [0x002349C4+2181572]\n\tBaseThreadInitThunk [0x77286359+25]\n\tRtlGetAppContainerNamedObjectPath [0x776E7C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x776E7BF4+180]\n\t(No symbol) [0x00000000]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.baseClass.Library.browserSetUp(Library.java:53)\r\n\tat com.stepDefinition.LoginStepsWithDataDriven.launch_the_browser_and_navigate_to_the_URL(LoginStepsWithDataDriven.java:16)\r\n\tat ✽.launch the browser and navigate to the URL(file:///C:/Users/malar/git/repository/HybridSeleniumCucumber/src/test/resources/Features/TestCase.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter \"Admin\" and \"admin12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.click_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the page title and  get screen shot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.get_the_page_title_and_get_screen_shot()"
});
formatter.result({
  "status": "skipped"
});
});