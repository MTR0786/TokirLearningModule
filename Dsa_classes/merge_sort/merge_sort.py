def merge_sort(a,l,r):
    if l<r:
        m=l+(r-l)//2
        merge_sort(a,l,m)
        merge_sort(a,m+1,r)
        merge(a,l,m,r)


def merge(a,l,m,r):
    n1=m-l+1
    n2=r-m
    L=[0]*n1
    R=[0]*n2
    for i in range(0,n1):
        L[i]=a[l+i]
    for j in range(0,n2):
        R[j]=a[m+1+j]

    i=0
    j=0
    k=l
    while i<n1 and j <n2:
        if L[i]<=R[j]:
            a[k]=L[i]
            i+=1
        else:
            a[k]=R[j]
            j+=1
        k += 1
    while i<n1:
        a[k]=L[i]
        i+=1
        k += 1
    while j<n2:
        a[k]=R[j]
        j+=1
        k += 1

arr=[27,38,3,43,9,82,10]
merge_sort(arr,0,len(arr)-1)
print(arr)




def merge_sort(a, l, r):
    if l < r:
        m = l + (r - l) // 2
        merge_sort(a, l, m)  # Recursively sort the left half
        merge_sort(a, m + 1, r)  # Recursively sort the right half
        merge(a, l, m, r)  # Merge the sorted halves


def merge(a, l, m, r):
    n1 = m - l + 1  # Length of the left subarray
    n2 = r - m      # Length of the right subarray

    # Create temporary arrays for left and right subarrays
    L = [0] * n1
    R = [0] * n2

    # Copy data to temporary arrays L[] and R[]
    for i in range(0, n1):
        L[i] = a[l + i]
    for j in range(0, n2):
        R[j] = a[m + 1 + j]

    i = 0  # Initial index for left subarray
    j = 0  # Initial index for right subarray
    k = l  # Initial index for merged subarray

    # Merge the temporary arrays back into the original array
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            a[k] = L[i]
            i += 1
        else:
            a[k] = R[j]
            j += 1
        k += 1

    # Copy any remaining elements of L[], if any
    while i < n1:
        a[k] = L[i]
        i += 1
        k += 1

    # Copy any remaining elements of R[], if any
    while j < n2:
        a[k] = R[j]
        j += 1
        k += 1


arr=[58,56,25,10,2,5,3,8,7]
merge_sort(arr,0,len(arr)-1)
print(arr)
                                          

