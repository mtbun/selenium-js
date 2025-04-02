const { Builder, By, until } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateTo(url) {
        await this.driver.get(url);
    }

    async findElement(locator) {
        return await this.driver.findElement(locator);
    }

    async findElements(locator) {
        return await this.driver.findElements(locator);
    }

    async click(locator) {
        const element = await this.findElement(locator);
        await element.click();
    }

    async waitForElementVisible(locator, timeout = 10000) {
        await this.driver.wait(until.elementLocated(locator), timeout);
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(locator)), timeout);
    }

    async getText(locator) {
        const element = await this.findElement(locator);
        return await element.getText();
    }

    async takeScreenshot(fileName) {
        const fs = require('fs');
        const path = require('path');

        // Create screenshots directory if it doesn't exist
        const dir = './screenshots';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        const image = await this.driver.takeScreenshot();
        const filePath = path.join(dir, `${fileName}.png`);
        fs.writeFileSync(filePath, image, 'base64');
        return filePath;
    }
}

module.exports = BasePage;
