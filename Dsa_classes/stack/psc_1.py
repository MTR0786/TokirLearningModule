#Brute force aproch
A=[100,60,70,65,80,85]
def stock_check(A):
    res=[1]
   
    for i in range(1,len(A)):
        count=1
        for j in range(i-1,-1,-1):
            if A[i]>=A[j]:
                count+=1
            else:
                res.append(count)
                break
    return(res)
print(stock_check([100,60,70,65,80,85]))


#using stack
#1) Nearest / Immediate Smaller Element to its Left [NSE Left]
# Here we put index of next item starting from left and comparing with left elemnts refrence to that number
def span_stock(price):
    res=[1]
    stack=[0]
    for i in range(1,len(price)): #i<6
        while(len(stack)!=0 and price[stack[-1]]<=price[i]): #len(stack)!=0 and 
            stack.pop()
      
        if len(stack)!=0:
           
            res.append(i-stack[-1])
        else:
            res.append(i+1)
        stack.append(i)
      
    return res
print(span_stock([100,60,70,65,80,85],))
