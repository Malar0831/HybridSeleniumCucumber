package com.stepDefinition;

import com.baseClass.Library;
import com.pages.LoginPage;
import com.seleniumReusableFunctions.SeleniumUtilities;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepsWithDataDriven extends Library {
	LoginPage lpage;
	SeleniumUtilities sUti;
	@Given("launch the browser and navigate to the URL")
	public void launch_the_browser_and_navigate_to_the_URL() {
		browserSetUp();
		logger.info("Browser Launched and navigate to URL");  
	    
	}

	@When("Enter {string} and {string}")
	public void enter_and(String un, String pas) {
lpage=new LoginPage(driver);
		
		//lpage.login(properties.getProperty("username"), properties.getProperty("pass"));
		lpage.login(un,pas);
		logger.info("Login successful");  
	    
	}

	@Then("click submit button")
	public void click_submit_button() {
		lpage.submit();  
	}

	@Then("Get the page title and  get screen shot")
	public void get_the_page_title_and_get_screen_shot() {
		sUti = new SeleniumUtilities(driver);
		sUti.to_take_screenshot("src/test/resources/ScreenShots/orangehr3.png");
		logger.info("Take ScreenShot");
		sUti.getTitle();
       tearDown();
	}
	
}
