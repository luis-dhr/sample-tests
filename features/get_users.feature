Feature: Get a list of users
  Scenario: The API should return a list of users
    Given the API is running
    When I send a GET request to "/users"
    Then the response code should be 200