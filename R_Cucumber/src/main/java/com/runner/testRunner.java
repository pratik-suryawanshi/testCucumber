package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "C:/Users/pratik/workspace/selenium/R_Cucumber/src/main/java/com/features/config.feature",
		glue={"com.stepDefination"},
		format={"pretty","html:testoutput"},
		monochrome=true,
		strict=true,
		dryRun=false
		
		)
public class testRunner {

}
