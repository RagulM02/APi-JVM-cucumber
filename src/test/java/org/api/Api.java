package org.api;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.step.Jvmreport;

import cucumber.api.*;
import cucumber.api.junit.*;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src\\test\\resources\\Features" }, plugin = { "pretty",
		"json:src\\test\\resources\\report\\Api.json", "html:\\src\\test\\resources\\report",
		"junit:\\src\\test\\resources\\report\\Api.xml" }, 
glue = { "org.step" }, tags = "@api", dryRun = false)
public class Api {

	@AfterClass
	public static void afterClass() {
		Jvmreport.generatejvmreport(System.getProperty("user.dir") + "\\src\\test\\resources\\report\\Api.json");
	}
}
