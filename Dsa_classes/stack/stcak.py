'''stack = []
print(type(stack))

stack.append("a")
stack.append("b")
stack.append("c")

print("Initial stack:- ",stack)



print(stack.pop())
print(stack.pop())
print(stack.pop())

print("Final stack:-",stack)
'''


#order:- as long as open brackets are there no problem, but when you see the
#first closing bracket it should be match with the most recent open bracket

def Isbalanced(stack): #["(","[","{","}","]",")"]
        if len(stack)%2 != 0:
            return False
        s = []
        for i in range(len(stack)):
            input = stack[i]
            if input == "(" or input == "[" or input == "{":
                s.append(stack[i])
            else:
                if len(s) == 0:
                    return False
                temp = s.pop()
                if input == ")" and temp != "(":
                    return False
                if input == "}" and temp != "{":
                    return False
                if input == "]" and temp != "[":
                    return False
        return len(s) == 0



print(Isbalanced(["(","[","{","}","]",")"]))

