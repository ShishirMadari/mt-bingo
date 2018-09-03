// ./step-definitions/e-raffle-steps.js

module.exports = function () {
    this.page = page.eRaffle;

    this.Given(/^I am on the E-Raffle app$/, async () => {
        await this.page.open();
        await this.page.waitTillPageLoaded();
        return;
    });

    this.When(/^Navigate to "([^"]*)"$/, async expectedPageTitle => {
        let pageTitle = await this.page.getCurrentPage();
        expect(pageTitle).to.equal(expectedPageTitle);
    });

    this.When(/^I enter name "([^"]*)"$/, async val => {
        this.page.enterInput('name', val)
    });

    this.When(/^I enter tickets "([^"]*)"$/, async val => {
        this.page.enterInput('tickets', val)
    });

    this.When(/^I click on "([^"]*)"$/, async buttonText => {
        await this.page.navigateToPage(buttonText);
        return;
    });

    this.Then(/^I should see the page updated to "([^"]*)"$/, async expectedPageTitle => {
        let pageTitle = await this.page.getCurrentPage();
        expect(pageTitle).to.equal(expectedPageTitle);
    });

    this.Then(/^I should see an alert saying "([^"]*)"$/, async expectedValue => {
        setTimeout(function () {
            let alert = this.page.getAlert();
            expect(alert.getText()).to.equal(expectedValue);
            this.page.getDriver().sendKeys(selenium.Key.ENTER);
        }, 5000);

    });
};