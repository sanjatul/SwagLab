const loginActions=require("../pages/login/loginActions")
const error_message="Epic sadface: Sorry, this user has been locked out.";
const locked_out_user = "locked_out_user";
const password="secret_sauce";
describe("Swag Lab - Verification of login error message", () => {
    it("Should display error message with lock_out_user credentials", async () => {
        await loginActions.enterusername(locked_out_user);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
        await browser.pause(3000);
        let massage= await loginActions.getLoginErrorMessage();
        console.log(massage)
        expect(error_message).toEqual(massage);
    });
});
