const loginActions=require("../pages/login/loginActions")
const sharedActions=require("../pages/shared/sharedActions")
const addToCartActions=require("../pages/addToCart/addToCartActions")
const checkoutActions=require("../pages/checkout/checkoutActions")
const utilitiy = require("../pages/Utilites/utilitiy");
const firstname="Ayesha";
const lastname="Nasrin";
const zipcode=1234;
const glitch_user = "performance_glitch_user";
const password="secret_sauce";
const number=1;
const url="https://www.saucedemo.com/inventory.html"
const loginUrl="https://www.saucedemo.com/"
let selectedInventoryItems;
describe("Swag Lab - Verification of Glitch User Checkout Journey", () => {
    it("Should be able to successfully log into Swag Lab", async () => {
        await loginActions.enterusername(glitch_user);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
        await browser.pause(4000);
        // Verify that the URL is the expected URL after login
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe(url);
    });

    it("Should be able to reset the app state from the hamburger menu", async () => {
        await sharedActions.clickHamburgerButton();
        await sharedActions.clickResetAppStateButton();
    });

    it("Should Filter the item by Name (z to A)", async () => {
       await checkoutActions.clickFilterButton();
       await checkoutActions.clickFilterOption();
       browser.pause(2000)
    });

    it("Should display number of selected products on 'Add to Cart' button", async () => {
        // Locate all inventory items
        selectedInventoryItems =await addToCartActions.addToCart(number);
        browser.pause(2000);
        const itemNumber = parseInt(await sharedActions.getItemNumberInCart(), 10);
        expect(itemNumber).toEqual(number);
        browser.pause(2000);
    });

    it("Shopping cart items should match the added items name and price", async () => {
        await sharedActions.clickShoppingCartIconButton();
        browser.pause(2000);
        await checkoutActions.clickOnCheckoutButton();
        await browser.pause(2000)
        await checkoutActions.enterFirstName(firstname)
        await checkoutActions.enterLastName(lastname)
        await checkoutActions.enterZipcode(zipcode)
        await checkoutActions.clickOnContinueButton()
        const productsInfo = {};
        const cartItems = await $$("div[data-test='inventory-item']");
        
        for (let i = 0; i < Math.min(cartItems.length, 3); i++) {
            const productName = await cartItems[i].$(".inventory_item_name").getText();
            const productPrice = await cartItems[i].$(".inventory_item_price").getText();
            productsInfo[productName] = productPrice;
            await browser.pause(1000);
        }
        expect(productsInfo).toEqual(selectedInventoryItems);
    });

    it("Successfully display total price", async () => {
      let ItemTotal=await checkoutActions.getItemTotalAmount();
      ItemTotal=await utilitiy.extractDecimalValue(ItemTotal);
      let Tax=await checkoutActions.getTaxAmout();
      Tax=await utilitiy.extractDecimalValue(Tax);
      let total=ItemTotal+Tax;
      let GrandTotal=await checkoutActions.getGrandTotal();
      GrandTotal=await utilitiy.extractDecimalValue(GrandTotal);
     expect(total).toEqual(GrandTotal);
    });

    it("Verify Success message", async () => {
       await checkoutActions.clickOnFinishButton();
       let message=await checkoutActions.getSuccessOrderMessage();
       expect(message).toEqual("Thank you for your order!");
      });
      it("Successfully resting the app state and logout", async () => {
        await sharedActions.ClickOnBackToHomeButton();
        browser.pause(2000)
        await sharedActions.clickHamburgerButton();
        browser.pause(2000)
        await sharedActions.clickResetAppStateButton();
        browser.pause(1000)
        await loginActions.clickOnLogout();
        browser.pause(4000)
        let base = await browser.getUrl();
        expect(base).toBe(loginUrl);
       });
});