import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FlatList, StyleSheet, Text, View, Switch,Alert,
  Modal,TouchableHighlight } from 'react-native';
  import ReactNativeSettingsPage, { 
    SectionRow, 
    NavigateRow,
    CheckRow,SwitchRow,SliderRow
  } from 'react-native-settings-page';
  import { TouchableOpacity, CheckBox, LayoutAnimation, Platform, UIManager,SafeAreaView, Button} from "react-native";
  import Icon from "react-native-vector-icons/MaterialIcons";
  import {connect} from 'react-redux';
  import {getalarms, deletealarm,addalarm,editalarm} from '../../actions/useraction';
  import PropTypes from 'prop-types';
  import BackgroundTimer from 'react-native-background-timer';
  var t = []
 
class TimeScreen extends React.Component{
   state = {
    isDatePickerVisible:false ,
    isedit:false,
    listKeys:[],
    item:{},
    f:"y"
   }
  
 componentDidMount(){
  this.setState({f: "ll"});
  this.setState({f: "ll"});

    this.props.getalarms(this.props.route.params.user.user.machineID._id);
    setTimeout(()=>{
      this.setState({listKeys: this.props.user.alarms});
      global.t = this.props.user.alarms;
    }, 600);
    
    
  }
  onedit = (time) => {
    console.log('edited',time)
    this.setState({isedit:Platform.OS === 'ios'});
    var tempdate = new Date(time); 
    var current = new Date();
    var day = tempdate.getUTCDate(); 
    var month = tempdate.getUTCMonth()+1;
    var year = tempdate.getUTCFullYear();
    var hour = tempdate.getUTCHours()+5;
    var min = tempdate.getUTCMinutes();
    console.log(day.length)
    var d = day
    var m = month
    if(day<=9){
     d = '0'+day
    }
    if(month<=9){
      m = '0'+month
    }
    var t = year+'-'+m+'-'+d+'T'+hour+':'+min+':00.000Z';
    tempdate.setUTCHours(hour)
   
    tempdate.setUTCMonth(month)
    console.log(this.state.listKeys);
    console.log(this.state.item);
    var newArray = [];
    this.state.listKeys.forEach(element => {
      if(element._id==this.state.item._id){
        element = {_id: this.state.item._id, date : t, status: this.state.item.status};
        
      }
      newArray.push(element);
    });
   
    console.log(newArray);
    console.log(this.state.listKeys);
    
    this.setState({listKeys:newArray});
    global.t = this.state.listKeys;
    var newalarm = {date :tempdate, status: this.state.item.status}
    newalarm._id = this.state.item._id;
    console.log(newalarm);
    this.props.editalarm(this.props.route.params.user.user.machineID._id,newalarm);
    this.hideEditPicker();
    //console.log(this.props.route.params.user.user.machineID._id,id)
    //this.props.editalarm(this.props.route.params.user.user.machineID._id,item);
 }
  ondelete = (id) => {
    
    console.log(this.props.route.params.user.user.machineID._id,id);
    this.props.deletealarm(this.props.route.params.user.user.machineID._id,id);
    var a = this.state.listKeys.filter(item => item._id !== id)
    this.setState({listKeys: a});
    global.t = a;
    alert("Alarm Deleted");
 }
  showDatePicker = () => {
    this.setState({isDatePickerVisible:true});

    //setDatePickerVisibility(Platform.OS === 'android' ? true : false);
  }
  showEditPicker = (item) => {
    this.setState({isedit:true});
    this.setState({item:item});

    //setDatePickerVisibility(Platform.OS === 'android' ? true : false);
  }
  setSwitchValue = (val, ind,item) => {
         
    const tempData = [...this.state.listKeys];
    tempData[ind].status = val;
    this.setState({listKeys: tempData});
    
    
    var newalarm = {_id: item._id,date :tempData[ind].date, status: tempData[ind].status}
    console.log(newalarm);
    
    this.props.editalarm(this.props.route.params.user.user.machineID._id,newalarm);
      }
  hideDatePicker = () => {
    this.setState({isDatePickerVisible:false});
  };
  hideEditPicker = () => {
    this.setState({isedit:false});
  };
 
