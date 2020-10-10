// import React from 'react';
// import {Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import CameraRoll from "@react-native-community/cameraroll";
// import {connect} from 'react-redux';
// import {addmedia} from '../../actions/useraction';
// import PropTypes from 'prop-types';




// class CameraScreen extends React.Component {
//   state={
//     granted:false,
//     photo:{}
//   }
//   componentDidMount(){
//     console.log(this.props.user)
//     //this.props.getalarms(this.props.route.params.user.user.machineID._id);
    
//   }
      
      
//       render(){
//       return (
//         <View style={styles.container}>
          
//           <RNCamera
//           ref={(ref) => {
//             camera = ref;
//           }}
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.off}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
          
//           androidStoragePermissionOptions={{
//           title: 'Permission to use Storage',
//           message: 'We need your permission to use your audio',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',}}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
          
//         />
//         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//         <TouchableOpacity  onPress={() => this.props.navigation.navigate('Gallery', {user: this.props.route.params.user})}
//           style={styles.capture}>
//             <Image style={styles.image} source={require('../../photo.png')} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={async ()=>{

//             if (camera) {
//               const options = { quality: 0.5, base64: true };
//               const data = await camera.takePictureAsync(options);
              
//               console.log(data.uri);
//               CameraRoll.save( data.uri ).then(() =>{ 
                 

              
//                 console.log('Picture Saved.');
//                 console.log(data.uri)
//                 var n = data.uri.lastIndexOf("Camera/")+7;
//                 var r = data.uri.substring(n);
//                 var j = {filename: r}
//                 console.log(j)
//                 this.props.addmedia(this.props.route.params.user.user._id,j);
                  
//                 })
//                 .catch(err => console.log(err));
              
              
//               ;
                         
//             }
//           }} 
//           style={styles.capture}>
//             <Image style={styles.image} source={require('../../assets/ar-camera.png')} />
//           </TouchableOpacity>
//           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Video', {user: this.props.route.params.user})}
//           style={styles.capture}>
//             <Image style={styles.image} source={require('../../assets/cinema.png')} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//       }
 
// }
// CameraScreen.propTypes = {
//   addmedia: PropTypes.func.isRequired,
   
// }

// const mapStateToProps = (state) => ({
//   user: state.user
// });
// export default connect(mapStateToProps, {addmedia})(CameraScreen);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
//   image:{
//     height:40,
//     width:40
//   }
// });

