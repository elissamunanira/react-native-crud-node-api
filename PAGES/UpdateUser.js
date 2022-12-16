

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';

const UpdateUser = ({route,navigation}) => {
let id=route.params.id;
const [Name, setName] = useState(route.params.name);
  const [Email, setEmail] = useState(route.params.email);
  const [Password, setPassword] = useState(route.params.password);
const Update = async(id) => {
    if (!Name) {
      alert('Please fill name');
      return;
    }
    if (!Email) {
      alert('Please fill Contact Number');
      return;
    }
    if (!Password) {
      alert('Please fill Address');
      return;
    }
    else{
      try{
await fetch('https://api-omel12.vercel.app/users/'+id,{
  method:'PATCH',
  headers:{
    'Content-Type':'application/json',
  },
  body: JSON.stringify({
    name:Name,
    email:Email,
    password:Password
  })
}
)
navigation.navigate('ViewAll');
    }
    catch(e){
      console.log(e)
    }
  }

  }

const Delete=async(id)=>{
          try{
    await fetch('https://api-omel12.vercel.app/users/'+id,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
      }
    }
    )
    navigation.navigate('ViewAll');
        }
        catch(e){
          console.log(e)
        }
      }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white',justifyContent: 'center',alignItems:'center'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>

              <TextInput
                placeholder="Enter Name"
                defaultValue={Name}
                style={{  justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1}}
                onChangeText={(text) => setName(text)}
              />
              <TextInput
                placeholder="Enter Email"
                defaultValue={Email}
                style={{  justifyContent:'center',textAlignVertical: 'top', padding: 10,
        alignItems:'center',
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1}}
                onChangeText={(text) => setEmail(text)}
                style={{  justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1}}
              />
              <TextInput
               placeholder="Enter Password"
                defaultValue={Password}
                style={{  justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1}}
                onChangeText={(text) => setPassword(text)}
                style={{ 
       flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1}}
              />
              <TouchableOpacity
              style={{ alignItems: 'center',
    backgroundColor: '#008080',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,}}
              onPress={()=>Update(id)}
              >
                <Text>Update Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={{ alignItems: 'center',
    backgroundColor: '#F02A26',
    color: '#ffffff',
    borderRadius:12,
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,}}
              onPress={()=>Delete(id)}
              >
                <Text>DELETE</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        
        <Text style={{fontSize: 16, textAlign: 'center', color: 'gray'}}>
         copyright@2022
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;