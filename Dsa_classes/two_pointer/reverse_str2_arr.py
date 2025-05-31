a = "AKSHAY"
str = list(a)

i = 0
j = len(str)-1
print(j)

while i<j:
    t = str[i]
    str[i]=str[j]
    str[j] = t
    i+=1
    j-=1
print(str)
print(list(a))