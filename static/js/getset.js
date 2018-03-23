function set(){
	let config = {}
	config.method = 'POST'
	config.body = JSON.stringify({'list': JSON.stringify(list.getShoppingList())})
	config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
	fetch("/savelist", config)
}

function get(){
	fetch("/getlist")
	.then(function(response){
		let item = response.json()
		return item
		.then(function(item) {
			let parsedList = JSON.parse(item["list"])
			let newList = []
			for (let listItem of parsedList){

				let newItem = new Item(listItem.item, listItem.quan, listItem.prio, 
					listItem.stor, listItem.cate, listItem.pric, itemId, listItem.bought)
				newList.push(newItem)
				itemId = itemId + 1
			}
			list.subscribe(view.replaceTable)
			list.feedList(newList)	

		})
	})
}

function setPurchased(){
	let config = {}
	config.method = 'POST'
	config.body = JSON.stringify({'list': JSON.stringify(purchasedList.getShoppingList())})
	config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
	fetch("/savepurchasedlist", config)
}


function getPurchased(reload){
	fetch("/getpurchasedlist")
	.then(function(response){
		let item = response.json()
		return item
		.then(function(item) {
			let parsedList = JSON.parse(item["list"])
			let newList = []
			for (let listItem of parsedList){

				let newItem = new Item(listItem.item, listItem.quan, listItem.prio, 
					listItem.stor, listItem.cate, listItem.pric, itemId, listItem.bought)
				newList.push(newItem)
				itemId = itemId + 1
			}
			if (reload){
				purchasedList.subscribe(view.replacePurchasedTable)
				purchasedList.feedList(newList)	
			}  else{
			purchasedList.feedList(newList)	
			}
		})
	})
}