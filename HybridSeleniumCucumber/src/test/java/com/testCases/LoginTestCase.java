package com.testCases;


import java.io.IOException;

import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.baseClass.Library;
import com.pages.LoginPage;
import com.seleniumReusableFunctions.SeleniumUtilities;


public class LoginTestCase extends Library {
	@BeforeTest
	public void stratUp() {
		browserSetUp();
		logger.info("Browser Lanuched and navigate to url");
		
	}
	@Test
	public void login() {
		LoginPage lpage=new LoginPage(driver);
		lpage.login(properties.getProperty("username"), properties.getProperty("pwd"));
		logger.info("Login Successful");
	}
	
	
	@AfterTest
	public void close() throws IOException {
		SeleniumUtilities sUti = new SeleniumUtilities(driver);
		sUti.to_take_screenshot("src/test/resources/ScreenShots/orangehr1.png");
		logger.info("Take ScreenShot");
		tearDown();
		
	}

}
