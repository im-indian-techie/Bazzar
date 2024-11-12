import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Intro from './src/screens/Intro'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Toast from 'react-native-toast-message';

const RootContent =()=>{
  return(
    <Provider store={store}>
    <NavigationContainer>
      <DrawerNavigation/>
      <Toast />
    </NavigationContainer>
    </Provider>
  )
}
const App = () => {
  return (
    
      <RootContent/>
    
  )
}

export default App

const styles = StyleSheet.create({})