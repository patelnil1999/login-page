import React, { useState } from 'react';

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const Profile = ({ navigation }) => {
  let [usernum, setUsernum] = useState(0);
  let [useradd, setUseradd] = useState(0);
  let [usertotal, setTotal] = useState()






  let register_user = () => {

    console.log(usernum, useradd);


    if (!usernum) {
      alert('Please fill pizaa item ');
      return;
    }
    if (!useradd) {
      alert('Please fill burgar item ');
      return;
    }




    db.transaction(function (tx) {

      setTotal(Number(usernum) * Number(170) + Number(useradd) * Number(150))


      tx.executeSql(
        'INSERT INTO table_admin (user_num, user_add,user_total) VALUES (?,?,?)',
        [usernum, useradd, usertotal],

        (tx, results) => {


          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are order Successfully ',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('ViewAllUser'),
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
    <View style={styles.container} >
      <ImageBackground source={require('../Screens/P4.jpg')} style={styles.img} >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Order Now</Text>



        </View>

        <View  >
          <TextInput style={styles.input}
            placeholder="Enter pizza item"
            placeholderTextColor="#F6F6E7"
            keyboardType='numeric'
            selectionColor="#F6F6E7"
            onChangeText={(usernum) => setUsernum(usernum)}


          />

          <TextInput style={styles.input}
            placeholder="Enter burgar item"
            placeholderTextColor="#F6F6E7"
            keyboardType='numeric'
            selectionColor="#F6F6E7"
            onChangeText={(useradd) => setUseradd(useradd)}

          />
          <Text style={styles.txt} > totalAmount$: {usertotal} </Text>
          <TouchableOpacity style={styles.butn} onPress={register_user} >
            <Text style={{ color: 'white' }}>confrom order</Text>

          </TouchableOpacity>
        </View>




      </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'

  },
  img: {
    flex: 1,
    width: 400,
    height: 700,
    resizeMode: "cover",
    top: -60


  },
  labelContainer: {

    alignItems: 'center',
    justifyContent: 'center'

  },
  label: {

    color: 'white',
    fontSize: 35,
    marginTop: 30,
    fontWeight: "bold",
    textShadowColor: "#c2185b",
    textShadowRadius: 2,
    textShadowOffset: { width: 2, height: 3 },
    top: 100
  },
  input: {


    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 50,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',



    backgroundColor: 'rgba(100, 100, 100, 0.2)',

    color: "white",
    right: 25,

    top: 120

  },
  butn: {
    alignItems: 'center',

    backgroundColor: 'rgba(100, 100, 100, 0.2)',
    padding: 10,
    width: 300,
    top: 120,
    left: 19
  },
  txt: {
    top: 110
  }


})




export default Profile;