// ./step-definitions/e-raffle-steps.js

module.exports = function () {
    this.page = page.eRaffle;

    this.Given(/^I am on the E-Raffle app$/, async () => {
        await this.page.open();
        await this.page.waitTillPageLoaded();
        return;
    });

    this.Then(/^I should see the page updated to "([^"]*)"$/, async expectedPageTitle => {
        let pageTitle = await this.page.getCurrentPage();
        expect(pageTitle).to.equal(expectedPageTitle);
    });


    this.When(/^I click on "([^"]*)"$/, async buttonText => {
        await this.page.navigateToPage(buttonText);
        return;
    });
};