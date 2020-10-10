import socketIO from 'socket.io-client';
// Initialize Socket IO:
const socket = socketIO('ws://192.168.18.63:5090', {
  transports: ['websocket'],
  jsonp: false
});

// export the function to connect and use socket IO:
export const startSocketIO = (store) => {
  socket.connect();
  
  socket.on('connect', () => {console.log("lllkkkk");
    const { userId } = store.getState().user;

  });
  socket.on('disconnect', () => {
    console.log('connection to server lost.');
  });
  
  socket.on('newMessage', (message) => {
    store.dispatch(storePublicMessages([ message ]));
  });
};