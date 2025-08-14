Feature: Cucumber
  As a user, I want to get started with Cucumber.

  Scenario: Cucumber get started
    Given I am on the Cucumber page
    When I click on link "Get Started"
    Then I see the page title "Introduction | Cucumber"
