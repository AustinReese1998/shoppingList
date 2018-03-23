"use strict"

let list = new shoppingList()
let purchasedList = new shoppingList()

let view = new View()
var itemId = 0

var d = new Date()

var months = {0:"January", 1:"February", 2:"March", 3:"April", 4:"May", 5:"June", 6:"July",
7:"August", 8:"September", 9:"October", 10:"November", 11:"December"}

function setUp() {
	get()
	let selItem = document.getElementById("selItem")
	selItem.addEventListener("keyup", function(event){
		event.preventDefault()
		if (event.keyCode === 13){
			document.getElementById("addButton").click()
		}
	})

	getPurchased(false)

}

function purchasedSetUp() {

	getPurchased(true)

}

function addItem() {

	itemId = itemId + 1
	localStorage.setItem("itemId", itemId)

	list.subscribe(view.replaceTable)
	list.subscribe(set)

	let itemName = document.getElementById("selItem").value
	let quanName = document.getElementById("selQuan").value
	let prioName = document.getElementById("selPrio").value
	let storName = document.getElementById("selStor").value
	let cateName = document.getElementById("selCate").value
	let pricName = "Not Implemented"
	let myTable = document.querySelector("#nextItem")

	let tr = document.createElement("tr")

	let item = new Item(itemName, quanName, prioName, storName, cateName, 
		pricName, itemId, false)
	list.addToList(item)

	document.getElementById("selItem").value = ""


}

function boxClick(){

	var cbId = 0

	list.subscribe(view.replaceTable)
	list.subscribe(set)
	purchasedList.subscribe(setPurchased)



	for (let item of list.getShoppingList()){
		cbId = cbId + 1
		let box = document.getElementById("box" + cbId)
		let boughtItem = document.getElementById("row" + cbId)
		if (box.checked){
			boughtItem.style.setProperty("text-decoration", "line-through")
			item.setBought()
			purchasedList.addToList(item)
			list.delFromList(item)

		}
		else{
			boughtItem.style.setProperty("text-decoration", "none")
		}
	}

}

function purchasedBoxClick(){
	var cbId = 0

	purchasedList.subscribe(view.replacePurchasedTable)
	purchasedList.subscribe(setPurchased)



	for (let item of purchasedList.getShoppingList()){
		cbId = cbId + 1
		let box = document.getElementById("box" + cbId)
		let boughtItem = document.getElementById("row" + cbId)
		if (box.checked){
			boughtItem.style.setProperty("text-decoration", "line-through")
			purchasedList.delFromList(item)

		}
		else{
			boughtItem.style.setProperty("text-decoration", "none")
		}
	}


}


function byItem(){
	list.subscribe(view.replaceTable)
	list.sortByItem()
}

function byQuan(){
	list.subscribe(view.replaceTable)
	list.sortByQuan()
}

function byPrio(){
	list.subscribe(view.replaceTable)
	list.sortByPrio()
}

function byStor(){
	list.subscribe(view.replaceTable)
	list.sortByStor()
}

function byCate(){
	list.subscribe(view.replaceTable)
	list.sortByCate()
}

function byPric(){
	list.subscribe(view.replaceTable)
	list.sortByPric()
}
function purByItem(){
	purchasedList.subscribe(view.replacePurchasedTable)
	purchasedList.sortByItem()
}

function purByQuan(){
	purchasedList.subscribe(view.replacePurchasedTable)
	purchasedList.sortByQuan()
}

function purByPrio(){
	purchasedList.subscribe(view.replacePurchasedTable)
	purchasedList.sortByPrio()
}

function purByStor(){
	purchasedList.subscribe(view.replacePurchasedTable)
	purchasedList.sortByStor()
}

function purByCate(){
	purchasedList.subscribe(view.replacePurchasedTable)
	purchasedList.sortByCate()
}

function purByPric(){
	purchasedList.subscribe(view.replacePurchasedTable)
	purchasedList.sortByPric()
}
