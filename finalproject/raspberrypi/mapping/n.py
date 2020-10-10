# import socket

# def connect(hostname, port):
#     sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#     socket.setdefaulttimeout(1)
#     result = sock.connect_ex((hostname, port))
#     sock.close()
#     return result == 0

# for i in range(0,255):
#     for j in [135, 137, 138, 139, 445]:
#         res = connect("172.17.0.226", 5000)
#         if res:
#             print("Device found at: ", "192.168.1.7"+":"+str(j))
#         else:
#             print("error")


import nmap # import nmap.py module
nm = nmap.PortScanner() # instantiate nmap.PortScanner object
for host in nm.all_hosts():
    print('----------------------------------------------------')
    print('Host : %s (%s)' % (host, nm[host].hostname()))
    print('State : %s' % nm[host].state())

for proto in nm[host].all_protocols():
    print('----------')
    print('Protocol : %s' % proto)

    lport = nm[host][proto].keys()
    lport.sort()
    for port in lport:
        print('port : %s\tstate : %s' % (port, nm[host][proto][port]['state']))

        print('----------------------------------------------------')
