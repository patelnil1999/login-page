
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Feed from './Feed'
import Notifications from './Notifications'
import Profile from './Profile'
import Signup from './Signup'

const Tab =createBottomTabNavigator();


const Propaties = ({ navigation }) =>{
    return(
       
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Feed}  options={{
            tabBarLabel:'Home',
            tabBarIcon:({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
               ),

        }} />
        <Tab.Screen name="Notification" component={Notifications} options={{
            tabBarLabel:'Notification',
            tabBarIcon:({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
               ),

        }}  />
       
         <Tab.Screen name="cart" component={Profile} options={{
            tabBarLabel:'cart',
            tabBarIcon:({ color }) => (
                <AntDesign name="shoppingcart" color={color} size={26} />
               ),

        }}  />

        <Tab.Screen name='Add' component={Signup} options={{
            tabBarLabel:'Add',
            tabBarIcon:({ color }) => (
                <AntDesign name="pluscircle" color={color} size={26} />
               ),
        }} />


      
    </Tab.Navigator>
  );
    
}


export default Propaties;