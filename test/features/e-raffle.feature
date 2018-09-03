# ./features/e-raffle.feature

Feature: Entering contestant tickets and running raffle on e-raffle app
    As an internet user
    In order efficiently raffle winners for a game night
    I want to be able to submit contestant tickets and run raffle using e-raffle app

Scenario: Navigating to Ticket Submission page
    Given I am on the E-Raffle app
    When I click on "submit tickets"
    Then I should see the page updated to "Ticket Submission"

Scenario: Submitting contestant tickets successfully
    Given I am on the E-Raffle app
    When I click on "submit tickets"
    And Navigate to "Ticket Submission"
    And I enter name "Shishir"
    And I enter tickets "10"
    And I click on "submit"
    Then I should see an alert saying "Entry made!"

Scenario: Submitting tickets but no participant
    Given I am on the E-Raffle app
    When I click on "submit tickets"
    And Navigate to "Ticket Submission"
    And I enter tickets "10"
    And I click on "submit"
    Then I should see an alert saying "Please enter a name and number of tickets"