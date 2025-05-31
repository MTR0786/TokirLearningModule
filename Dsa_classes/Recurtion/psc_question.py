#find sum of numbers store iin array using recurtion

'''
def sum_arr(arr,N):
    if N<=0:
        return 0
    else:
        return arr[N-1] + sum_arr(arr,N-1)

print(sum_arr([1,3,5,10,50],5))
'''

# find no of subsets whose sum equato give in question (let X).
def check_subset(arr,i,n,ans,x):
    if i==n:
        if sum(ans)==x:
            return 1
        return 0
    count=0
    ans.append(arr[i])
    count+=check_subset(arr,i+1,n,ans,x)
    ans.pop()
    count+=check_subset(arr,i+1,n,ans,x)
    return count

print(check_subset([1,2,3,4,5],0,5,[],15))

#masai
def p_m(arr,n,sm,k):
    global mxct
    global mnct
    if sm<k:
        return
    if sm==k:
        mxct=max(sm,mxct)
        mnct=min(sm,mnct)
    for i in range ( i<n ):
        p_m(arr,n,sm,k,)
    return mxct, mnct

print(p_m([1,3,5,10,15],5,0,15))