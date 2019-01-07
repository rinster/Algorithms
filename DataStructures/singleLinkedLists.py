#! python3

class SLNodes():
    def __init__(self, value):
        self.value = value
        self.next = None
    
class SLists():
    def __init__(self):
        self.root = None

    # def hasLoop(self):
    #     fast = self.root
    #     slow = self.root

    #     while fast and fast.next:

    #This will add a value
    def add(self, value):

        #this variable defines the new_node that was passed
        new_node = SLNodes(value)

        #this adds a new node at the beginning
        if self.root == None:
            self.root = new_node
            print("A new node was added")
       
        else:
            #starts the node at the beginning
            cur_node = self.root
            #then loops through all the nodes until there is no more nodes, thus None
            while cur_node != None:
                cur_node = cur_node.next
            cur_node =  new_node
            print("New Node Added to the List")
        return self

    def remove(self, value):
        #checks to see if there is anything in the list
        if self.root == None:
            return False
        
        #this portion checks to see the value we are looking for
        #if its at the beginning portion
        elif self.root.value == value:
            self.root = self.root.next 
            return True
        else:
            #starting the loop at the root
            cur_node = self.root
            #loops through the list until it finds the value, also checking that the next node has a node and not None
            while cur_node.next != None:
                #if the landed node is the correct value, then it will set the current node's pointer to the next node, gutting the node
                if cur_node.next.value == value:
                    cur_node.next = cur_node.next.next
                    return True
                cur_node = cur_node.next
        #the function will return false if there is no value in the list of what we're looking for
        return False


list1 = SLists()
list1.add(5)
