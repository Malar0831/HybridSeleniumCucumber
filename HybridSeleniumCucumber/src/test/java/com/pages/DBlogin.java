package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.Library;
import com.utilities.DBConnector;
import com.utilities.User;

public class DBlogin extends Library {
	@FindBy(name="txtUsername")
	WebElement myusername;
	
	@FindBy(name="txtPassword")
	WebElement mypassword;
	
	@FindBy(id ="btnLogin")
	WebElement submit;
	DBConnector connector;
	User userDetails;
	
	public DBlogin(WebDriver driver) {
		PageFactory.initElements(driver,this);
	}
	
	public void login() {
		connector = new DBConnector();
		userDetails = connector.getCredentialsFromDB();
		System.out.println("@@@@@@@@@@@"+userDetails.getUserName()+"@@@@@@@");
		myusername.sendKeys(userDetails.getUserName());
		mypassword.sendKeys(userDetails.getPassword());
		submit.click();
		
	}

}