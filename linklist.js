"use strict";
var linklistnode_1 = require("./linklistnode");
var lastIndex = -1;
var linkList = (function () {
    function linkList() {
        this.headSenti = new linklistnode_1.default(null);
    }
    linkList.prototype.head = function () {
        return this.headSenti.next;
    };
    linkList.prototype.find = function (index) {
        if (index == -1) {
            return this.headSenti;
        }
        var ele = this.head();
        for (var i = 0; i < index; i++) {
            ele = ele.next;
        }
        return ele;
    };
    linkList.prototype.insert = function (index, node) {
        var preEle = this.find(index - 1);
        var postEle = this.find(index);
        node.next = postEle;
        preEle.next = node;
    };
    linkList.prototype.delete = function (index) {
        var preEle = this.find(index - 1);
        var eleToDel = preEle.next;
        var postEle = eleToDel.next;
        preEle.next = postEle;
        eleToDel.next = null;
        var nodeStart = this.find(lastIndex + 1);
        return nodeStart;
    };
    linkList.prototype.toCircular = function () {
        var x = [];
        var ele = this.head();
        for (var i = 0; i < lastIndex + 10; i++) {
            x[i] = ele.value;
            ele = ele.next;
        }
        for (var i = 0; i < lastIndex + 10; i++) {
            var y = x[i];
            for (var j = i + 1; j < lastIndex + 10; j++) {
                if (y == x[j]) {
                    return console.log(y);
                }
            }
        }
        console.log(x);
    };
    linkList.prototype.Circular = function (index) {
        this.lenght();
        var lastNode = this.find(lastIndex);
        var toAttach = this.find(index);
        lastNode.next = toAttach;
    };
    linkList.prototype.print = function () {
        var ele = this.head();
        while (ele !== undefined) {
            console.log(ele);
            ele = ele.next;
        }
    };
    linkList.prototype.lenght = function () {
        var totalIndex = -1;
        var ele = this.head();
        while (ele !== undefined) {
            totalIndex++;
            ele = ele.next;
        }
        lastIndex = totalIndex;
    };
    return linkList;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = linkList;
