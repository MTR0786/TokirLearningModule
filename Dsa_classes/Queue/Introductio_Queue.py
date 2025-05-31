# queue = []
# queue.append('a')
# queue.append('b')
# queue.append('c')
# print('Initial queue',queue)

# print(queue.pop(0))
# print(queue)
# print(queue.pop(0))
# print(queue.pop(0))

# print('final queue',queue)
# print(queue[0]) #list index out of range
# print(queue[-1])

from collections import deque
q = deque()
print(q)
q.append('a')
q.append('b')
q.append('c')

print('initial queue',q)

print(q.popleft())
print(q)
print(q.popleft())
print(q.popleft())

print('queue after removing',q)