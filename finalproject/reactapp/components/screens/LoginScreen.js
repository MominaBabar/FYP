import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {getuser} from '../../actions/useraction';
import PropTypes from 'prop-types';
import AwesomeAlert from 'react-native-awesome-alerts';

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.myemailInput = React.createRef();
    this.mypassInput = React.createRef();
    this.state={
      email:"",
      password:"",
      isFocused: true
      
    }

  }
  
  onSubmit = () => {
   
     const user = {
     email: this.state.email,
     password: this.state.password
   }

   this.props.getuser(user);
   console.log(user);
   this.setState({email:""});
   this.setState({password:""});
   this.myemailInput.current.clear();
   this.mypassInput.current.clear();
   
   setTimeout(()=>{
    console.log(this.props.user.user)
    if(this.props.user.user.success === true){
      if(global.ip===undefined){
        this.props.navigation.navigate('Connect', {user:this.props.user.user })
      }
      else{
        this.props.navigation.navigate('Home', {user:this.props.user.user })
      }

  }
  else{ 
       
        alert("Invalid Login!");
  }
 
 
  }, 8000);
   

 
   
   
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
      <Text style={styles.logo}>Login</Text>
      <View style={styles.midstyling}>
       
        <View style={styles.inputView1} >
          <TextInput  
            style={styles.inputText}
            placeholder="Enter Email"
            ref={this.myemailInput}
            onChangeText={text => this.setState({email:text})}
            />
        </View>
        <View style={styles.inputView2} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password"
            ref={this.mypassInput}
            onChangeText={text => this.setState({password:text})}
           
         />
         </View>
        </View>
        </View>
        <View style={styles.bottomstyling}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}  onPress={this.onSubmit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
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
    height: '130%',
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
    left: 150,
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

LoginScreen.propTypes = {
  getuser: PropTypes.func.isRequired,
  user: PropTypes.object
}
const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { getuser })(LoginScreen);



// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 
// import AwesomeAlert from 'react-native-awesome-alerts';
 
// export default class App extends React.Component {
 
//   constructor(props) {
//     super(props);
//     this.state = { showAlert: false };
//   };
 
//   showAlert = () => {
//     this.setState({
//       showAlert: true
//     });
//   };
 
//   hideAlert = () => {
//     this.setState({
//       showAlert: false
//     });
//   };
 
//   render() {
//     const {showAlert} = this.state;
 
//     return (
//       <View style={styles.container}>
 
//         <Text>I'm AwesomeAlert</Text>
//         <TouchableOpacity onPress={() => {
//           this.showAlert();
//         }}>
//           <View style={styles.button}>
//             <Text style={styles.text}>Try me!</Text>
//           </View>
//         </TouchableOpacity>
 
//         <AwesomeAlert
//           show={showAlert}
//           showProgress={false}
//           title="AwesomeAlert"
//           message="I have a message for you!"
//           closeOnTouchOutside={true}
//           closeOnHardwareBackPress={false}
//           showCancelButton={true}
//           showConfirmButton={true}
//           cancelText="No, cancel"
//           confirmText="Yes, delete it"
//           confirmButtonColor="#DD6B55"
//           onCancelPressed={() => {
//             this.hideAlert();
//           }}
//           onConfirmPressed={() => {
//             this.hideAlert();
//           }}
//         />
//       </View>
//     );
//   };
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   button: {
//     margin: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 7,
//     borderRadius: 5,
//     backgroundColor: "#AEDEF4",
//   },
//   text: {
//     color: '#fff',
//     fontSize: 15
//   }
// });