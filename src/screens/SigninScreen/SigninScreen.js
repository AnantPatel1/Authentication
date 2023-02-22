import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Logo from "../../../assets/Logo.png"
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import SocialSignInButtons from '../../component/SocialSignInButtons';
const SigninScreen = () => {
  const [UserName , setUserName] = useState("");
  const [Passward , setPassward] = useState("");

  const {height} = useWindowDimensions();
  const onSignInPressed = () =>{
    console.warn("Sign In");
  }

  const onForgotPasswardPressed = () =>{
    console.warn("Forgot");
  }

  const onSignUpPress =() => {
    console.warn ("Create account");
  }


  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.root}>
 <Image 
 source={Logo} 
 style={[styles.logo , {height: height*0.3}]} 
 resizeMode="contain"
 />
 <CustomInput 
 placeholder="UserName" 
 value={UserName} 
 setValue={setUserName}
 />
 <CustomInput 
 placeholder="Passward"
  value={Passward} 
 setValue={setPassward} 
 secureTextEntry={true}
 />

 <CustomButton 
 text="Sign In"
  onPress={onSignInPressed} 
  />

 <CustomButton 
 text="Forgot Passward?" 
 onPress={onForgotPasswardPressed} 
 type="TERTIARY"
 />

<SocialSignInButtons />

  <CustomButton 
 text="Don't have an Account, Press here!" 
 onPress={onSignUpPress} 
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
});

export default SigninScreen;