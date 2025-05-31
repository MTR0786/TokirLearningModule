# Brute force aproch T.C = 0(n*n)

a =[7,4,9,21,8,11,5]
a.sort()
print(a)
x = int(input("Enter the number:- "))
i = 0
while i<len(a)-1:
    j=i+1
    while j<len(a):
        sum = a[i]+a[j]
        if sum == x:
            print(a[i],a[j])
            exit(0)
        j+=1
    i+=1
else:
    print("combination not found")
        
    


# Two pointer variable - Time_compicity = 0(nlogn)
def Check_sum(a,n,x):
    a.sort()
    i = 0
    j = n - 1
    while i < len(a)-1:
        sum = a[i]+a[j]
        if sum == x:
            return a[i],a[j]
        if sum > x:
            j-=1
        if sum < x:
            i+=1
    return False

print(Check_sum([7,4,9,21,8,11,5],7,25))

        