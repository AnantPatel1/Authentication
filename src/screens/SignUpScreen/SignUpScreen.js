import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'
import SocialSignInButtons from '../../component/SocialSignInButtons';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
const SignUpScreen = () => {
  const [UserName , setUserName] = useState("");
  const[email,setEmail]=useState('');
  const [Passward , setPassward] = useState("");
  const[PasswardRepeat , setPasswardRepeat]= useState('');

  const {height} = useWindowDimensions();
  const onRegisterPress= () =>{
    console.warn("User is Registered");
  }


  const onSignInPress =() => {
    console.warn ("Create account");
  }


  const onPrivacyPolicy =() =>{
    console.warn("Accept Privacy Policy");
  }
   
  const onTermofUse =() =>{
    console.warn("Accept Terms of Privacy Policy");
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.root}>

    <Text style={styles.title}> Create an account..</Text>
 <CustomInput 
 placeholder="UserName" 
 value={UserName} 
 setValue={setUserName}
 />
 <CustomInput 
 placeholder="Email"
 value={email}
 setValue={setEmail}
  />

 <CustomInput 
 placeholder=" Passward"
  value={Passward} 
 setValue={setPassward} 
 secureTextEntry={true}
 />

 <CustomInput 
 placeholder="Repeat Passward"
  value={PasswardRepeat} 
 setValue={setPasswardRepeat} 
 secureTextEntry={true}
 />

 <CustomButton 
 text="Register"
  onPress={onRegisterPress} 
  />

<Text style={styles.text}>By registering, you confirm that you accept our{" "}
<Text style={styles.link} onPress={onTermofUse}>Terms of Use </Text>and{" "} 
<Text style={styles.link} onPress={onPrivacyPolicy} >Privacy Policy </Text> </Text>

<SocialSignInButtons />

  <CustomButton 
 text="Have an Account, SignIn  Here!" 
 onPress={onSignInPress} 
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

export default SignUpScreen;