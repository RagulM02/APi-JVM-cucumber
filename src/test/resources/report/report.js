$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/APiframe.feature");
formatter.feature({
  "name": "Testing the reqres Application end points",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "name": "User to verify GET request the list of  users End points",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "User is add the header key \"content-type\" and value \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStep.user_is_add_the_header_key_and_value(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is get the request api \"api/users?page\u003d2\"",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStep.user_is_get_the_request_api(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should  see the response code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStep.user_should_see_the_response_code_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"page\" as \"2\" in the response body",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStep.user_should_see_as_in_the_response_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"total\" as \"12\" in the response body",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStep.user_should_see_as_in_the_response_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User to verify GET request the sigle users End points",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "user is get the request api \"api/users/2\"",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStep.user_is_get_the_request_api(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should  see the response code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStep.user_should_see_the_response_code_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"data.id\" as \"2\" in the response body",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStep.user_should_see_as_in_the_response_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"data.email\" as \"janet.weaver@reqres.in\" in the response body",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStep.user_should_see_as_in_the_response_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User to verify POST request for create user end point",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "user send the post request \u0027api/users\u0027 with body \u0027{\"name\": \"morpheus\",\"job\": \"leader\"}\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStep.user_send_the_post_request_with_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should  see the response code as \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStep.user_should_see_the_response_code_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"name\" as \"morpheus\" in the response body",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStep.user_should_see_as_in_the_response_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"job\" as \"leader\" in the response body",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStep.user_should_see_as_in_the_response_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"createdAt\" present in the response body",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStep.user_should_see_present_in_the_response_body(String)"
});
formatter.result({
  "status": "passed"
});
});