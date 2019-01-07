//Binary Search Trees

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root = null) {
             this.root = new Node(val)
             return this
        }
        var pointer = this.root; 

        //COMPLETE THE INSERT METHOD OF BINARY TREE
    }

    //Methods to Traverse BST
    inOrder() {
        if(this.root == null) {
            return false
        }
        var vals = this.root.inOrder()
        return vals
    }
    preOrder() {
        if(this.root == null) {
            return false
        }
        var vals = this.root.preOrder()
        return vals
    }
    postOrder() {
        if(this.root == null) {
            return false
        }
        var vals = this.root.postOrder()
        return vals
    }

}

class Node  {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
    inOrder() {
        var vals = []
        //LEFT
        if(this.left != null) {
            vals = vals.concat(this.left.inOrder())
        }
        //SELF
        vals.push(this.value)
        //RIGHT
        if(this.right != null) {
            vals = vals.concat(this.right.inOrder())
        }
        return vals
    }
    preOrder() {
        var vals = []
        //SELF
        vals.push(this.value)    
        //LEFT
        if(this.left != null) {
            vals = vals.concat(this.left.preOrder())
        }
        //RIGHT
        if(this.right != null) {
            vals = vals.concat(this.right.preOrder())
        }
        return vals 
    }
    postOrder() {
        var vals = []
        //LEFT
        if(this.left != null) {
            vals = vals.concat(this.left.postOrder())
        }
        //SELF
        vals.push(this.value)
        //RIGHT
        if(this.right != null) {
            vals = vals.concat(this.right.postOrder())
        }    
    }

}