package com.stepDefinition;

	
	import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
	import org.openqa.selenium.TakesScreenshot;
	import org.openqa.selenium.WebDriverException;

import com.baseClass.Library;

import io.cucumber.java.After;
	import io.cucumber.java.Before;
	import io.cucumber.java.Scenario;

	public class ServiceHooks {
		
		//TestBase testBase;
		Library testBase;

		Logger log = LoggerHelper.getLogger(ServiceHooks.class);

		@Before
		public void initializeTest() {
			log.info("Initializing test");
			//testBase = new TestBase();
			//testBase.browserSetUp();
			testBase = new Library();
			testBase.browserSetUp();
		}
		
		@After
		public void endTest(Scenario scenario) {
			if (scenario.isFailed()) {

				try {
					log.info(scenario.getName() + " is Failed");
					//final byte[] screenshot = ((TakesScreenshot) TestBase.driver).getScreenshotAs(OutputType.BYTES);
					final byte[] screenshot = ((TakesScreenshot) Library.driver).getScreenshotAs(OutputType.BYTES);
					//scenario.embed(screenshot, ); // ... and embed it in
					scenario.attach(screenshot, "image/png", "name");
				} catch (WebDriverException e) {
					e.printStackTrace();
				}

			} else {
				try {
					log.info(scenario.getName() + " is pass");
					scenario.attach(((TakesScreenshot) Library.driver).getScreenshotAs(OutputType.BYTES), "image/png", "name");
				} catch (Exception e) {
					e.printStackTrace();
				}
			}

			Library.driver.quit();
		}
		
		
	}

