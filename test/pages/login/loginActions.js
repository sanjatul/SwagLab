const loginLocators=require("./loginLocators");
class LoginActions{
  
    async enterusername(email){
        await loginLocators.loginUsernameInput.setValue(email);
    }
    async enterPassword(password){
        await loginLocators.loginPasswordInput.setValue(password);
    }
    async clickOnSubmitButton(){
        await loginLocators.buttonLogin.click();
    }
    async getLoginErrorMessage(){
        return await loginLocators.loginErrorMessage.getText();
    }
    async clickOnLogout(){
        await loginLocators.logoutLink.click();
    }
}
module.exports=new LoginActions();