# ./features/e-raffle.feature

Feature: Entering contestant tickets and running raffle on e-raffle app
    As an internet user
    In order efficiently raffle winners for a game night
    I want to be able to submit contestant tickets and run raffle using e-raffle app

Scenario: Navigating to Ticket Submission page
    Given I am on the E-Raffle app
    When I click on "submit tickets"
    Then I should see the page updated to "Ticket Submission"