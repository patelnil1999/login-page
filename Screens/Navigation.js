import * as React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from  '@react-navigation/native'
import {createStackNavigator} from  '@react-navigation/stack';
  
import Login from './Login'
import Splash from  './Splash'
import ViewAllUser from './ViewAllUser'
import FirstPage from './FirstPage'
import Propaties from './Propaties'
import Profile from './Profile'
import UserPage from './UserPage'


const Stack = createStackNavigator();

 

export default class App extends React.Component
{
    render(){
      return(
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
              
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                  headerShown:false
                }}
              />
               <Stack.Screen
                name="FirstPage"
                component={FirstPage}
                options={{
                  headerShown:false
                }}
              />
               <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown:false
                }}
              />
             
               <Stack.Screen
                name="ViewAllUser"
                component={ViewAllUser}
                options={{
                  headerShown:false
                }}
              />
              <Stack.Screen
                name="Propaties"
                component={Propaties}
                options={{
                  headerShown:false
                  
                  
                }}
              />
              <Stack.Screen
                name="Profile "
                component={Profile }
                options={{
                  headerShown:false
                  
                  
                }}
              />
              <Stack.Screen
                name="UserPage "
                component={UserPage }
                options={{
                  headerShown:false
                }}
              />
             
             
             
             
            
           
             
             
               </Stack.Navigator>
          </NavigationContainer>
      )
    }
  }

