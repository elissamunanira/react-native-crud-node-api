

import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation=useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#BEE2F5'}}>
        <View style={{flex: 1}}>
          <Mytext text="STUDENT MANAGEMENT SYSTEM" />
          <Mybutton
            title="Register student"
            customClick={() => navigation.navigate('Registeruser')}
          />
        
          <Mybutton
            title="List all student"
            customClick={() => navigation.navigate('ViewAll')}
          />
         
        </View>
      
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
         coplight@2022
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
