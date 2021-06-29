import React, {useEffect,} from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, TextInput, ImageBackground ,Image} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {


        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'Login'
                       

                    },
                ]
            })
        }, 2000)

        useEffect(() => {
            db.transaction(function (txn) {
              txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user' ",
                [],
                function (tx, res) {
                  console.log('item:', res.rows.length);
                  if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                    txn.executeSql(
                      'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',

                      

                      []
                    )
                    
                  }else{
                    (res.rows.length == 0)
                      txn.executeSql('DROP TABLE IF EXISTS table_admin', []);
                      txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS table_admin(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_num INI(20), user_add INT(10), user_total INI(255))',
  
                        
  
                        []
                      )

                    }
                  }

                  
                
              );
            });
          }, []);


         
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                   

                <Image source={require('../Screens/S.png')} style={{width:378,height:650}} />

              
                  
                   



                </View>


            </View>
        )
}
    
        
        
    






  
       




const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    },
   

})


export default HomeScreen;



