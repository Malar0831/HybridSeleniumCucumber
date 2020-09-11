package com.stepDefinition;

import com.baseClass.Library;
import com.pages.LoginPage;
import com.seleniumReusableFunctions.SeleniumUtilities;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends Library {
	LoginPage lpage;
	SeleniumUtilities sUti;
	@Given("To Launch the browser and Navigate to the URL")
	public void to_Launch_the_browser_and_Navigate_to_the_URL() {
		browserSetUp();
		logger.info("Browser Lanuched and navigate to url");
	}

	@When("Enter UserName and Password")
	public void enter_UserName_and_Password() {
		lpage=new LoginPage(driver);
		lpage.login(properties.getProperty("username"), properties.getProperty("pwd"));
		logger.info("Login Successful");
	    
	}

	@Then("Click Login Button")
	public void click_Login_Button() {
		lpage.submit();
	}

	@Then("Get the page Title and ScreenShot")
	public void get_the_page_Title_and_ScreenShot() {
		sUti = new SeleniumUtilities(driver);
		sUti.to_take_screenshot("src/test/resources/ScreenShots/orangehr3.png");
		logger.info("Take ScreenShot");
		sUti.getTitle();
       tearDown();
	    
	}


}
