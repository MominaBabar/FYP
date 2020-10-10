// import React from 'react';
// import {Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import CameraRoll from "@react-native-community/cameraroll";
// import {connect} from 'react-redux';
// import {addmedia} from '../../actions/useraction';
// import PropTypes from 'prop-types';



// class VideoScreen  extends React.Component {
      
//     state={
//         granted:false,
//         videodata:"",
//         isrec:false
//       }
//       takeVideo = async () => {
//         console.log("video.") 
//         this.setState({isrec: true})  
       
//         if (this.camera) {
//             try {
//                 const options = {
//                     base64: true,
//                     quality: 0.5,
//                     videoBitrate: 8000000,
//                     maxDuration: 30
//                 };
//                 const promise = this.camera.recordAsync(options);
//                 if (promise) {
//                     this.setState({ recording: true });
//                     const data = await promise;
                    
//                     this.setState({ recording: false });
                   
//                     console.log(data.uri)   
//                     this.setState({videodata :data.uri})
//                     console.log("Video Made.") 
//                     CameraRoll.save( data.uri ).then(() =>{ 
                        

              
//                         console.log('Video Saved.',data.uri);
//                         var n = data.uri.lastIndexOf("Camera/")+7;
//                         var r = data.uri.substring(n);
//                         var j = {filename: r}
//                         console.log(j)
//                         this.props.addmedia(this.props.route.params.user.user._id,j);
                          
//                         })
//                         .catch(err => console.log(err)); 
//                 }
                
                
                
//             } catch (error) {
//                 console.log(error);
//             }
            
//         }
//     }

// //stop the recording by below method
//     stoprec =  () => {
//         this.setState({isrec: false})  
        
        
//          this.camera.stopRecording();
        
//         console.log("stop"); 
        
//     }
//       render(){
//       return (
//         <View style={styles.container}>
          
//           <RNCamera
//                         ref={ref => {
//                             this.camera = ref;
//                         }}
//                         style={styles.preview}
//                         type={RNCamera.Constants.Type.back}
//                         flashMode={RNCamera.Constants.FlashMode.on}
//                         androidCameraPermissionOptions={{
//                             title: 'Permission to use camera',
//                             message: 'We need your permission to use your camera',
//                             buttonPositive: 'Ok',
//                             buttonNegative: 'Cancel',
//                         }}
//                         androidRecordAudioPermissionOptions={{
//                             title: 'Permission to use audio recording',
//                             message: 'We need your permission to use your audio',
//                             buttonPositive: 'Ok',
//                             buttonNegative: 'Cancel',
//                         }}
//                         onGoogleVisionBarcodesDetected={({ barcodes }) => {
//                             console.log(barcodes);
//                         }}
//                         captureAudio={true}
//                     /> 
//         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//         <TouchableOpacity onPress={() =>
//            this.props.navigation.navigate('Gallery')
//       }
//           style={styles.capture}>
//             <Image style={styles.image} source={require('./../../assets/gallery.png')} />
//           </TouchableOpacity>
//           <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//                 <TouchableOpacity onPress={this.state.isrec ? this.stoprec.bind(this): this.takeVideo.bind(this)} style={styles.capture}>
//                 <Image style={styles.image} source={this.state.isrec ? require('./../../assets/stop.png') : require('./../../assets/cinema.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() =>
//            this.props.navigation.navigate('Camera')
//       } style={styles.capture}>
//                 <Image style={styles.image} source={require('./../../assets/ar-camera.png')} />

//                 </TouchableOpacity>
//             </View>
          
//         </View>
//       </View>
//     );
//         }
 
// }
// VideoScreen.propTypes = {
//   addmedia: PropTypes.func.isRequired,
   
// }

// const mapStateToProps = (state) => ({
//   user: state.user
// });
// export default connect(mapStateToProps, {addmedia})(VideoScreen);
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
//   },
//   overlay: {
//     position: 'absolute',
//     padding: 16,
//     right: 0,
//     left: 0,
//     alignItems: 'center',
//   },
//   cameraContainer: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   bottomOverlay: {
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   captureButton: {
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 40,
//   },
// });
