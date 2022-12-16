import React, { useState, useEffect } from 'react';



import { SafeAreaView, Text, View, StyleSheet, Alert, TouchableOpacity, TextInput, FlatList } from 'react-native';



import { NavigationContainer, useIsFocused } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function ViewAll() {
const navigation=useNavigation();

  const getData=async()=>{
    try{
    const response= await fetch('https://api-omel12.vercel.app/users')
    const data=await response.json();
    setItems(data);
    }catch(e){
      console.log(e)
    }
  }
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);
  const isFocused = useIsFocused();

useEffect(() =>{getData()});

  const listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000'
        }}
      />
    );
  };

  const emptyMSG = (status) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

        <Text style={{ fontSize: 25, textAlign: 'center' }}>
          No Record Inserted Database is Empty...
          </Text>

      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
          <FlatList
            data={items}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View key={item._id} style={{ padding: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('UpdateUser',{id:item._id,name:item.name,email:item.email,password:item.password})} >
                  <Text style={styles.itemsStyle}> Name: {item.name} </Text>
                  <Text style={styles.itemsStyle}> Email: {item.email} </Text>
                  <Text style={styles.itemsStyle}> Password: {item.password} </Text>
                </TouchableOpacity>
              </View>
            }
          />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  touchableOpacity: {
    backgroundColor: '#0091EA',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    padding: 8
  },

  textInputStyle: {
    height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 15,
  },

  itemsStyle: {
    fontSize: 22,
    color: '#000'
  }
});