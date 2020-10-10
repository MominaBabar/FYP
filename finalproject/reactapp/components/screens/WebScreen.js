import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Text,View,Button,StyleSheet,TouchableOpacity,Image} from 'react-native';
//import { Constants } from 'expo-constants';
import {captureScreen} from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import {connect} from 'react-redux';
import {addmedia} from '../../actions/useraction';
import PropTypes from 'prop-types';
import { ROBOT } from './../../actions/types';

class WebScreen extends Component {
  onSubmit = () => {
    console.log("clicked")
    captureScreen({
      format: "jpg",
      quality: 0.8,
     
    }).then( 
      
      uri => {console.log("Image saved to", uri);
      CameraRoll.save(uri ).then((img) =>{   
        console.log("Image saved to",img);   
        console.log('Picture Saved.');
        var cropData = {
          offset: {x: 200, y: 200},
          size: {width: 300, height: 300},
          displaySize: {width: 300, height: 30},
          resizeMode: 'contain'
        };
        var n = uri.lastIndexOf("cache/")+6;
        var r = uri.substring(n);
        var j = {filename: r}
        console.log(j)
        this.props.addmedia(this.props.route.params.user.user._id,j); 
        })
        .catch(err => console.log(err)); },
      error => console.error("Oops, snapshot failed", error)
       
     
    );
  }
  render() {
    return (
      <View style={styles.container}>
       
     
              <WebView
        source={{
          uri: 'http://'+global.ip+':8000'
        }}
        
      />
       <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Gallery', {user: this.props.route.params.user})}
          style={styles.capture}>
            <Image style={styles.image} source={require('../../photo.png')} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.onSubmit}
          style={styles.capture}>
            <Image style={styles.image} source={require('../../assets/ar-camera.png')} />
          </TouchableOpacity>
        </View>
      </View>
    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
    overflow:'hidden',
    height:60
  },
  loginBtn:{
    width:"60%",
    backgroundColor:"lightblue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:30,
    marginLeft: 80
  },
  loginText:{
    color:"black",
    fontSize: 20,
    fontWeight: 'bold'
  },
 web:{
    height:60,
    marginTop:80,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  image:{
    height:40,
    width:40,
    //marginLeft:40
  },
  cont: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

});
//<WebView
//         source={{
//           uri: 'https://github.com/facebook/react-native'
//         }}
//         style={{ marginTop: 20 }}
//       />
const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(mapStateToProps, {addmedia})(WebScreen);