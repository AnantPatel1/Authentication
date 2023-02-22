import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from "./src/screens/SigninScreen"
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmMailScreen from './src/screens/ConfirmMailScreen';
import ForgotPasswardScreen from './src/screens/ForgotPasswardScreen';
import NewPasswardScreen from './src/screens/NewPasswardScreen';
export default function App() {
  return (
    <View style={styles.container}>
  
      <SigninScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    margin: 30 ,
    padding: 10,
  },
  text: {
  
  },
});
