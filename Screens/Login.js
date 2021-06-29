import React, { useState } from 'react';


import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Button,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const Login = ({ navigation }) => {
  let [userName, setUserName] = useState('nilpatel2699@gmail.com');
  let [userContact, setUserContact] = useState('patel2699nil');
  // let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact,);

    if (!userName) {
      alert('Please fill email id');
      return;
    }
    if (!userContact) {
      alert('Please fill password ');
      return;
    }
   

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact ) VALUES (?,?)',
        [userName, userContact],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('FirstPage'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{flex:1}}>
     

      <View style={styles.container}>
        
      <Image source={require('../Screens/P7.jpg')} style={styles.img} />
      <Text style={styles.tx1}> welcome  </Text>
     <Text style={styles.tx2}> Log in to your existant account  </Text>
     <View style={{flexDirection:"row"}}>
         <TextInput style={styles.input}
         placeholder="Enter email"
         value={userName}
         
         onChangeText={(userName) => setUserName(userName)}
         
         placeholderTextColor="#F6F6E7"
         keyboardType="email-address"
         selectionColor="#F6F6E7"
          />

          </View>
          <View style={{flexDirection:"row"}} >
             <TextInput style={styles.input}
             placeholder= "Enter password"
             value={userContact}
             onChangeText={(userContact) => setUserContact(userContact)}
             maxLength={10}

             placeholderTextColor="#F6F6E7"
             secureTextEntry={true}    
             keyboardType="default"
             selectionColor="#F6F6E7"
             
            


             />
         </View>
         <TouchableOpacity style={{backgroundColor:'blue' ,width:300,padding:10,alignItems:'center',top:-34 }}
          onPress={ register_user} >
            <Text style={{color:'white'}}> submit </Text>
          </TouchableOpacity>


      </View>
    </SafeAreaView>
    
  );
};


const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'

    
  },
  img:{
    width:150,
    height:150,
    top:-80

  },

  
   
    tx1: {
      fontSize: 30,
      color: 'blue',
      fontFamily: 'Foundation',
      marginVertical: 6,
     top:-70


  },
  tx2:{
    fontSize: 20,
      color: 'blue',
      fontFamily: 'Foundation',
      marginVertical: 6,
     top:-70

  },
  input:{
    flex:1,
    marginHorizontal:20,
    marginVertical:20,
    borderRadius:50,
    paddingHorizontal:30,
    backgroundColor:"#880E4F",
    color:"white",
    top:-50
  },
  txtbd:{
    right:12
  },
  tx3:{
    left:70
  }
  

  

})

export default Login;