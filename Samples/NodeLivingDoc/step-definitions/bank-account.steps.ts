import { Given, When, Then } from "@cucumber/cucumber";
import { assert } from "chai";

let accountBalance = 0;

Given(
  /A bank account with starting balance of \$(\d*)/,
  async function (amount: number) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    accountBalance = amount;
  }
);

When(/\$(\d*) is deposited/, async function (amount: number) {
  accountBalance = Number(accountBalance) + Number(amount);
});

Then(
  /The bank account balance should be \$(\d*)/,
  async function (expectedAmount: number) {
    assert.equal(accountBalance, expectedAmount);
  }
);
