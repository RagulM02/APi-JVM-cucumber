@api
Feature: Testing the reqres Application end points

  Scenario: User to verify GET request the list of  users End points
    Given User is add the header key "content-type" and value "application/json"
    When user is get the request api "api/users?page=2"
    Then user should  see the response code as "200"
    And user should see "page" as "2" in the response body
    And user should see "total" as "12" in the response body

  Scenario: User to verify GET request the sigle users End points
    When user is get the request api "api/users/2"
    Then user should  see the response code as "200"
    And user should see "data.id" as "2" in the response body
    And user should see "data.email" as "janet.weaver@reqres.in" in the response body

  Scenario: User to verify POST request for create user end point
    Given user send the post request 'api/users' with body '{"name": "morpheus","job": "leader"}'
    Then user should  see the response code as "201"
    And user should see "name" as "morpheus" in the response body
    And user should see "job" as "leader" in the response body
    And user should see "createdAt" present in the response body

  Scenario: User to verify PUT request for create user end point
    Given user send the PUT request 'api/users/2' with body '{"name": "morpheus","job": "zion resident"}'
    Then user should  see the response code as "200"
    And user should see "name" as "morpheus" in the response body
    And user should see "job" as "zion resident" in the response body
    And user should see "updatedAt" present in the response body

  Scenario: User to verify Delete request for create user end point
    Given user send the Delete request 'api/users/2'
    Then user should  see the response code as "204"
