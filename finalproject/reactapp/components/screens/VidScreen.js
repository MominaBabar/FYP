
  import {Text, View,StyleSheet,ScrollView,TouchableOpacity,Button,Image,FlatList,SafeAreaView,Share} from 'react-native';
  import React from 'react';
  import CameraRoll from "@react-native-community/cameraroll";
  
  const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: "url",
    subject: 'Subject'
  };
  
  export default class VidScreen extends React.Component{
    shareimage = (item) =>{
      console.log(item);
      Share.share({
        title: 'Title',
        message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: this.props.route.params.item.node.image.uri,
        subject: 'Subject'
      });
      
    }
    render(){
    return (
      <SafeAreaView>
        {/* <Video source={{uri: this.props.route.params.item.node.image.uri}}  
        ref={(ref) => {
          this.player = ref
        }}                                      
        onBuffer={this.onBuffer}                
        onError={this.videoError}               
        style={styles.backgroundVideo} /> */}
       <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
       <TouchableOpacity  onPress={()=>this.shareimage(this.props.route.params.item)} style={styles.capture}>
              <Image style={styles.image} source={require('./../../assets/share.png')} />
       </TouchableOpacity>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Gallery', {user: this.props.route.params.user})}
            style={styles.capture}>
              <Image style={styles.image} source={require('./../../assets/delete.png')} />
       </TouchableOpacity>
       
       </View>
           
       
  
     </SafeAreaView>
    );
    }
  } 
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      img:{
        
         height: 560,
         width: 400,
         marginLeft:5,
         marginRight:5,
         marginTop:5,
         
      },
      image:{
        height:50,
        width:40
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
    });
    
  