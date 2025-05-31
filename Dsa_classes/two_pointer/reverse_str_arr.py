'''A = [1,2,3,2,1]
B = []

for i in range(len(A)-1,-1,-1):
    B.append(A[i])
print(A)
print(B)
if A == B:
   print("Palindrome")
else:
    print('Not palindrome')
'''

# a = ['civic']
# arr = list(a[0])
# b = []
# print(arr)
# for i in range(len(arr)-1,-1,-1):
#     b.append(arr[i])
#     print(i)
# print(b)


a = ['civic']
arr = list(a[0])
res = []
i = 0
j=len(arr)-1

while(i<j):
    if(arr[i]!=arr[j]):
        print("not palindrome")
        break
else:
    print("palindrome")
print("a")

# # problem 3
# def check_palidrome(arr):
#     j = 0
#     for i in range(len(arr)-1,-1,-1):
#         if arr[i]!=arr[j]:
#          return "No" 
#         j += 1
#     return "yes"


# print(check_palidrome(['c','i','v','i','c']))
