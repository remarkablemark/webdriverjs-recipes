Feature: Google search
  As a user, I want to search for cheese on Google.

  Scenario: Searching for cheese
    Given I am on the Google search page
    When I search for "Cheese!"
    Then I see the page title "Cheese! - Google Search"
