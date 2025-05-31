# Brute force approch

def bubble_sort(arr,n):
    for i in range(n-1):
        for j in range(n-1):
            if arr[j]>arr[j+1]:
                tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
    return arr


print(bubble_sort([9,7,6,4,2,1],6))



#Using pointer

# def bubble_sort_p(arr,n):
#     for i in range(n-1):
#         isSwapped = 0
#         for j in range(n-i-1):
#             if arr[j]>arr[j+1]:
#                 temp = arr[j]
#                 arr[j] = arr[j+1]
#                 arr[j+1] = temp
#                 isSwapped +=1

#         if isSwapped == 0:
#             break
#     return arr

# a1=[12,65,45,12,18]
# a2=[0]*5
# stack=[]
# stack.append(a2[0])
# for i in range(len(a1)):
#     a2.append(a1[i]%6)
#     if a2[i]<a1:
#         pass

# print(bubble_sort_p([9,7,6,4,2,1],6))