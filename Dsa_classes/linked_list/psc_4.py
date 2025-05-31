class Node:
    def __init__(self,data):
        self.data = data
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
    def display(self):
        if self.head is None:
            print('Linked is empty')
        else:
            temp=self.head
            while temp:
                print(temp.data,end=" ")
                temp=temp.next
            



linkedlist=LinkedList()
n=int(input('Enter the number of elements that you enter:- '))
for i in range(n):
    data = input('enter the element ')
    linkedlist.insert(data)
linkedlist.display()


