const sharedLocators=require("./sharedLocators");
class SharedActions{
  
    async clickHamburgerButton(){
        await sharedLocators.hamburgerButton.click();
    }
    async clickResetAppStateButton(){
        await sharedLocators.resetAppState.click();
    }
    async clickShoppingCartIconButton(){
        await sharedLocators.shoppingCartIcon.click();
    }
    async getItemNumberInCart(){
        return await sharedLocators.cartItemNumber.getText();
    }
    async ClickOnBackToHomeButton(){
        await sharedLocators.backToHomeButton.click();
    }
    async getCredentials(){
        await sharedLocators.credentials.getText();
    }
    
}
module.exports=new SharedActions();