import React from 'react'
import {
    View,
    Button,
    Text,
    StyleSheet
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Propaties from './Propaties'
import UserPage from './UserPage'



const Drawer = createDrawerNavigator();



 
function FirstPage()
{
    return(
           
        
            <Drawer.Navigator initialRouteName="Home"    >
                <Drawer.Screen name="Home" component={Propaties}   options={{
                    drawerLabel:'Home',
                    
                    drawerIcon:({color})=>(
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                        
                    )

                    
                    
                }}  />
                <Drawer.Screen name="Settings" component={UserPage}   
                 options={{
                    drawerLabel:'Settings',
                    
                    drawerIcon:({color})=>(
                        <MaterialCommunityIcons name='cog' color={color} size={26} />
                        
                    )}} />
               
              
            </Drawer.Navigator>
          
      
    );
}




export default FirstPage;