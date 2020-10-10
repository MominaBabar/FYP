import RPi.GPIO as GPIO          
from time import sleep


#motor pins for movement
in1 = 22
in2 = 17
in3 = 27
in4 = 25
en4 = 18
en8 = 5

#ultrasonic pins
TRIG = 23
ECHO = 24

def getdistance():
    print("Distance Measurement In Progress")
    time.sleep(2)

    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)

    while GPIO.input(ECHO)==0:
    pulse_start = time.time()

    while GPIO.input(ECHO)==1:
    pulse_end = time.time()      

    pulse_duration = pulse_end - pulse_start

    distance = pulse_duration x 17150
    distance = round(distance, 2)
    print("Distance:",distance,"cm")
    GPIO.cleanup()
    return distance


def init():
    print("Initializing...")
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(in1,GPIO.OUT)
    GPIO.setup(in2,GPIO.OUT)
    GPIO.setup(in3,GPIO.OUT)
    GPIO.setup(in4,GPIO.OUT)

    GPIO.setup(en4,GPIO.OUT)
    GPIO.setup(en8,GPIO.OUT)
    

    GPIO.setup(TRIG,GPIO.OUT)
    GPIO.setup(ECHO,GPIO.IN)


    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.LOW)


    GPIO.output(TRIG, False)


    p=GPIO.PWM(en4,1000)
    p1=GPIO.PWM(en8,1000)

    p.start(25)
    p1.start(25)

    p.ChangeDutyCycle(50)
    p1.ChangeDutyCycle(50)


def forward(sec):
    print("forward")
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.HIGH)
    time.sleep(sec)
    GPIO.cleanup()

def backward(sec):
    print("backward")
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.HIGH)
    GPIO.output(in3,GPIO.HIGH)
    GPIO.output(in4,GPIO.LOW)
    time.sleep(sec)
    GPIO.cleanup()

def left(sec):
    print("left")
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.HIGH)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.HIGH)
    time.sleep(sec)
    GPIO.cleanup()

def right(sec):
    print("right")
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.HIGH)
    GPIO.output(in4,GPIO.LOW)
    time.sleep(sec)
    GPIO.cleanup()

def stop(sec):
    print("stop")
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.LOW)
    time.sleep(5)
    GPIO.cleanup()

def comparedistance():
    leftd = leftdistance()
    rightd = rightdistance()
    if(leftd>rightd):
        left(0.5)
    else:
        right(0.5)
    stop(0.5)
    

def leftdistance():
    left(0.5)
    getdistance()
    right(0.5)
    stop(0.5)


def rightdistance():
    right(0.5)
    getdistance()
    left(0.5)
    stop(0.5)


def main():
    distance = getdistance()
    if(distance<35):
        changepath()
    forward(0.5)
    stop(0.5)
    time.sleep(0.5)

def changepath():
    stop(0.5)
    comparedistance()


if __name__ == '__main__':
    init()
    while(True):
        main()