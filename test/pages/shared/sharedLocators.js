class SharedLocators{
    get hamburgerButton(){
        return $("//*[@id='react-burger-menu-btn']");
    }
    get resetAppState(){
        return $("//*[@id='reset_sidebar_link']");
    }
    get cartItemNumber(){
        return $("//a[@class='shopping_cart_link' and @data-test='shopping-cart-link']/span[@class='shopping_cart_badge' and @data-test='shopping-cart-badge']");
    }
    get shoppingCartIcon(){
        return $("//a[@class='shopping_cart_link' and @data-test='shopping-cart-link']");
    }
    get backToHomeButton(){
        return $("//*[@id='back-to-products']");
    }
    get credentials(){
        return $('//*[@id="login_credentials"]/h4');
    }
}
module.exports=new SharedLocators();