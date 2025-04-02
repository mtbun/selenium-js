const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');
const config = require('../config/config');

class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = config.baseUrl;
        this.instructorsLink = By.xpath("//a[contains(@href, '/instructors')]");
    }

    async navigate() {
        await this.navigateTo(this.url);
    }

    async clickInstructorsLink() {
        await this.waitForElementVisible(this.instructorsLink);
        await this.click(this.instructorsLink);
    }
}

module.exports = HomePage;
