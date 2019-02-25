package com.stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Point;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class stepDefination {
	
	WebDriver driver;
	
	
	
	
	@Given("^User is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "C://Users//pratik//Documents//drivers//chromedriver.exe");
	    driver = new ChromeDriver();
		driver.manage().window().maximize();
	    driver.navigate().to("http://admin.mindtickle.com");
	    
	}

	@Then("^User enters username and password and click on Login button$")
	public void user_enters_username_and_password_and_click_on_Login_button() throws Throwable {
	    driver.findElement(By.id("loginEmail")).sendKeys("automation_mt@yopmail.com");
	    driver.findElement(By.name("password")).sendKeys("Abcd1234");
	    driver.findElement(By.xpath("//button[@value='Sign In']")).click();
	    
	}

		@Then("^message displayes user loged in$")
	public void message_displayes_user_loged_in(){
	   String title=driver.getTitle();
	
	   Assert.assertEquals("Content Home", title);
	  System.out.println("user is at " +title + "Page");
	    
	}

}
