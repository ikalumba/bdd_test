const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");


// Assignment

let answer = 0;

Given("i start with {int}", function (input) {
  answer = input;
});

When("i subtract {int}", function (input) {
  answer -= input;
});

Then("i end up with {int}", function (input) {
  assert.equal(answer, input);
});

When("i divide it by {int}", function (input) {
  answer /= input;
  console.log(input);
});
When("i check for remainder when divided by {int}", function (input) {
  answer %= input;
  console.log(input);
});
When("i give it exponate {int}", function (input) {
  answer **= input;
});
When("i increase it by {int}", function (input) {
  answer += input;
});
