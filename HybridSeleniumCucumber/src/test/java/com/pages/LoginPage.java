package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.Library;

public class LoginPage extends Library {
	
	@FindBy(id="txtUsername")
	WebElement username;
	@FindBy(id="txtPassword")
	WebElement pwd;
	@FindBy(xpath="//*[@id=\'btnLogin\']")
	WebElement Loginbutton;
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
		
}
	public void login(String un,String pas) {
		username.sendKeys(un);
		pwd.sendKeys(pas);
		
	}
	public void submit() {
		Loginbutton.click();
		
	}
}
