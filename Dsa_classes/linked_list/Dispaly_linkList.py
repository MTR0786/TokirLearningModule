#Node class
class Node:
    def __init__(self,data):
        self.data = data    #The data part of the node
        self.next = None   # the pointer to the next node(initially none)

class LinkedList:
    def __init__(self):
        self.head = None #initialize the head (starting node ) as none


     # Method to insert a new node at the end
    def insert(self, data):
        new_node = Node(data)  # Create a new node
        if self.head is None:  # If the list is empty, make new node the head
            self.head = new_node
        else:
            temp = self.head
            while temp.next:  # Traverse to the end of the list
                temp = temp.next
            temp.next = new_node  # Link the new node at the end


#2 method to display the LinkedList
    def display(self):
        if self.head is None:
            print('linkedlist is empty')
            return
        temp=self.head
        while temp:      #Traverse the linkedlist
            print(temp.data,end=' > ')
            temp=temp.next  #go to next node
        print('None')


linked_list=LinkedList()

linked_list.insert(10)
linked_list.insert(20)
linked_list.insert(30)
linked_list.insert(40)
linked_list.insert(50)


linked_list.display()


    