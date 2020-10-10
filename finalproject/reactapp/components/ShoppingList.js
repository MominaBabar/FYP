import React, { useEffect, Component } from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

import {connect} from 'react-redux';
import {getitems, deleteitem} from '../actions/itemaction';
import PropTypes from 'prop-types';
class ShoppingList extends Component
{
 componentDidMount(){

   this.props.getitems();
 }
 ondelete = (id) => {
    this.props.deleteitem(id);
 }
 Item({ item }) {
  return (
    <View style={styles.item}>
      <Button onPress={this.ondelete.bind(this,item._id)} title=" &times;"
       color="#841584" accessibilityLabel="Add item"/>
      <Text style={styles.title}>{item.email}</Text>
    </View>
  );
}
 render()
 {

  const {items}  = this.props.item;
  return (
   
    <View>
      <Text style={styles.title}>items</Text>
      <SafeAreaView style={styles.container}>
      <FlatList
          data={items}
          renderItem={({item}) => 
          <View>
            <Button onPress={this.ondelete.bind(this,item._id)} title=" &times;"
            color="#841584" accessibilityLabel="Add item"/>
            <Text style={styles.item}>{item.email}</Text>
          </View>}
          keyExtractor={item => item._id}
        />
      
    </SafeAreaView>
    </View>

  );
  
}
}
ShoppingList.propTypes = {
  getitems: PropTypes.func.isRequired,
   deleteitem: PropTypes.func.isRequired,
   item: PropTypes.object.isRequired,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
const mapStateToProps = (state) => ({
  item: state.item
});
export default connect(mapStateToProps, {getitems, deleteitem})(ShoppingList);