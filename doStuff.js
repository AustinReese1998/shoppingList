function addItem(){
	let rawItem = document.getElementById("selItem")
	let itemName = rawItem.options[rawItem.selectedIndex].text
	let rawQuan = document.getElementById("selQuan")
	let quanName = rawQuan.options[rawQuan.selectedIndex].text
	let rawPrio = document.getElementById("selPrio")
	let prioName = rawPrio.options[rawPrio.selectedIndex].text
	let rawStor = document.getElementById("selStor")
	let storName = rawStor.options[rawStor.selectedIndex].text
	let rawCate = document.getElementById("selCate")
	let cateName = rawCate.options[rawCate.selectedIndex].text
	let myTable = document.querySelector("#nextItem")

	let tr = document.createElement("tr")

	let itemCol = document.createElement("td")
	let quanCol = document.createElement("td")
	let prioCol = document.createElement("td")
	let storCol = document.createElement("td")
	let cateCol = document.createElement("td")
	let pricCol = document.createElement("td")


	itemCol.innerHTML = itemName
	quanCol.innerHTML = quanName
	prioCol.innerHTML = prioName
	storCol.innerHTML = storName
	cateCol.innerHTML = cateName
	pricCol.innerHTML = "Not Implemented"


	tr.appendChild(itemCol)
	tr.appendChild(quanCol)
	tr.appendChild(prioCol)
	tr.appendChild(storCol)
	tr.appendChild(cateCol)
	tr.appendChild(pricCol)

	myTable.appendChild(tr)
}
