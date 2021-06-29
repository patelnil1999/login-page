
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';


const UserPage = ({ navigation }) =>{
    return(
        <View style={styles.container}>
           
            <Image source={require('../Screens/n.jpg')} style={styles.im} /> 

            <Text style={styles.tx1}> Nil patel </Text>


            <TouchableOpacity style={styles.toches}  onPress={() => navigation.navigate('Login')} > 
            <Text style={{color:'white'}}> LOG OUT </Text>
             </TouchableOpacity>
            

        </View>
    )
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    im:{
        width:150,
        height:150,
        borderRadius:80,
        top:-170,
        left:120
    },
    tx1:{
        top:-150,
        left:140,
        fontSize:23,
        color:'black'
    },
    toches:{
        alignItems:'center',
        backgroundColor:'blue',
        padding:10,
        width:300,
        marginTop:16,
        top:-150,
        left:50
      
    }


})


export default UserPage;