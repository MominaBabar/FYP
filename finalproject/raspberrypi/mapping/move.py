import RPi.GPIO as GPIO          
from time import sleep

in1 = 22
in2 = 17
in3 = 27
in4 = 25
en4 = 18
en8 = 5

def init():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(in1,GPIO.OUT)
    GPIO.setup(in2,GPIO.OUT)
    GPIO.setup(in3,GPIO.OUT)
    GPIO.setup(in4,GPIO.OUT)

    GPIO.setup(en4,GPIO.OUT)
    GPIO.setup(en8,GPIO.OUT)

    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.LOW)


    p=GPIO.PWM(en4,1000)
    p1=GPIO.PWM(en8,1000)

    p.start(25)
    p1.start(25)

    p.ChangeDutyCycle(50)
    p1.ChangeDutyCycle(50)


def forward(sec):
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.HIGH)
    time.sleep(sec)
    GPIO.cleanup()

def backward(sec):
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.HIGH)
    GPIO.output(in3,GPIO.HIGH)
    GPIO.output(in4,GPIO.LOW)
    time.sleep(sec)
    GPIO.cleanup()

def left(sec):
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.HIGH)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.HIGH)
    time.sleep(sec)
    GPIO.cleanup()

def right(sec):
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.HIGH)
    GPIO.output(in4,GPIO.LOW)
    time.sleep(sec)
    GPIO.cleanup()

def stop(sec):
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.LOW)
    time.sleep(5)
    GPIO.cleanup()



print("\n")
print("--------------------------------------------------")
print("Press: w-forward s-backward a-left d-right x-stop q-quit")
print("--------------------------------------------------")

print("\n")    
init()
while(1):

    x=raw_input()
    
    if x=='x':
        print("stop")
        stop(5)
    elif x=='w':
        print("forward")
        forward(5)
    elif x=='s':
        print("backward")
        backward(5)
    elif x=='a':
        print("left")
        left(5)
    elif x=='d':
        print("right")
        right(5)
    elif x=='q':
        print("ending program...")
        break
    else:
        print("<<<  wrong data  >>>")
        print("please enter the defined data to continue.....")
        print("\n")
        print("--------------------------------------------------")
        print("Press: w-forward s-backward a-left d-right x-stop q-quit")
        print("--------------------------------------------------")
        print("\n") 