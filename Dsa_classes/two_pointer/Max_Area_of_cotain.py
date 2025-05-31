# Brute force apporach
def Max_area(n,arr):
    max_a = 0
    
    for i in range(n-1):
        for j in range(i+1,n):
            area = min(arr[i],arr[j])*(j-i)         #arr[j]*arr[j-1]
            if max_a < area:
                max_a = area
    print(max_a)


print(Max_area(9,[1,8,6,2,5,4,8,3,7]))



# Two pointer variable - Time_compicity = 0(nlogn)
def max_area(n,A):
    i = 0
    j = n-1
    max_a = 0
    while i<j:
        area=min(A[i],A[j])*(j-1)

        max_a = max(max_a,area)
        if A[i]<A[j]:
            i +=1
        else:
            j-=1
    print(max_a)


print(max_area(9,[1,8,6,2,5,4,8,3,7]))