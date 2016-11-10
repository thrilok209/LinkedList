import linkListNode from "./linklistnode";
import linkList from "./linklist";

let ll = new linkList;
let n1 = new linkListNode(1);
ll.insert(0, n1);
let n2 = new linkListNode(2);
ll.insert(0, n2);
let n3 = new linkListNode(3);
ll.insert(0, n3);
let n5 = new linkListNode(5);
ll.insert(0, n5);
let n6 = new linkListNode(6);
ll.insert(0, n6);
let n7 = new linkListNode(7);
ll.insert(0, n7);
let n8 = new linkListNode(8);
ll.insert(0, n8);
let n9 = new linkListNode(9);
ll.insert(0, n9);

ll.Circular(2);

ll.toCircular();
