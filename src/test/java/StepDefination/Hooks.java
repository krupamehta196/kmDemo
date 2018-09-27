package StepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before("@MobileTest")
	public void beforeValidation() {
		System.out.println("Running before MobileTest");
	}

	@After("@RegTest")
	public void afterValidation() {
		System.out.println("Running after RegTest");
	}

}
