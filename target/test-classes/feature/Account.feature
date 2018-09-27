Feature: Account

@SmokeTest
Scenario: Home page default login 
	Given User is on net banking landing page 
	When User logins into application with username as "krupa" and password as "1234"
	Then Homepage is displayed 
	And Cards displayed as "true"