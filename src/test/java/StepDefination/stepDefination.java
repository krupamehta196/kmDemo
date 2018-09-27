package StepDefination;

import java.util.List;

import org.junit.runner.RunWith;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class stepDefination {

	@Given("^Validate the browser$")
	public void validate_the_browser() throws Throwable {
		System.out.println("Inside Given of Background");
	}

	@When("^The browser is triggered$")
	public void the_browser_is_triggered() throws Throwable {
		System.out.println("Inside When of Background");
	}

	@Then("^Verify that browser is started$")
	public void verify_that_browser_is_started() throws Throwable {
		System.out.println("Inside Then of Background");
	}

	@Given("^User is on net banking landing page$")
	public void user_is_on_net_banking_landing_page() throws Throwable {
		System.out.println("Given");
	}

	@When("^User logins into application with username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_logins_into_application_with_username_as_something_and_password_as_something(String strArg1,
			String strArg2) throws Throwable {
		System.out.println("Inside When");
		System.out.println("username : " + strArg1);
		System.out.println("password : " + strArg2);
	}

	@When("^User sign up with following details$")
	public void user_sign_up_with_following_details(DataTable data) throws Throwable {
		List<List<String>> obj = data.raw();
		System.out.println(obj.get(0).get(0) + " " + obj.get(0).get(1) + " " + obj.get(0).get(2) + " "
				+ obj.get(0).get(3) + " " + obj.get(0).get(4) + " " + obj.get(0).get(5) + " " + obj.get(0).get(6));
		System.out.println(obj.get(1).get(0) + " " + obj.get(1).get(1) + " " + obj.get(1).get(2) + " "
				+ obj.get(1).get(3) + " " + obj.get(1).get(4) + " " + obj.get(1).get(5) + " " + obj.get(1).get(6));
	}

	@When("^User logins in to application with username (.+) and password (.+)$")
	public void user_logins_in_to_application_with_username_and_password(String username, String password)
			throws Throwable {
		System.out.println("Username: " + username + " & Password " + password);
	}

	@Then("^Homepage is displayed$")
	public void homepage_is_displayed() throws Throwable {
		System.out.println("Then");
	}

	@And("^Cards displayed as \"(.*?)\"$")
	public void cards_displayed_as(String arg1) throws Throwable {
		System.out.println("And of Then");
		System.out.println("cards are displayed as: " + arg1);
	}

}