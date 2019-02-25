Feature: LoginTest

Scenario: Check Login Functionality
	
	Given User is on Login page
	Then  User enters username and password and click on Login button
	Then message displayes user loged in