package skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	WebDriver driver;
	@Given("^The URL of Git Hub$")
	public void the_URL_of_Git_Hub() throws Throwable {
		System.setProperty("WebDriver.chrome.driver","C:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://github.com/login");



	}
	@When("^User enters (.*) as username$")
	public void user_enters_sanketh247_as_username(String username) throws Throwable {
		driver.findElement(By.id("login_field")).sendKeys(username);
	}

	@When("^User enters (.*) as password$")
	public void user_enters_gopala247_as_password(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);
	}
	@Given("^User Clicks on SignIn$")
	public void user_Clicks_on_SignIn() throws Throwable {
		driver.findElement(By.name("commit")).click();
	    throw new PendingException();
	}
	@Then("^User navigates to (.*)$")
	public void user_navigates_to_Git_Hub(String result) throws Throwable {
	    if(result.startsWith("Sign"))
	    {
	    Assert.assertTrue(driver.getTitle().startsWith("Sign"));
	    }
	    else
	    {
	    Assert.assertTrue(driver.getTitle().startsWith("Git"));
	    }
	    throw new PendingException();
	}
	@Then("^User clicks on Submit For (Git Hub page|Sign In Git Hub page)$")
	public void user_clicks_on_Submit() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	}
 
