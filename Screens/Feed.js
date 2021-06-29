
import React from 'react';
import { ScrollView, StyleSheet, View, Animated, Text, Platform, Image, Title, Header, Container, Contain, FlatList } from 'react-native';
import CardView from 'react-native-cardview'
// import { Header } from 'react-native/Libraries/NewAppScreen';


const Header_Maximum_Height = 150;
const Header_Minimum_Height = 50;
export default class Feed extends React.Component {
  constructor() {
    super();
    this.AnimatedHeaderValue = new Animated.Value(0);

  }
  render() {
    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: ['#4286F4', '#00BCD4'],
      extrapolate: 'clamp',
    });
    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [Header_Maximum_Height, Header_Minimum_Height],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.MainContainer} >
        <ScrollView
          scrollEventThrottle={20}
          contentContainerStyle={{ paddingTop: Header_Maximum_Height }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } }

          ])} >
          <Text style={styles.TextViewStyle}> Take away </Text>

          <View>
              
          <CardView style={styles.cdv}
         
          cardElevation={30}
          
          cardMaxElevation={30}
          cornerRadius={15}>
         <Image source ={require('../Screens/M1.png' )  }  style={{width:120,height:120,right:90 ,bottom:-12}}  >
          
         </Image>
       <Text style={styles.txt3} > Margherita{'\n'} Price:150{'\n'} OFF:%50 </Text>

       

        
</CardView>









          </View>

          <View>
          <CardView style={styles.cdv}
         
         cardElevation={30}
         
         cardMaxElevation={30}
         cornerRadius={15}>
         <Image source ={require('../Screens/C.png' )  }  style={{width:120,height:120,right:90 }}  >
         
        </Image>
      <Text style={styles.txt3} > burger {'\n'} Price:170{'\n'} OFF:%30 </Text> 

      

       
</CardView>

          </View>

          
          <View>
              
          <CardView style={styles.cdv}
         
          cardElevation={30}
          
          cardMaxElevation={30}
          cornerRadius={15}>
         <Image source ={require('../Screens/M1.png' )  }  style={{width:120,height:120,right:90 ,bottom:-12}}  >
          
         </Image>
       <Text style={styles.txt3} > Margherita{'\n'} Price:150{'\n'} OFF:%50 </Text>

       

        
</CardView>









          </View>

          <View>
          <CardView style={styles.cdv}
         
         cardElevation={30}
         
         cardMaxElevation={30}
         cornerRadius={15}>
         <Image source ={require('../Screens/C.png' )  }  style={{width:120,height:120,right:90 }}  >
         
        </Image>
      <Text style={styles.txt3} > burger {'\n'} Price:170{'\n'} OFF:%30 </Text> 

      

       
</CardView>

          </View>

          









        </ScrollView>
        <Animated.View
          style={[styles.Header,
          {
            height: AnimateHeaderHeight,
            backgroundColor: AnimateHeaderBackgroundColor,
          }

          ]}>
          <Image source={require('../Screens/P1.jpg')} style={{ width: 400, height: 150 }} />


        </Animated.View>
      </View>
    )


  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    backgroundColor: 'yellow'
  },

  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS == 'ios' ? 20 : 0,
  },
  HeaderInsideText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  TextViewStyle: {
    textAlign: 'center',
    color: '#29B6F6',
    fontSize: 30,
    margin: 5,
    padding: 7,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    width: 300,
    marginTop: 16
  },
  txt: {
    left: 100,
    top: -70,
    color: 'blue'


  },
  txt1: {
    left: 258,
    top: -190,
    color: 'blue'
  },
  img: {
    width: 90,
    height: 90,
    left: 160,
    top: -120
  },
  cdv:{
    alignItems: 'center',
    width:350,
    height:150,
   
    alignContent:'center',
    backgroundColor:'#B2FF59',
    margin:10

    
  },
  
  txt3:{
    top:-100,
    left:45,
    fontSize:20
  },
 

})