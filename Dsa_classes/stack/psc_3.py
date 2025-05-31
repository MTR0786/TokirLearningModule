
def NSE_left(arr):
    res=[-1]
    stack=[0]

    for i in range(1,len(arr)):
        while len(stack)!=0 and arr[stack[-1]]>=arr[i]:
            stack.pop()
        if len(stack)!=0:
            res.append(stack[-1])
            
        else:
            res.append(-1)
        stack.append(i)
    return res

print(NSE_left([100,60,70,65,80,85]))  #Here index is print if greater
