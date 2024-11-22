const { expect } = require('@playwright/test');


exports.PropertyPage = class PropertyPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        
        this.addPropertyButton = page.locator("//button[text()='Add '][text()='Property']");
        this.titleInput = page.locator('input[placeholder=Title]');
        this.titleDescription = page.locator('input[placeholder=Description]');
        this.titleNumber = page.locator('input[placeholder=Rent]');
        this.submitButton = page.locator('//button[text()="Submit"]')
    }

    
    async clickAddProperty() {
        await this.addPropertyButton.click();
    }

    async inputTitle(title) {
        await this.titleInput.fill(title);
    }

    async inputTitleDescription(string) {
        await this.titleDescription.fill(string);
    }

    async inputRent(rent) {
        await this.titleNumber.fill(rent);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }

    async addProperty(title, description, rent) {
        await this.inputTitle(title);
        await this.inputTitleDescription(description);
        await this.inputRent(rent);
        await this.clickSubmit();
    }
}

