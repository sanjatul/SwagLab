class CheckoutLocators{
   
    get grandTotal(){
        return $("//div[@class='grand-total-value']");
    }

    get firstName(){
        return $("//*[@id='first-name']");
    }
    get lastName(){
        return $("//*[@id='last-name']");
    }
    get zipCode(){
        return $("//*[@id='postal-code']");
    }
    get checkoutoutButton(){
        return $("//*[@id='checkout']");
    }
    get continueButton(){
        return $("//*[@id='continue']");
    }
    get getItemTotal(){
        return $("//*[@id='checkout_summary_container']/div/div[2]/div[6]");
    }
    get getTax(){
        return $("//*[@id='checkout_summary_container']/div/div[2]/div[7]");
    }
    get getGrandTotal(){
        return $("//*[@id='checkout_summary_container']/div/div[2]/div[8]");
    }
    get succeessOrderMessage(){
        return $("//*[@id='checkout_complete_container']/h2");
    }
    get finishButton(){
        return $("//*[@id='finish']");
    }

    get filterButton(){
        return $("//select[@class='product_sort_container']");
    }
    get filterOption(){
        return $("//option[@value='za']");
    }
}
module.exports=new CheckoutLocators()