import linkListNode from './linklistnode';
let lastIndex = -1;
export default class linkList {
  private headSenti;
  // public totalIndex;
  constructor(){
    this.headSenti = new linkListNode(null);
  }
  head(){
    return this.headSenti.next

  }
  find(index: number){
    if(index == -1){
      return this.headSenti ;
    }
    let ele = this.head();
    for (let i = 0; i < index; i ++) {
      ele = ele.next;
    }

    return ele;

  }
  insert(index:number,node:linkListNode){
    let preEle = this.find(index - 1);
    let postEle = this.find(index);
    node.next = postEle;
    preEle.next = node;
  }
  delete(index: number){
    let preEle =this.find(index-1);
    let eleToDel = preEle.next;
    let postEle = eleToDel.next;
    preEle.next = postEle;
    eleToDel.next = null;
  let nodeStart = this.find(lastIndex+1)
    return nodeStart;
  }
  toCircular(){
    let x = [];
    let ele = this.head();

    for(let i = 0; i < lastIndex+10;i++){
      x[i]=ele.value;
      ele = ele.next;
    }
    for(let i = 0; i < lastIndex+10;i++){
      let y = x[i]
      for(let j = i+1 ; j < lastIndex+10;j++){
        // console.log(x[j])
        if(y==x[j]){
        return console.log(y);
        }

      }
    }
    console.log(x);
  }
  Circular(index: number){
    this.lenght();
    let lastNode = this.find(lastIndex);
    let toAttach = this.find(index)
    // console.log(lastNode);
    // console.log(toAttach);
    lastNode.next=toAttach;
  }
  print(){
    let ele = this.head();
    while(ele!==undefined){
      // console.log(ele.value);
      console.log(ele);
      ele = ele.next;
    }

  }
  lenght(){
    let totalIndex =  -1;
    let ele = this.head()
    while(ele!==undefined){
     totalIndex++;
    //  console.log(ele);
     ele = ele.next;
    }
    lastIndex = totalIndex;

    // console.log(totalIndex);
  }


}
