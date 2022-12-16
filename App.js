import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Alert, TouchableOpacity, TextInput, FlatList } from 'react-native';

import RegisterUser from './PAGES/RegisterUser';
import ViewAll from './PAGES/ViewAllUser';
import HomeScreen from './PAGES/HomeScreen';
import UpdateUser from './PAGES/UpdateUser';
import ViewUser  from './PAGES/ViewUser';
import DeleteUser  from './PAGES/DeleteUser';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Registeruser" component={RegisterUser} />
        <Stack.Screen name="ViewAll" component={ViewAll} />
        <Stack.Screen name="ViewUser" component={ViewUser} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
        <Stack.Screen name="DeleteUser" component={DeleteUser} />
      </Stack.Navigator>
    </NavigationContainer>
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
    color: '#2EC0F5',
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