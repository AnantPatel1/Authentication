import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import SocialSignInButtons from '../../component/SocialSignInButtons';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const ForgotPasswardScreen = () => {

  const[Username , setUsername]= useState('');

  const {height} = useWindowDimensions();
  const onSendPress= () =>{
    console.warn("User is Registered");
  }

  const onResendPress=() =>{
    console.warn("Email has been sent");
  }
  const onSigninPress =() =>{
    console.warn("Welcome to Signin Page")
  }



  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Reset Your Passward..</Text>
 <CustomInput 
 placeholder="Enter Your User Name" 
 value={Username}
 setValue={setUsername}
 />
 <CustomButton
text="Send" 
 onPress={onSendPress}
 />


  <CustomButton 
 text="Back to  SignIn  Here!" 
 onPress={onSigninPress} 
 type="SECONDARY"
 />


    
    </View>
    </ScrollView>
  );
};
const styles =StyleSheet.create({
  root:{
    alignItems: "center",
    padding:28,
  },
  logo:{
    width:"75%",
    height:300,
    maxWidth: 300,
    maxHeight:200,
  },
  text:{
    color: "gray",
    marginVertical:10,
  },
  link:{
color: '#FDB075',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: "#051C60",
    margin:10,
  },
 
});

export default ForgotPasswardScreen;