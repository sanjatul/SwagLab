const checkoutLocators=require("./checkoutLocators")
const utility=require("../Utilites/utilitiy")
class CheckoutActions{
    async getSubTotalAmout(){
        const subTotal=await checkoutLocators.subTotal.getText();
        const subTotalInNumber=await utility.convertTextToNumber(subTotal);
        return subTotalInNumber;
    }
    async getGrandTotalAmout(){
        const grandTotal=await checkoutLocators.grandTotal.getText();
        const grandTotalInNumber=await utility.convertTextToNumber(grandTotal);
        return grandTotalInNumber;
        
    }
    async clickOnCheckoutButton(){
        await checkoutLocators.checkoutoutButton.click();
    }
    async enterFirstName(firstname){
        await checkoutLocators.firstName.setValue(firstname);
    }
    async enterLastName(lastname){
        await checkoutLocators.lastName.setValue(lastname);
    }
    async enterZipcode(code){
        await checkoutLocators.zipCode.setValue(code);
    }
    async clickOnContinueButton(code){
        await checkoutLocators.continueButton.click();
    }
    async clickOnFinishButton(code){
        await checkoutLocators.finishButton.click();
    }
    async getItemTotalAmount(){
        return await checkoutLocators.getItemTotal.getText();
    }
    async getTaxAmout(){
        return await checkoutLocators.getTax.getText();
    }
    async getGrandTotal(){
        return await checkoutLocators.getGrandTotal.getText();
    }
    async getSuccessOrderMessage(){
        return await checkoutLocators.succeessOrderMessage.getText();
    }
    async clickFilterButton(){
        await checkoutLocators.filterButton.click();
    }
    async clickFilterOption(){
        await checkoutLocators.filterOption.click();
    }
  
}
module.exports=new CheckoutActions();