Feature: Application Login 

Background: 
	Given Validate the browser 
	When The browser is triggered 
	Then Verify that browser is started 
	

@RegTest
Scenario: Home page default login 
	Given User is on net banking landing page 
	When User logins into application with username as "krupa" and password as "1234"
	Then Homepage is displayed 
	And Cards displayed as "true"
	
@MobileTest
Scenario: Home page default login 
	Given User is on net banking landing page 
	When User logins into application with username as "mehta" and password as "4321"
	Then Homepage is displayed 
	And Cards displayed as "false"
	
@MobileTest
Scenario: Home page default login 
	Given User is on net banking landing page 
	When User sign up with following details
	| krupa | mehta | 33 | Plano | TX | USA | 9999999 |
	| vineet | kamdar | 34 | Pune | MH | IN | 8886767 | 
	Then Homepage is displayed 
	And Cards displayed as "false"
	
	
@RegTest
Scenario Outline: Home page default login 
	Given User is on net banking landing page 
	When User logins in to application with username <Username> and password <Password> 
	Then Homepage is displayed 
	And Cards displayed as "true" 
	
	Examples: 
		| Username | Password |
		| krupa	| 123 |
		| mehta | 234 |
		| km | 5433 |
		| mk | 54344 |