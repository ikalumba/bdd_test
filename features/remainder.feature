Feature: Modulus

    Scenario: 2%1
        Given i start with 2
        When i check for remainder when divided by 1
        Then i end up with 0

    Scenario: 10%3
        Given i start with 10
        When i check for remainder when divided by 3
        Then i end up with 1