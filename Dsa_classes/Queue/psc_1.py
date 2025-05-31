# 2 global stacks are given
# fun enqueue(item){
# while(S1 isnot empty){
# s2.append(s1[-1])
# s1.pop()
# }
# s1.append(x)
# while(s2 is not empty){
# s1.append(s2[-1])
# s2.pop()
def endqueue(item):
    s1=[]
    s2=[]
    while len(s2)!=0:
        s2.append(s1[-1])
        s1.pop()
    s1.append()