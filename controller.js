"use strict"

let list = new shoppingList()
let purchasedList = new shoppingList()
let view = new View()

var itemId = parseInt(localStorage.getItem("itemId"))
var localRecord = ""
var localPurchased = ""

function setUp() {
	console.log("load successful")
	let selItem = document.getElementById("selItem")
	selItem.addEventListener("keyup", function(event){
		event.preventDefault()
		if (event.keyCode === 13){
			document.getElementById("addButton").click()
		}
	})

	let rawList = JSON.parse(localStorage.getItem('list'))

	for (let item of rawList.shopList){
		list.subscribe(view.replaceTable)

		let newItem = new Item(item.item, item.quan, item.prio, 
			item.stor, item.cate, item.pric, item.itemId, item.bought)
		list.addToList(newItem)
	}

	let rawPurchased = JSON.parse(localStorage.getItem('purchasedList'))

	for (let item of rawPurchased.shopList){
		let newItem = new Item(item.item, item.quan, item.prio, 
			item.stor, item.cate, item.pric, item.itemId, item.bought)
		purchasedList.addToList(newItem)
	}
}

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

	let item = new Item(itemName, quanName, prioName, storName, cateName, 
		pricName, itemId, false)
	list.addToList(item)

	document.getElementById("selItem").value = ""

	localRecord = JSON.stringify(list)
	localStorage.setItem('list', localRecord)
	localStorage.setItem('itemId', itemId)

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
			item.setBought()
			purchasedList.addToList(item)
			list.delFromList(item)

		}
		else{
			boughtItem.style.setProperty("text-decoration", "none")
		}
	}
	localRecord = JSON.stringify(list)
	localPurchased = JSON.stringify(purchasedList)
	localStorage.setItem('list', localRecord)
	//localStorage.setItem('purchasedList', localPurchased)

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






