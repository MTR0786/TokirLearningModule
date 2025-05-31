def check_speed(distance, time):
    s = distance/time
    if s>40 :
      print("Apply Brake")
    else:
        print("Keep Going")
d=20
t=5
check_speed(d,t)
