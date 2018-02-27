function addItem(){
	let itemName = document.querySelector("#itemName")
	let myTable = document.querySelector("#nextItem")
	let tr = document.createElement("tr")
	let td = document.createElement("td")
	td.innerHTML = itemName
	tr.appendChild(td)
	myTable.appendChild(tr)
}
