class AddToCartLocators{
 productFromList(){
    return $$("//div[@class='inventory_list']/div[@class='inventory_item']");
}
 
}
module.exports=new AddToCartLocators();