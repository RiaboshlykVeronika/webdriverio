describe('Webdriverio_test', () => {
    it('test 1', async () => {
        browser.url('https://webdriver.io/');
		await browser.pause(3000);
		let apiButton = await $('li a[href="/docs/api"]'); 
        await browser.pause(3000);
        await apiButton.click();
        await browser.pause(3000);
        let url = await browser.getUrl();
        console.log("Browser url is: " + url);
        let title = await $('h1');
        let titleValue = await title.getText();
        console.log("Value: " + titleValue);
        let attribute = await $('//*[text()="JSONWire protocol"]');
        let href = await attribute.getAttribute('href');
        console.log("href: " + href);
        await browser.pause(3000);
        let searchButton = await $('.DocSearch-Button');
        await searchButton.click();
        let input = await $('.DocSearch-Input'); 
		await input.setValue('Test is ');
		await browser.pause(3000);
        await input.addValue('DONE!');
        await browser.pause(5000);
    });
});


describe('Webdriverio_test', () => {
    it('test 2', async () => {
        browser.url('https://webdriver.io/docs/api');
        await browser.pause(3000);
        let protocol = await $('//*[text()="JSONWire protocol"]');
        let url = await protocol.getAttribute('href');
        await browser.newWindow(url);
        await browser.pause(3000);
        await browser.switchWindow(url);
        await browser.pause(3000);
        let element = await $('a[href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol"]');
        let isElementDisplayed = await element.isDisplayed();
        console.log('Is displayed: ' + isElementDisplayed);
        await browser.switchWindow('https://webdriver.io/docs/api');
        let headerText = await $('h1');
        await headerText.waitUntil(async function () {
            return (await this.getText()) === 'Introduction'
        });
        headerText.saveScreenshot('screenshot.png');
        let twitter = await $('a[href="https://twitter.com/webdriverio"]');
        let isTwitterDisplayed = await twitter.isDisplayed();
        console.log('Is displayed: ' + isTwitterDisplayed);
        let isDisplayedInView = await twitter.isDisplayedInViewport();
        console.log('Is displayed in view port: ' + isDisplayedInView);
        await twitter.scrollIntoView();
        await browser.pause(3000);
        await twitter.isDisplayed();
        console.log('Is displayed: ' + isTwitterDisplayed);
        await twitter.isDisplayedInViewport();
        console.log('Is displayed in view port: ' + isDisplayedInView);
        let blogButton = $('a[href="/blog"]');
        isFocused = await blogButton.isFocused();
        console.log('Is focused before click: ' + isFocused);
        await blogButton.click();
        isFocused = await blogButton.isFocused();
        console.log('Is focused after click: ' + isFocused);
    });
});

describe.skip('Webdriverio_test', () => {
        it('LogIn with invalid data', async () => {
            browser.url('https://github.com/');
            await browser.pause(3000);
            let loginButton = await $('a[href="/login"]');
            await loginButton.click();
            await browser.pause(3000);
            let loginInput = await $('#login_field');
            await loginInput.setValue('riaboshlyk.veronika@gmail.com');
            await browser.pause(3000);
            let passwordInput = await $('#password');
            await passwordInput.setValue('1111');
            await browser.pause(3000);
            let signInButton = await $('input[type="submit"]');
            await signInButton.click();
            await browser.pause(3000);
        });
    });
    
    describe.skip('Webdriverio_test', () => {
        it('Search with valid data', async () => {
            browser.url('https://github.com/');
            await browser.pause(3000);
            let searchButton = await $('.header-search-input');
            await searchButton.setValue('JavaScript');
            await browser.pause(3000);
            let dropdown = await $('.jump-to-dropdown-visible');
            await dropdown.click();
            await browser.pause(3000);
        });
    });
    
    describe.skip('Webdriverio_test', () => {
        it('Add item to the Cart', async () => {
            browser.url('https://github.com/');
            await browser.pause(3000);
            let shopButton = await $('a[href="https://shop.github.com"]');
            await shopButton.click();
            await browser.pause(3000);
            let itemCard = await $('.featprod__img');
            await itemCard.click();
            await browser.pause(3000);
            let addToCartButton = $('.butt-green');
            await addToCartButton.click();
        });
    });
    
    describe.skip('Webdriverio_test', () => {
        it('Search information on Github Community', async () => {
            browser.url('https://github.com/');
            await browser.pause(3000);
            let forumButton = await $('//*[contains(text(),"Community Forum")]');
            await forumButton.click();
            await browser.pause(3000);
            let topButton = $('//*[@href="/top"]');
            await topButton.click();
            await browser.pause(3000);
        });
    });
    
    describe.only('Webdriverio_test', () => {
        it('Launch course from Learning Lab', async () => {
            browser.url('https://github.com/');
            await browser.pause(3000);
            let learningLabButton = await $('//*[@class="Link--secondary"][@href="https://lab.github.com/"]');
            await learningLabButton.click();
            await browser.pause(3000);
            let courseCard = $('//*[contains(text(),"Introduction to HTML")]');
            await courseCard.click();
            await browser.pause(3000);
        });
    });
    