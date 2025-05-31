# Brute force aproch T.C = 0(n*n)

a = [2,4,5,7,8,34,56]
b =[4,3,5,2,45,55]

a.sort()
b.sort()

for i in range(len(a)):
    for j in range(len(b)):
        if a[i]==b[j]:
            print(a[i])
        
# Two pointer variable - Time_compicity = 0(nlogn)