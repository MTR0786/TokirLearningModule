def selection_sort(arr,n):
    for i in range(n-1):
        min_index = i
        for j in range(i+1,n):
            if(arr[j]<arr[min_index]):
                min_index = j
        if(min_index != i):
            temp = arr[min_index]
            arr[min_index] = arr[i]
            arr[i] = temp
    return(arr)
        
print(selection_sort([9,7,6,4,2,1],6))