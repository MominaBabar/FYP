import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Image, Animated} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import {connect} from 'react-redux';
import {addmedia,moverobot} from '../../actions/useraction';
import PropTypes from 'prop-types';
import {captureScreen} from "react-native-view-shot";
import { WebView } from 'react-native-webview';



class MapScreen extends React.Component {
  state={
    granted:false,
    photo:{}
  }
  componentDidMount(){
    //console.log(this.props.user)
    //this.props.getalarms(this.props.route.params.user.user.machineID._id);
    
  }
  onmove(dir){
    this.setState({move:dir});
    setTimeout(()=>{
        console.log(this.props.route.params.user.user.machineID._id,this.state.move)
       // this.props.moverobot(this.props.route.params.user.user.machineID._id,this.state.move);
      }, 100);
    
  }
      
      
      render(){
      return (
        <View style={styles.container}>
       
     
        <WebView
  source={{
    uri: 'http://192.168.18.63:5014'
  }}
  
/> 
<View style={{marginTop:140}}>
<View style={styles.btnstyle}>
     <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={() => this.onmove('w')}>
        <Image source={require('./../../assets/up-arrow.png')}  style={styles.img}/>
    </TouchableOpacity>
    </View>
  
    <View style={{}}>
     <TouchableOpacity style={{top: -10, flexDirection: 'row', left: 100}} activeOpacity={0.5} onPress={() => this.onmove('a')}>
        <Image source={require('./../../assets/back.png')}  style={styles.img}/>
    </TouchableOpacity>
    </View>
    <View style={{}}>
     <TouchableOpacity style={{top: -70, flexDirection: 'row', left: 180}} activeOpacity={0.5} onPress={() => this.onmove('d')}>
        <Image source={require('./../../st.png')}  style={{width:60,
  height: 60,
  }}/>
    </TouchableOpacity>
        </View>
        <View style={{}}>
     <TouchableOpacity style={{top: -134, flexDirection: 'row', left: 252}} activeOpacity={0.5} onPress={() => this.onmove('w')}>
        <Image source={require('./../../assets/right-arrow.png')}  style={styles.playimg}/>
    </TouchableOpacity>
    </View>
    <View style={{}}>
     <TouchableOpacity style={{top:-117,left:175}} activeOpacity={0.5} onPress={() => this.onmove('f')}>
        <Image source={require('./../../assets/down-arrow.png')}  style={styles.img}/>
    </TouchableOpacity>
    </View>
        </View>
      </View>

        
    );
      }
 
}
MapScreen.propTypes = {
  addmedia: PropTypes.func.isRequired,
  moverobot: PropTypes.func.isRequired,
   
}

const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(mapStateToProps, {addmedia,moverobot})(MapScreen);
const styles = StyleSheet.create({
  btnstyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
btn:{
   top: -65,
   height: 60,
   width: 60
},
img: {
  width:60,
  height: 60,
  
},
playimg: {
  width:70,
  height: 70
},
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black',
      padding: 8,
      overflow:'hidden',
      height:90
    },
    percentText: {
      fontSize: 30,
      top: 200,
       flex:1,
      alignItems: 'center',
     
    },
    progressBar: {
      height: 30,
      width: '90%',
      flexDirection:'row',
      backgroundColor: '#FFFFFF',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5,
      top: 175,
      left: 20,
    },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    width:40
  }
});



{/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
 <View  style={{top:150, left:25, fontSize: 30}}>
     <Text style={{fontSize: 17, color: '#FFFFFF'}}>Cleaning....</Text>
     </View>
     <View style={styles.progressBar}>
       <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#87cefa", width: "50%"}}/>
       </View>
     <View style={styles.percentText}>
       <Text style={{fontSize: 17,  color: '#FFFFFF'}}>50%</Text>
     </View>
     <View style={styles.btnstyle}>
     <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={() => this.onmove('w')}>
        <Image source={require('./../../assets/up-arrow.png')}  style={styles.img}/>
    </TouchableOpacity>
    </View>
    <View style={styles.btnstyle}>
     <TouchableOpacity style={{top: 153}} activeOpacity={0.5} onPress={() => this.onmove('f')}>
        <Image source={require('./../../assets/down-arrow.png')}  style={styles.img}/>
    </TouchableOpacity>
    </View>
    <View style={{}}>
     <TouchableOpacity style={{top: -60, flexDirection: 'row', left: 100}} activeOpacity={0.5} onPress={() => this.onmove('a')}>
        <Image source={require('./../../assets/back.png')}  style={styles.img}/>
    </TouchableOpacity>
    </View>
    <View style={{}}>
     <TouchableOpacity style={{top: -120, flexDirection: 'row', left: 249}} activeOpacity={0.5} onPress={() => this.onmove('w')}>
        <Image source={require('./../../assets/right-arrow.png')}  style={styles.playimg}/>
    </TouchableOpacity>
    </View>
    <View style={{}}>
     <TouchableOpacity style={{top: -190, flexDirection: 'row', left: 180}} activeOpacity={0.5} onPress={() => this.onmove('d')}>
        <Image source={require('./../../assets/multimedia.png')}  style={styles.img}/>
    </TouchableOpacity>
        </View>
  </View>
  </View> */}