import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from '../screens/Intro'
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import ProductDetails from '../screens/ProductDetails'

const RootStack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <RootStack.Navigator initialRouteName='Intro'>
            <RootStack.Screen name='Intro' component={Intro} options={{ headerShown: false }} />
            <RootStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <RootStack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
            <RootStack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }} />


        </RootStack.Navigator>
        
    )
}

export default StackNavigation

const styles = StyleSheet.create({})