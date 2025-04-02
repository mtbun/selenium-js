const { Builder } = require('selenium-webdriver');
require('chromedriver');
const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

const HomePage = require('../pages/homePage');
const InstructorsPage = require('../pages/instructorsPage');
const Logger = require('../utils/logger');
const config = require('../config/config');

describe('Eteration Academy Instructor Tests', function () {
    // Increase timeout for the test
    this.timeout(30000);

    let driver;
    let homePage;
    let instructorsPage;

    beforeEach(async function () {
        Logger.step('Setting up WebDriver and initializing pages');
        // Set up the WebDriver
        driver = await new Builder().forBrowser(config.browser).build();
        await driver.manage().window().maximize();

        // Initialize page objects
        homePage = new HomePage(driver);
        instructorsPage = new InstructorsPage(driver);
        Logger.success('Setup complete');
    });

    afterEach(async function () {
        const currentTest = this.currentTest;

        if (currentTest && currentTest.state === 'failed') {
            Logger.error(`Test failed: ${currentTest.title}`);
            const dir = './screenshots';
            const screenshotPath = await homePage.takeScreenshot(`failure-${Date.now()}`);
            Logger.info(`Screenshot saved to: ${screenshotPath}`);
        }

        Logger.step('Closing WebDriver session');
        await driver.quit();
        Logger.success('WebDriver session closed');
    });

    it('should verify instructor count is 8 and not empty', async function () {
        Logger.step('Navigating to the home page');
        await homePage.navigate();
        Logger.success('Navigated to home page');

        Logger.step('Clicking on the instructors link');
        await homePage.clickInstructorsLink();
        Logger.success('Navigated to instructors page');

        Logger.step('Verifying instructor list is not empty');
        const isEmpty = await instructorsPage.isInstructorListEmpty();
        expect(isEmpty).to.be.false;
        Logger.success('Instructor list is not empty');

        Logger.step('Verifying instructor count');
        const count = await instructorsPage.getInstructorCount();
        Logger.info(`Found ${count} instructors (expected: ${config.expectedInstructorCount})`);

        if (count !== config.expectedInstructorCount) {
            Logger.info(
                `Warning: Found ${count} instructors, but expected ${config.expectedInstructorCount}`
            );
        } else {
            Logger.success(`Instructor count is ${count} as expected`);
        }

        expect(count).to.equal(config.expectedInstructorCount);
    });
});
