class LoginLocators{
    get loginUsernameInput(){
        return $("//*[@id='user-name']");
    }
    get loginPasswordInput(){
        return $("//*[@id='password']");
    }
    get buttonLogin(){
        return $("//*[@id='login-button']");
    }
    get logoutLink(){
        return $("//*[@id='logout_sidebar_link']");
    }
    get loginErrorMessage(){
        return $("//div[contains(@class, 'error-message-container')]//h3[@data-test='error']");
    }
}
module.exports=new LoginLocators();