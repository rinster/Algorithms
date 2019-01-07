 #! python3

class DLnode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None
    
    def printValue(self):
        print(self.value)

class DLL:
    def __init__(self):
        self.head = None
        self.tail = None    

    def showAll(self):
        #starting at the first node, this will loop through the values and print them using the print function
        cur_node = self.head
        while cur_node != None:
            cur_node.printValue()
            cur_node = cur_node.next

    def prepend(self, value):
        #this function adds a node to the beginning
        #defining the new node variable
        newNode = DLnode(value)
        
        #checks the list if there are no nodes, and if not, add a first node
        if self.head == None and self.tail == None:
            self.head = newNode
            self.tail = newNode
            print("A new node was created")
        
        #else if there is nodes, since we are adding to the beginning
        # we set the new node to the head, and the what was the previous head 
        # to the new node
        else:
            newNode.next = self.head
            self.head.prev = newNode
            self.head = newNode
    
    def append(self, value):
        #this function adds a node to the end
        #defining the variable AGAIN (because variables defined in the function will die in the function)
        newNode = DLnode(value)

        #just as we did with prepend, we will do the same with append, but this time with the tail
        #checks if the list has a node, if not, add the new node
        if self.tail == None and self.head == None:
            self.tail = newNode
            self.head = newNode
        
        #this condition will pass if there are nodes in the list, if so add the new node to the end
        else: 
            newNode.prev = self.tail
            self.tail.next = newNode
            self.tail = newNode
        print("A new node was added to the end")
        
    def remove(self, value):
        #checking if there is no nodes, if so, then there is nothing to remove and it will return the function false
        if self.head == None:
            return False
        
          #the var below start the current node at the head
        cur_node = self.head
        if cur_node.value == value:
            #checking for only one value, if so then gut that node
            if cur_node == self.tail:
                self.head = None
                self.tail = None
                print("A node was removed.")
                return True
            else: 
                self.head = cur_node.next
                cur_node.next.prev = None
                print("A node was removed.")
                return True
        
        #starting at the current node and looping through the list
        cur_node = cur_node.next
        while cur_node != None and cur_node != self.tail:
            if cur_node.value == value:
                cur_node.prev.next = cur_node.next
                cur_node.next.prev = cur_node.prev
                print("A node was removed.")
                return True
            cur_node = cur_node.next
        #removing value at the tail
        if cur_node.value == value:
            self.tail = cur_node.prev
            cur_node.prev.next = None
            print("A node was removed.")
            return True
        return False

        
                
dll = DLL()
print(dll.remove(3))
dll.append(1)
dll.append(2)
dll.append(3)
dll.append(4)
dll.append(5)

dll.showAll()

print(dll.remove(1))

dll.showAll()

print(dll.remove(3))

dll.showAll()

print(dll.remove(5))

dll.showAll()
