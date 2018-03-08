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
	console.log(msg)
	this.handlers = []
	}
}
class Item {
    constructor(item, quan, prio, stor, cate, pric, itemId) {
        this.item = item
        this.quan = quan
        this.prio = prio
        this.stor = stor
        this.cate = cate
        this.pric = pric
        this.itemId = itemId
        this.bought = false
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
    	this.bought = true
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
}
