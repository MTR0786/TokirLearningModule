#Nearest / Immediate Smaller Element to its Right [NSE Right]
#here we put smalest element staring from right side

def NSE_Right(arr,n):
    res=[0]*n
    stack=[n-1]
    res[n-1]=-1

    for i in range(n-2,-1,-1):
        while len(stack)!=0 and arr[stack[-1]]>=arr[i]:
            stack.pop()
        if len(stack)!=0:
            res[i]=arr[stack[-1]]
        else:
            res[i]=-1
        stack.append(i)
    
    return res
print(NSE_Right([7,2,4,6,9,3,8,11],8))

