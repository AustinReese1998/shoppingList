"use strict"
class Subject{

	constructor(){
		this.handlers = []
	}
	subscribe(fn){
		this.handlers.push(fn)
	}
	unsubscribe(fn){
		this.handlers = this.handlers.filter(function(item){
			if (item !== fn){
				return item
			}
		})
	}
	publish(msg, someobj){
		var scope = someobj || window;
		for (let fn of this.handlers){
			fn(scope, msg)
		}
	this.handlers = []
	}
}
class Item {
    constructor(item, quan, prio, stor, cate, pric, itemId, bought) {
        this.item = item
        this.quan = quan
        this.prio = prio
        this.stor = stor
        this.cate = cate
        this.pric = pric
        this.itemId = itemId
        this.bought = bought
    }
    getItem() {
        return this.item
    }
    getQuan() {
        return this.quan
    }
    getPrio() {
        return this.prio
    }
    getStor() {
        return this.stor
    }
    getCate() {
        return this.cate
    }
    getPric() {
        return this.pric
    }
    getBought() {
    	return this.bought
    }
    getItemId() {
    	return this.itemId
    }
    setItem(item) {
        this.item = item
    }
    setQuan(quan) {
        this.quan = quan
    }
    setPrio(prio) {
        this.prio = prio
    }
    setStor(stor) {
        this.stor = stor
    }
    setCate(cate) {
        this.cate = cate
    }
    setPric(pric) {
        this.pric = pric
    }
    setBought() {
        let month = d.getMonth()
        let day = d.getDate()
        let year = d.getFullYear()
        let hour = d.getHours()
        let minute = d.getMinutes()
        month = months[month]
        minute = JSON.stringify(minute)
        if (minute.length === 1){
            minute = "0" + minute
        }
        this.bought = month + " " + day + ", " + year + "  -  " + hour + ":" + minute
    }
    getBought() {
        return this.bought
    }
}

class shoppingList extends Subject{
    constructor() {
        super();
        this.shopList = []
    }
    getShoppingList() {
        return this.shopList
    }
    addToList(item) {
        this.shopList.push(item)
        super.publish("Item added", this)
    }
    getSize() {
        return this.shopList.length
    }
    isEmpty() {
        if (this.shopList.length == 0){
            return true
        } else{
            return false
        }
    }
    delFromList(item) {
        for (let i=0; i<this.shopList.length; i++){
            if (this.shopList[i] == item){
                this.shopList.splice(i, 1)
            }
        }
        super.publish("Removed item", this)
    }
    refresh(){
    	super.publish("Reload", this)
    }
    sortByItem(){
    	let itemKeys = []
    	for (let item of this.shopList){
    		let itemKey = item.getItem() + ":" + item.getItemId()
    		itemKeys.push(itemKey)
    	}
    	itemKeys.sort()
    	let newShopList = []
    	let notSorted = true
		for (let sortedItem of itemKeys){
			for (let unsortedItem of this.shopList){
				let itemId = parseInt(sortedItem.substr(parseInt(sortedItem.indexOf(":")) + 1, sortedItem.length))
				if (unsortedItem.getItemId() === itemId){
					newShopList.push(unsortedItem)
    				
    			}
    		}
    	}
    	this.shopList = newShopList
    	super.publish("Sorted by Item", this)
    }
    sortByQuan(){
    	let quanKeys = []
    	for (let item of this.shopList){
    		let itemKey = item.getQuan() + ":" + item.getItemId()
    		quanKeys.push(itemKey)
    	}
    	quanKeys.sort()
    	let newShopList = []
		for (let sortedItem of quanKeys){
			for (let unsortedItem of this.shopList){
				let itemId = parseInt(sortedItem.substr(parseInt(sortedItem.indexOf(":")) + 1, sortedItem.length))
				if (unsortedItem.getItemId() === itemId){
					newShopList.push(unsortedItem)
    				
    			}
    		}
    	}
    	this.shopList = newShopList
    	this.shopList.reverse()
    	super.publish("Sorted by Quantity", this)
    }
    sortByPrio(){
    	let prioKeys = []

    	for (let item of this.shopList){
    		let prio = item.getPrio()
    		if (prio === "High"){
    		let itemKey = prio + ":" + item.getItemId()
    		prioKeys.push(itemKey)
    		}
    	}
    	for (let item of this.shopList){
       	    let prio = item.getPrio()
    		if (prio === "Medium"){
    		let itemKey = prio + ":" + item.getItemId()
    		prioKeys.push(itemKey)
    		}
    	}
    	for (let item of this.shopList){
            let prio = item.getPrio()
    		if (prio === "Low"){
    		let itemKey = prio + ":" + item.getItemId()
    		prioKeys.push(itemKey)
    		}
    	}
    	let newShopList = []
		for (let sortedItem of prioKeys){
			for (let unsortedItem of this.shopList){
				let itemId = parseInt(sortedItem.substr(parseInt(sortedItem.indexOf(":")) + 1, sortedItem.length))
				if (unsortedItem.getItemId() === itemId){
					newShopList.push(unsortedItem)
    				
    			}
    		}
    	}
    	this.shopList = newShopList
    	super.publish("Sorted by Priority", this)
    }
    sortByStor(){
    	let storKeys = []
    	for (let item of this.shopList){
    		let itemKey = item.getStor() + ":" + item.getItemId()
    		storKeys.push(itemKey)
    	}
    	storKeys.sort()
    	let newShopList = []
		for (let sortedItem of storKeys){
			for (let unsortedItem of this.shopList){
				let itemId = parseInt(sortedItem.substr(parseInt(sortedItem.indexOf(":")) + 1, sortedItem.length))
				if (unsortedItem.getItemId() === itemId){
					newShopList.push(unsortedItem)
    				
    			}
    		}
    	}
    	this.shopList = newShopList
    	super.publish("Sorted by Store", this)
    }
    sortByCate(){
    	let cateKeys = []
    	for (let item of this.shopList){
    		let itemKey = item.getCate() + ":" + item.getItemId()
    		cateKeys.push(itemKey)
    	}
    	cateKeys.sort()
    	let newShopList = []
		for (let sortedItem of cateKeys){
			for (let unsortedItem of this.shopList){
				let itemId = parseInt(sortedItem.substr(parseInt(sortedItem.indexOf(":")) + 1, sortedItem.length))
				if (unsortedItem.getItemId() === itemId){
					newShopList.push(unsortedItem)
    				
    			}
    		}
    	}
    	this.shopList = newShopList
    	super.publish("Sorted by Category", this)
    }
    sortByPric(){
    	console.log("Not today...")
    }
}

