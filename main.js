menuListArray = ["Pizza Vegetariana", "Pizza de Calabresa", "Pizza de Frango", "Pizza Portuguesa", "Pizza da Frango com Catupiry", "Pizza de Mussarela", "Pizza de Atum"];

function getMenu() {
    var htmldata = "";
    menuListArray.sort();
    for (var i = 0; i < menuListArray.length; i++) {
        htmldata += menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem() {
    var htmldata = "";
    var imgtags = '<img id="im1" src="pizza.png"/>'
    menuListArray.sort();
    for (var i = 0; i < menuListArray.length; i++) {
        htmldata += imgtags + menuListArray[i] + '<br>'
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop() {
    var item = document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}