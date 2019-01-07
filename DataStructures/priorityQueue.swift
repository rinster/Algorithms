//
//  main.swift
//  priorityQueue
//
//  Created by Erine Natnat on 9/11/18.
//  Copyright © 2018 Erine Natnat. All rights reserved.
//

import Foundation

class Node<T> {
    var value : T
    var priority : Int
    var next : Node<T>?
    init( _ value : T, priority : Int) {
        self.value = value
        self.priority = priority
    }
}

class PQueue<T> {
    var head : Node<T>?
    var tail : Node<T>?

    func enqueue( _ value : T, priority : Int = 0) -> Self {
        let newNode = Node( value, priority : priority)
        //case  0
        if head == nil {
            head = newNode
            tail = newNode
            
        //case 1+
        }else {
            //case insert at head
            if newNode.priority > (head?.priority)! {
                newNode.next = head
                head = newNode
            } else if newNode.priority <= (tail?.priority)! {
                tail?.next = newNode
                tail = newNode
            } else {
                var walker = head
                while walker?.next != nil && walker!.next!.priority >= newNode.priority {
                    walker = walker?.next
            
                newNode.next = walker?.next
                walker?.next = newNode
            }
        }
    
     
        }
        return self
    }
    
    func show() -> String {
        var str = "-->"
        var current = head
        while current != nil {
            if current === tail {
                str += "\(current!.value) -->"
            } else {
                str += "\(current!.value) -->"
            }
            current = current?.next
        }
        return str
    }
}

let pQ = PQueue<Int>()
pQ.enqueue(1, priority: 2).enqueue(1, priority: 1).enqueue(3, priority: 1).enqueue(1, priority: 4)

print(pQ.show())

print(nil === nil)


