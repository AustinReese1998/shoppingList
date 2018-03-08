"use strict"

let list = new shoppingList()
let view = new View()

var itemId = 0


function addItem() {

	itemId = itemId + 1

	list.subscribe(view.replaceTable)

	let itemName = document.getElementById("selItem").value
	let quanName = document.getElementById("selQuan").value
	let prioName = document.getElementById("selPrio").value
	let storName = document.getElementById("selStor").value
	let cateName = document.getElementById("selCate").value
	let pricName = "Not Implemented"
	let myTable = document.querySelector("#nextItem")

	let tr = document.createElement("tr")

	let item = new Item(itemName, quanName, prioName, storName, cateName, pricName, itemId)
	list.addToList(item)

}

function boxClick(){

	var cbId = 0

	list.subscribe(view.replaceTable)



	for (let item of list.getShoppingList()){
		cbId = cbId + 1
		let box = document.getElementById("box" + cbId)
		let boughtItem = document.getElementById("row" + cbId)
		if (box.checked){
			boughtItem.style.setProperty("text-decoration", "line-through")
			list.delFromList(item)
		}
		else{
			boughtItem.style.setProperty("text-decoration", "none")
		}
	}
}


function thisFunctionDoesNothing(){
	console.log("Nothing was done")
}






