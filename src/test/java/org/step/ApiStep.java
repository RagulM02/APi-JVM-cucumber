package org.step;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import junit.framework.*;

public class ApiStep {
	public static RequestSpecification req = RestAssured.given();
	public static Response response;
	public static String url = "https://reqres.in/";

	@Given("User is add the header key {string} and value {string}")
	public void user_is_add_the_header_key_and_value(String key, String val) {
		req = req.header(key, val);
	}

	@Given("user send the post request {string} with body {string}")
	public void user_send_the_post_request_with_body(String post, String body) {
		response = req.contentType(ContentType.JSON).body(body).post(url + post);
	}

	@Given("user send the PUT request {string} with body {string}")
	public void user_send_the_PUT_request_with_body(String put, String body) {
		response = req.contentType(ContentType.JSON).body(body).put(url + put);
	}

	@Given("user send the Delete request {string}")
	public void user_send_the_Delete_request(String del) {

		response = req.contentType(ContentType.JSON).delete(url + del);
	}

	@When("user is get the request api {string}")
	public void user_is_get_the_request_api(String arg) {
		response = req.contentType(ContentType.JSON).get(url + arg);

	}

	@Then("user should  see the response code as {string}")
	public void user_should_see_the_response_code_as(String exp) {
		int statusCode = response.getStatusCode();
		System.out.println(statusCode);
		String actual = String.valueOf(statusCode);
		Assert.assertEquals(exp, actual);

	}

	@Then("user should see {string} as {string} in the response body")
	public void user_should_see_as_in_the_response_body(String key, String val) {
		ResponseBody body = response.getBody();
		JsonPath jsonPath = body.jsonPath();
		Object act = jsonPath.get(key);
		System.out.println("key is: " + key + "value is: " + act);
		Assert.assertEquals(val, String.valueOf(val));
	}

	@Then("user should see {string} present in the response body")
	public void user_should_see_present_in_the_response_body(String key) {
		ResponseBody body = response.getBody();
		JsonPath jsonPath = body.jsonPath();
		Object object = jsonPath.get(key);
		System.out.println("key is: " + key + " and value is " + object);
		Assert.assertNotNull(object);

	}

}