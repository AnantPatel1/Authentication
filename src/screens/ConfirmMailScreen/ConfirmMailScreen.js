import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import SocialSignInButtons from '../../component/SocialSignInButtons';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const ConfirmMailScreen = () => {

  const[code , setcode]= useState('');

  const {height} = useWindowDimensions();
  const onConfirmPress= () =>{
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
    <Text style={styles.title}>Confirm Your Email..</Text>
 <CustomInput 
 placeholder="Enter Your Confirmation Code" 
 value={code} 
 setValue={setcode}
 />
 <CustomButton
text="Confirm" 
 onPress={onConfirmPress}
 />

 <CustomButton 
 text="Resend Code"
 onPress={onResendPress}
 type="SECONDARY"
  />

  <CustomButton 
 text="Back to  SignIn  Here!" 
 onPress={onSigninPress} 
 type="TERTIARY"
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

export default ConfirmMailScreen;