"use strict"
var cbId = 0

class View extends Subject{
	constructor(){
		super()
	}

	replaceTable(){
		cbId = 0
		let listArray = list.getShoppingList()
		let myTable = document.querySelector("#nextItem")
		myTable.innerHTML = ""
		for (let i = 0; i < listArray.length; i++){
			cbId = cbId + 1


			let tr = document.createElement("tr")
			tr.setAttribute("id", "row" + cbId)

			let itemCol = document.createElement("td")
			let quanCol = document.createElement("td")
			let prioCol = document.createElement("td")
			let storCol = document.createElement("td")
			let cateCol = document.createElement("td")
			let pricCol = document.createElement("td")

			itemCol.classList.add("text-center")
			quanCol.classList.add("text-center")
			prioCol.classList.add("text-center")
			storCol.classList.add("text-center")
			cateCol.classList.add("text-center")
			pricCol.classList.add("text-center")


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
			
			var box = document.createElement("input")
			box.type = "checkbox"
			box.classList.add("form-control")
			box.setAttribute("id", "box" + cbId)
			box.onchange = boxClick
			let boxCol = document.createElement("td")
			boxCol.innerHTML = box.value

			tr.appendChild(box)
			tr.appendChild(itemCol)
			tr.appendChild(quanCol)
			tr.appendChild(prioCol)
			tr.appendChild(storCol)
			tr.appendChild(cateCol)
			tr.appendChild(pricCol)
			if (prioName === "Low"){
				tr.classList.add("info")
			}
			else if (prioName === "Medium"){
				tr.classList.add("warning")
			}
			else{
				tr.classList.add("danger")
			}

			myTable.appendChild(tr)
		}
	}
}
