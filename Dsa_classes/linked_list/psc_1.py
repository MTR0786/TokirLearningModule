# Count the length of linked list
'''
class Node:
    def _init_(self,data):
        self.data =data
        self .next =None
        return data
print
'''
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = new_node

    # Method to count the number of nodes (length of the linked list)
    def count_length(self):
        count = 0
        temp = self.head
        while temp:  # Traverse the list until temp is None
            count += 1
            temp = temp.next
        return count

    def display(self):
        if self.head is None:
            print("The list is empty.")
            return
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

# Example usage:
linked_list = LinkedList()
n = int(input("Enter the number of elements you want to add to the linked list: "))

for i in range(n):
    data = int(input(f"Enter element {i+1}: "))
    linked_list.insert(data)

# Display the linked list
print("The linked list is:")
linked_list.display()

# Count and display the length of the linked list
length = linked_list.count_length()
print(f"The length of the linked list is: {length}")
