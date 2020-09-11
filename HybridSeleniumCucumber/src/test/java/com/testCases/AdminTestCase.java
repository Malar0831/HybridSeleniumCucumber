package com.testCases;

import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.baseClass.Library;
import com.pages.AdminPage;
import com.pages.LoginPage;

public class AdminTestCase extends Library {
	AdminPage adminpage;
	@BeforeTest
	public void startup() {
		browserSetUp();
		logger.info("Browser Lanuched and navigate to url");
	
	}
	@Test(priority =1)
	public void login() {
		LoginPage lpage=new LoginPage(driver);
		lpage.login(properties.getProperty("username"), properties.getProperty("pwd"));
		logger.info("Login Successful");
	}
	@Test(priority =2)
	public void adminClick(){
		adminpage = new AdminPage(driver);
		adminpage.adminClick();
		adminpage.searchuser(properties.getProperty("usernameadmin"), properties.getProperty("userroll"),
				properties.getProperty("employeename"), properties.getProperty("status"));

		logger.info("Details entered");
	 //adminpage.searchuser("Admin", "Admin", "Linda Anderson", "All");
		tearDown();
		
	}
	
}
