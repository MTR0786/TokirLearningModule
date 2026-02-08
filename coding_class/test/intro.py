# import math

# print(5//2)

# A=[7]
# B=[9]
# c = []
# c.extend(A[0:])
# print(c)


print("hello")




with open("file.txt", 'a') as f:
    f.write("\n my name is arbaz shah")
    f.close()


f = open("file.txt",'r')
data = f.read()
print(data)
f.close()