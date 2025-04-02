// File: pages/instructorsPage.js
const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');
const config = require('../config/config');
const Logger = require('../utils/logger');

class InstructorsPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = config.instructorsUrl;
        // Update the selector to match the actual class name
        this.instructorItems = By.css('.instructor-item');
    }

    async navigate() {
        await this.navigateTo(this.url);
    }

    async getInstructorCount() {
        try {
            await this.waitForElementVisible(this.instructorItems);
            const instructors = await this.findElements(this.instructorItems);
            return instructors.length;
        } catch (error) {
            Logger.error(`Failed to find instructor items: ${error.message}`);

            // Try to debug by getting the page source
            try {
                const pageSource = await this.driver.getPageSource();
                Logger.info(
                    `Page contains instructor-item: ${pageSource.includes('instructor-item')}`
                );
                Logger.info(
                    `Page contains instructor-card: ${pageSource.includes('instructor-card')}`
                );
            } catch (e) {
                Logger.error(`Failed to get page source: ${e.message}`);
            }

            throw error;
        }
    }

    async isInstructorListEmpty() {
        const count = await this.getInstructorCount();
        return count === 0;
    }
}

module.exports = InstructorsPage;
