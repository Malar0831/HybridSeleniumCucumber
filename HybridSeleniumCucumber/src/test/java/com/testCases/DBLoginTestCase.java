package com.testCases;

import java.io.IOException;


import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.baseClass.Library;
import com.pages.DBlogin;
import com.seleniumReusableFunctions.SeleniumUtilities;

public class DBLoginTestCase extends Library{
	
	@BeforeTest
	public void stratUp() {
		browserSetUp();
		logger.info("Browser Launched and navigate to URL");
		
	}
	@Test
	public void login() {
		DBlogin lpage=new DBlogin(driver);
		lpage.login();
		//lpage.login(properties.getProperty("username"), properties.getProperty("pass"));
		//lpage.login("Admin", "admin123");
		logger.info("Login successful");
		
	}
	@AfterClass
	public void close() throws IOException, InterruptedException {
		SeleniumUtilities sUti = new SeleniumUtilities(driver);
		sUti.to_take_screenshot("/src/test/resources/ScreenShots/orangeHRMLogin1.png");
		logger.info("Take Screen Shot");
		Thread.sleep(5000);
		tearDown();
		
	}


}