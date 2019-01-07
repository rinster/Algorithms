class MinHeap {
    constructor() {
        this.heap = [undefined];
        }
    
    add(val) {
        this.heap.push(val)
        let i = this.heap.length - 1
        while(i>1 && arr[i] < arr[Math.trunc(i/2)]) {
            let temp = arr[i];
            arr[i] = arr[Math.trunc(i/2)]
            arr[Math.trunc(i/2)] = temp
            i = Math.trunc(i/2)
        }
    }
}
 
var list = new MinHeap

list.add(53)
console.log(list)