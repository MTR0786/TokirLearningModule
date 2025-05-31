# Brute force aproch T.C = 0(n*n)

# a = [1,3,50,60]
# b = [2,4,9,10]

# for i in range(len(b)):
#     a.append(b[i])

# a.sort()
# print(a)


# Two pointer variable - Time_compicity = 0(nlogn)

def Merg_two_array(a,b):
    r = 0
    i = 0
    j = 0
    res = []
    while i<len(a) and j<len(b) :
        
        if a[i]>b[j]:
            res.append(b[j])
            r+=1
            j+=1
        elif a[i]<b[j]:
            res.append(a[i])
            i+=1
            r+=1
        elif a[i]==b[j]:
            res.append(b[j])
            r+=1
            res.append(a[i])
            i+=1
            j+=1
            r+=1
            # If there are remaining elements in a, add them
    while i < len(a):
        res.append(a[i])
        i += 1

    # If there are remaining elements in b, add them
    while j < len(b):
        res.append(b[j])
        j += 1

    return res  # Return the result list


print(Merg_two_array([1,3,50,60],[2,4,9,10]))




# def merge_two_arrays(a, b):
#     res = []  # Initialize result list
#     i = 0  # Pointer for the first array
#     j = 0  # Pointer for the second array

#     # Merge until one of the arrays is exhausted
#     while i < len(a) and j < len(b):
#         if a[i] < b[j]:
#             res.append(a[i])
#             i += 1
#         elif a[i] > b[j]:
#             res.append(b[j])
#             j += 1
#         else:  # a[i] == b[j], append both
#             res.append(a[i])
#             res.append(b[j])
#             i += 1
#             j += 1




# print(merge_two_arrays([1, 3, 50, 60], [2, 4, 9, 10]))
