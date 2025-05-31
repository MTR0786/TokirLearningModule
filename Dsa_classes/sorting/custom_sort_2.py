def sort_array(arr,n,k):
    m = []
    for i in range(n):
        a = arr[i]%k
        m.append(a) #m = [0, 0, 5, 5, 4]
    for i in range(n-1):
        for j in range(n-i-1):
            if m[j]>m[j+1]:
                tmp = m[j]
                m[j]=m[j+1]
                m[j+1]=tmp
                temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
    return arr
    print(m)
    print(arr)



print(sort_array([12,18,17,65,46],5,6))