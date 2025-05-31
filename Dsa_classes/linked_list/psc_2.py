#1 initialize the  linklist and add data
class Node:
    def __init__(self,data):
        self.data=data
        self.next=None

class LinkedList:
    def __init__(self):
        self.head=None
    
    def insert(self,data):
        new_node=Node(data)
        if self.head is None:
            self.head=new_node
        else:
            temp=self.head
            while temp.next:
                temp=temp.next
            temp.next=new_node

# count the length of linklist
    def check_ln_(self):
        curr=self.head
        len = 0
        while curr != None:
            curr = curr.next
            len+=1
        print(len)

    #2 add element at kth positon
    # def add_kth_position(self):
    #     temp=self.head
    #     nextnode=temp.next
    #     temp.next=newnode
    #     newnode = nextnode


# Example usage
linked_list = LinkedList()

# Inserting elements into the linked list
linked_list.insert(10)
linked_list.insert(20)
linked_list.insert(30)
linked_list.insert(10)
linked_list.insert(20)
linked_list.insert(30)


# Displaying the linked list
linked_list.check_ln_()

    
        