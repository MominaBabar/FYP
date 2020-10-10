import { connect } from 'react-redux';
import { additem } from '../actions/itemaction';
import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

class Additemmodal extends Component{
    
  state = {
        modal: false,
        name: '',
        
    };
    
    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
       e.preventDefault();
        const newItem = {
        email: this.state.name,
        password: this.state.name
      }
      this.props.additem(newItem);
      this.toggle();
    }
    render() {
        return (
          
          <View style={styles.centeredView}>
            <Text >Hello World!</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.toggle;
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          this.toggle;
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
            // <div>
            //     <Button
            //       color="dark"
            //       style={{ marginBottom: '2rem' }}
            //       onClick={this.toggle}
            //     >
            //       Add Item
            //     </Button>
            //   <Modal isOpen={this.state.modal} toggle={this.toggle}>
            //     <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
            //     <ModalBody>
            //       <Form onSubmit={this.onSubmit}>
            //         <FormGroup>
            //           <Label for="item">Item</Label>
            //           <Input
            //             type="text"
            //             name="name"
            //             id="item"
            //             placeholder="Add shopping item"
            //             onChange={this.onChange}
            //           />
            //           <Button color="dark" style={{ marginTop: '2rem' }} block>
            //             Add Item
            //           </Button>
            //         </FormGroup>
            //       </Form>
            //     </ModalBody>
            //   </Modal>
            // </div>
          );
    }
}
const styles = StyleSheet.create({
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
});

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { additem })(Additemmodal);