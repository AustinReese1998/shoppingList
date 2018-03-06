"use strict"

Subject

class View extends Subject{
	constructor(listArray){
		super()
	}

	replaceTable(list){

		let listArray = list.getShoppingList()
		let myTable = document.querySelector("#nextItem")
		myTable.innerHTML = ""
		for (let i = 0; i < listArray.length; i++){

			let tr = document.createElement("tr")

			let itemCol = document.createElement("td")
			let quanCol = document.createElement("td")
			let prioCol = document.createElement("td")
			let storCol = document.createElement("td")
			let cateCol = document.createElement("td")
			let pricCol = document.createElement("td")

			let itemName = listArray[i].getItem()
			let quanName = listArray[i].getQuan()
			let prioName = listArray[i].getPrio()
			let storName = listArray[i].getStor()
			let cateName = listArray[i].getCate()
			let pricName = listArray[i].getPric()

			itemCol.innerHTML = itemName
			quanCol.innerHTML = quanName
			prioCol.innerHTML = prioName
			storCol.innerHTML = storName
			cateCol.innerHTML = cateName
			pricCol.innerHTML = pricName

			tr.appendChild(itemCol)
			tr.appendChild(quanCol)
			tr.appendChild(prioCol)
			tr.appendChild(storCol)
			tr.appendChild(cateCol)
			tr.appendChild(pricCol)

			myTable.appendChild(tr)

		}

		console.log("Item added", list[listArray.length - 1])
		console.log("Current list:", list)
	}
}
