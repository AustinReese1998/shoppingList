"use strict"
class shoppingList {
    constructor() {
        this.shopList = new Array()
    }
    getShoppingList() {
        return this.shopList
    }
    addToList(item) {
        this.shopList.push(item)
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
                shopList.splice(i, i + 1)
            }
        }
    }
}