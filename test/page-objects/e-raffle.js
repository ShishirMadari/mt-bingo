// ./page-objects/e-raffle.js

class ERaffleClass {
    constructor() {
        this.url = "http://localhost:3000";
    }

    open() {
        return helpers.loadPage(this.url);
    }

    getDriver() {
        return driver;
    }

    /* wait for spinning wheel to appear and then disappear to assert page has loaded */
    async waitTillPageLoaded() {
        let elem = driver.findElement(by.css(".HomePage-layout-1"));
        await driver.wait(until.elementIsVisible(elem));
        return elem.length > 0;
    }

    async navigateToPage(page) {
        const path = "//button[contains(.,'" + page + "')]";
        await driver.findElement(By.xpath(path)).click();
        return;
    }

    async getCurrentPage() {
        return driver.findElement(by.css(".MuiTypography-body1-41")).getText();
    }

    async enterInput(name, value) {
        await driver.findElement(by.name(name)).sendKeys(value);
        return;
    }

    async getAlert() {
        let alert = driver.switchTo().alert();
        return alert;
    }
}

module.exports = new ERaffleClass();