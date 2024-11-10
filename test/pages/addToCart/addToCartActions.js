const addToCartLocators=require("./addToCartLocators");
const utility=require("../Utilites/utilitiy")
class AddToCartActions{
   
    async addToCart(number){
        const inventoryItems = await addToCartLocators.productFromList();
         // Object to store product names and prices
         const productsInfo = {};
        for (let i = 0; i < number; i++) {
            // Find the "Add to Cart" button within the current item and click it
            const addToCartButton = await inventoryItems[i].$(".btn_inventory");
            await addToCartButton.click();
             // Get the product name
             const productName = await inventoryItems[i].$(".inventory_item_name").getText();
             // Get the product price
             const productPrice = await inventoryItems[i].$(".inventory_item_price").getText();
 
             // Add the product name and price to the productsInfo object
             productsInfo[productName] = productPrice;
            // Optional: Pause briefly to observe each click action
            await browser.pause(1000);
        }
        return productsInfo;
    }
}
module.exports=new AddToCartActions();