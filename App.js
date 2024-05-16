import React from 'react';
import { View } from 'react-native';
/* import Login from './components/Login/Login'; 
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';  */
import RecoverPassword from './components/RecoverPassword/RecoverPassword'; 


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RecoverPassword />
    </View>
  );
}
