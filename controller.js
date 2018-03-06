"use strict"

let list = new shoppingList()
let view = new View()

list.subscribe(view.replaceTable)



function addItem() {
	let itemName = document.getElementById("selItem").value
	let quanName = document.getElementById("selQuan").value
	let prioName = document.getElementById("selPrio").value
	let storName = document.getElementById("selStor").value
	let cateName = document.getElementById("selCate").value
	let pricName = "Not Implemented"
	let myTable = document.querySelector("#nextItem")

	let tr = document.createElement("tr")

	let item = new Item(itemName, quanName, prioName, storName, cateName, pricName)
	list.addToList(item)

}

function setUp(){
	console.log("Load successful")
}





