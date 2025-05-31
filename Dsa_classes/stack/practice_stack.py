def findspan(price,n):
    res = []
    stack = []
    stack.append(0)
    for i in range(1,n):
        while(len(stack)!=0 and price[stack[len(stack)-1]]<= price[i]):
            stack.pop()
        if len(stack)!=0:
            res.append(i-stack[len(stack)-1])
        else:
            res[i]=i+1
        stack.append(i)
    return res

print(findspan([100,60,70,65,80,85],6)) 

'''
n=8
res=[0]*n
stack=[]
res[n-1] = -1
stack.append(n-1)
print(stack)
stack.append(n-2)
print(res)
print(stack)
print(stack[-1])
stack.pop()
print(stack)
print(stack[-1])
'''