  handleConfirm = (time) => {
    //setDatePickerVisibility(Platform.OS === 'ios'); // first state update hides datetimepicker
    this.setState({isDatePickerVisible:Platform.OS === 'ios'});
    var tempdate = new Date(time); 
    var current = new Date();
    var day = tempdate.getUTCDate(); 
    var month = tempdate.getUTCMonth()+1;
    var year = tempdate.getUTCFullYear();
    var hour = tempdate.getUTCHours()+5;
    var min = tempdate.getUTCMinutes();
    console.log(day.length)
    var d = day
    var m = month
    if(day<=9){
     d = '0'+day
    }
    if(month<=9){
      m = '0'+month
    }
    var t = year+'-'+m+'-'+d+'T'+hour+':'+min+':00.000Z';
    tempdate.setUTCHours(hour)
   
    tempdate.setUTCMonth(month)
    console.log("current date time: ", current);
    console.log("new alarm time:    ",t);
    var newArray = [...this.state.listKeys , {date : t, status: false}];
    this.state.listKeys.push({date : t, status: false});
    this.setState({listKeys:newArray});
    global.t = newArray;
    var newalarm = {date :tempdate, status: false}
    this.props.addalarm(this.props.route.params.user.user.machineID._id,newalarm);
    this.hideDatePicker();
    alert("Alarm Added");
  };
  listItem = ({item, index}) => (
    <View style={styles.border}> 
    <View  style={styles.row}  >
        
        <Text style={[styles.title ]}>{item.date}</Text>
       
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        marginLeft={0}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => this.setSwitchValue(value, index,item)}
        value={item.status}
        
        />   

      <TouchableOpacity  style={styles.row} onPress={()=>this.showEditPicker(item)} >
        <Icon name={'create'} size={23}  marginLeft={0} marginRight={0}/>
        </TouchableOpacity> 
        <TouchableOpacity  style={styles.row} onPress={()=>this.ondelete(item._id)} >
        <Icon name={'delete'} size={23} />
        </TouchableOpacity>          
    </View>


</View>   
  );
  render(){
  return (
    <SafeAreaView style={{flex: 1}}>  
       <TouchableOpacity style={styles.row}  onPress={this.showDatePicker} >
                        <Icon name={'add'} size={25} />
                            <Text style={[styles.title ]}>Create Alarm</Text>
                            <Icon name={'keyboard-arrow-right'} size={25} />
                        </TouchableOpacity> 
     
      <DateTimePickerModal
        isVisible={this.state.isDatePickerVisible}
        mode="datetime"
        
        date={new Date()}
        onConfirm={this.handleConfirm}
        onCancel={this.hideDatePicker}
        

      />
      
      <DateTimePickerModal
        isVisible={this.state.isedit}
        mode="datetime"
        
        date={new Date()}
        onConfirm={this.onedit}
        onCancel={this.hideEditPicker}
        
        
      />
       <FlatList
        data={this.state.listKeys}
        renderItem={this.listItem}
        keyExtractor={(item, index) => item._id}
      />
    </SafeAreaView>
  );}
};
 
const styles = StyleSheet.create({
  title:{
    fontSize: 15,
    
    color: "black"
},
row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    height:56,
    paddingLeft:25,
    paddingRight:18,
    alignItems:'center',
    backgroundColor: "white",
},

parentHr:{
    height:2,
    color: "#731065",
    width:'100%'
},
child:{
    backgroundColor:"white",
    padding:16,
},
border:{
    
    borderTopColor:"#731065",
    borderTopWidth:1
},
bottom:{
    borderTopColor:"#731065",
    borderTopWidth:1,
    borderBottomColor:"#731065",
    borderBottomWidth:1.5
},
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
TimeScreen.propTypes = {
  getalarms: PropTypes.func.isRequired,
   deletealarm: PropTypes.func,
   addalarm: PropTypes.func,
   editalarm: PropTypes.func,
   alarm: PropTypes.object,
}


const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(mapStateToProps, {getalarms, deletealarm,addalarm,editalarm})(TimeScreen);
//export default InterestsList;