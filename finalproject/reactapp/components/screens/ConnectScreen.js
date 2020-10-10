import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {getuser} from '../../actions/useraction';
import PropTypes from 'prop-types';
import AwesomeAlert from 'react-native-awesome-alerts';
import socketIO from "socket.io-client";
class ConnectScreen extends React.Component {
  constructor(props){
    super(props);
    this.myInput = React.createRef();
    this.state={
      ip:"",
      isFocused: true,
      visible:false,
      h:false
      
    }

  }
  
  
 connectto = () =>{
    global.ip = this.state.ip;
    console.log("Connecting...");
    var j = false;
    if(socket==undefined){
        console.log("Connecting...")
        console.log(global.ip);

        var socket = socketIO('ws://'+global.ip+':5090', {      
          transports: ['websocket'], jsonp: false }); 
           
          socket.connect(); 
          console.log(socket);
          socket.on('connect', () => { 
            console.log('connected to socket server');
            console.log(socket);
            // if(socket.disconnected==true) { 
            //     console.log('not connected'); 
            //     alert("Not connected. enter Valid IP.");
            //     this.setState({ip:""});
            //     global.ip = undefined;
                 
            //   }
            this.show(); 
          })
          
          
          
        //   else{
              
        //   }
      }

    
    
   }
   hide = () =>{
      this.setState({visible:false});
   }
   show = () =>{
    this.setState({visible:true});
 }

 render(){
 
  return (
    <View style={styles.container}>
      <View style={styles.imagestyle}>
      <Image source={require('../../cleanroombyyy.png')}
style={{width:'100%', height: '64%', resizeMode:
'contain'}} />
      </View>
      <View style={styles.topstyling}>
        {/* <View>
            <Text style={styles.modalText}>---Instructions to connect to Robot---</Text>
            <Text style={styles.modalText}>1. Turn on Robot.</Text>
            <Text style={styles.modalText}>2. Download fing app from play store.</Text>
            <Text style={styles.modalText}>3. Open fing app. Click on scan for devices.</Text>
            <Text style={styles.modalText}>4. Find device "Raspberry pi" and note its ip address.</Text>
            <Text style={styles.modalText}>5. Click on next button below nd enter the ip address in next screen.</Text>
            <Text style={styles.modalText}>6. Press connect to connec to your roomby.</Text>

            <Text style={styles.modalText}>ALL DONE!!!!</Text>
      </View> */}
      <Text style={styles.logo}>Connect To Robot</Text>
      
           
            
       
      <View style={styles.midstyling}>
    
        <View style={styles.inputView1} >
          <TextInput  
            style={styles.inputText}
            placeholder="Enter IP Address"
            ref={this.myemailInput}
            onChangeText={text => this.setState({ip:text})}
            />
        </View>
        </View>
        </View>
        <View style={styles.bottomstyling}>
        {this.state.visible && 
         <TouchableOpacity style={styles.loginBtn}  onPress={()=>this.props.navigation.navigate('Home', {user:this.props.user.user })
        }>
         <Text style={styles.loginText}>Next</Text>
       </TouchableOpacity>
        
        }
        {!this.state.visible && 
         <TouchableOpacity style={styles.loginBtn}  onPress={this.connectto}>
         <Text style={styles.loginText}>Connect</Text>
       </TouchableOpacity>
        
        }
        
        </View>
        </View>
       

 
     
  );}
}
const styles = StyleSheet.create({
  imagestyle: {
    top: -110,
      justifyContent: 'center',width: '100%',
      height: '25%',
      backgroundColor: 'lightblue'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topstyling: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: '30%',
    top: -130
  },
  midstyling: {
    width: '80%',
    height: '60%',
    backgroundColor: 'white',
    marginLeft: 40,
    marginRight: 15,
    borderColor: "deepskyblue",
    borderWidth: 1.3,
    borderRadius: 20
  },
  bottomstyling:{
   
    width: '100%'
  },
  logo:{
    marginTop: 10,
    fontSize:40,
   
    color:"white",
    justifyContent: 'center',
    alignItems: 'center',
    left: 50,
    marginBottom:20
  },
  inputView1:{
    width:"80%",
    height: "60%",
    backgroundColor: 'white',
    borderRadius:25,
    height:50,
    marginLeft: 40,
    marginBottom:20,
   
    justifyContent:"center",
    padding:20,
    borderColor: "deepskyblue",
    borderWidth: 2
  },
  inputView2:{
    width:"80%",
    height: "60%",
    backgroundColor: 'white',
    borderRadius:25,
    height:50,
    marginLeft: 40,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    borderColor: "deepskyblue",
    borderWidth: 2
  },
  inputText:{
    height:50,
    color:"#20b2aa",
    fontSize: 16
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"60%",
    backgroundColor:"lightblue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:80,
    marginBottom:10,
    marginLeft: 80
  },
  loginText:{
    color:"white",
    fontSize: 18,
    fontWeight: 'bold'
  }
});

ConnectScreen.propTypes = {
    getuser: PropTypes.func.isRequired,
    user: PropTypes.object
  }
  const mapStateToProps = (state) => ({
    user: state.user
  });
  
  export default connect(mapStateToProps, { getuser })(ConnectScreen);

