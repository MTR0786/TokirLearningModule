# Node class
class Node:
    def __init__(self, data):
        self.data = data  # The data part of the node
        self.next = None  # The pointer to the next node (initially None)

# LinkedList class
class LinkedList:
    def __init__(self):
        self.head = None  # Initialize the head (starting node) as None

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

    # Method to display the linked list
    def display(self):
        if self.head is None:
            print("The list is empty.")
            return
        temp = self.head
        while temp:  # Traverse through the list
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

# Example usage
linked_list = LinkedList()

# Inserting elements into the linked list
linked_list.insert(10)
linked_list.insert(20)
linked_list.insert(30)

# Displaying the linked list
linked_list.display()



