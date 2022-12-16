import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';

const ViewUser = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
   
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{padding: 10}}
          />
          <Mybutton title="Search User" customClick={searchUser} />
          <View style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>User Name: {userData.user_name}</Text>
            <Text>User Contact: {userData.user_contact}</Text>
            <Text>User Address: {userData.user_address}</Text>
          </View>
        </View>
       
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          www.jdclinic.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;
