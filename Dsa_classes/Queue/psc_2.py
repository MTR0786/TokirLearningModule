def unique_gift(st):
    from collections import deque
    q = deque()
    ans = []
    n = len(st)
    dic = {}
    for i in range(n):
        if st[i] in dic:
            dic[st[i]]+=1
        else:
            dic[st[i]]=1
        q.append(st[i])
        while len(q) != 0:
            if dic[q[0]] == 1:
                ans.append(q[0])
                break
            else:
                q.popleft()
                
        if len(q) == 0:
            ans.append('#')
    print(''.join(ans))

unique_gift('abcabce')





def gift_check(str):
    from collections import deque
    q = deque()
    dic = {}
    ans =[]
    for i in range(len(str)):
        if str[i] in dic:
            dic[str[i]]+=1
        else:
            dic[str[i]]=1
        q.append(str[i])
        while len(q) != 0:
            if dic[q[0]]==1:
                ans.append(q[0])
                break
            else:
                q.popleft()
        else:
            ans.append("#")
    print(''.join(ans))
gift_check('abcabce')