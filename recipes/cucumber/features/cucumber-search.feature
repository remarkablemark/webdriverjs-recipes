Feature: Cucumber search
  As a user, I want to search for gherkin on Cucumber.

  Scenario: Searching for gherkin
    Given I am on the Cucumber page
    When I search for "gherkin"
    Then I see the page title "Cucumber"
