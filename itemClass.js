"use strict"
class Item {
    constructor(item, quan, prio, stor, cate, pric) {
        this.item = item
        this.quan = quan
        this.prio = prio
        this.stor = stor
        this.cate = cate
        this.pric = pric
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
}
