
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';

const RegisterUser = ({navigation}) => {
  let [Name, setName] = useState('');
  let [Email, setEmail] = useState('');
  let [Password, setPassword] = useState('');

  const Register=async()=>{

    if (Name=='' || Email=='' || Password=='') {
      Alert.alert('All fields are required!');
      return;
    }
    else{
      try{
        await fetch('https://api-omel12.vercel.app/users',
        {
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name:Name,
            email:Email,
            password:Password
          })
        })
        Alert.alert(
          'Success',
          'You are Registered Successfully',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('HomeScreen'),
            },
          ],
          {cancelable: false},
        );

      }
      catch(e){
console.log(e);
      }
    }}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Enter Name"
                onChangeText={(text) => setName(text)}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Enter email"
                onChangeText={(text) => setEmail(text)}
                maxLength={10}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Enter password"
                onChangeText={(text) => setPassword(text)}
                maxLength={225}
                secureTextEntry={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <TouchableOpacity
              onPress={()=>Register()} 
              ><Text   style={{alignItems:'center',
    backgroundColor: '#008080',
    color: '#ffffff',
    borderRadius:12,
    padding: 10,
    marginTop: 16,
    marginLeft: 100,
    marginRight: 140,}}>Register</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
       
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          copylight@2022
        </Text>
      </View>
    </SafeAreaView>
  );
};
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

export default RegisterUser;
