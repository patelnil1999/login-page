import React, { useEffect, useState } from 'react';



import { Button, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet, LayoutAnimation, Platform } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { Thumbnail, List, ListItem, Separator } from 'native-base';




const Notification =()=>{
   return(
<View>

    <ScrollView>
      <View>
        <Text  style={styles.txt} >  Pizza & burgar Menu List </Text>
      </View>
    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={styles.txt1} > Menu of Pizza </Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>Margherita       2.05$ </Text>
        </ListItem>
        <ListItem>
          <Text>italian           2.05$ </Text>
        </ListItem>
        <ListItem last>
          <Text>corn masala       2.05$ </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={styles.txt1} >Menu of burgar</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>perypery                        2.32$   </Text>
        </ListItem>
        <ListItem>
          <Text>vegitable                      2.32$   </Text>
        </ListItem>
        <ListItem last>
          <Text>marshmellow                      2.32$  </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text style={styles.txt1} >Menu of burgar</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>perypery                     2.32$      </Text>
        </ListItem>
        <ListItem>
          <Text>vegitable                    2.32$        </Text>
        </ListItem>
        <ListItem last>
          <Text>marshmellow                 2.32$        </Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text  style={styles.txt1} >Menu of Pizza</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>Margherita</Text>
        </ListItem>
        <ListItem>
          <Text>italian</Text>
        </ListItem>
        <ListItem last>
          <Text>corn masala</Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    </ScrollView>
  </View>


   )
}


const styles = StyleSheet.create({
  txt:{
    color:"#880E4F",
    textAlign:'center',
    fontSize:27
    
    
  },
  txt1:{
    color:'#311B92',
    fontSize:19
    
  }
})



export default Notification