import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import { Bars4Icon } from 'react-native-heroicons/outline'
import { logo } from '../assets'
import Entypo from 'react-native-vector-icons/Entypo'; 
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


const { height } = Dimensions.get('window')
const Header = () => {
    const navigation:any=useNavigation()
    const count= useSelector((state:RootState)=> state.cart.cartCount); 
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>
                    navigation.openDrawer()
                }>
                <Entypo name="menu" size={30} color={colors.textBlack} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image source={logo}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                <View style={styles.cartStyle}>
                <Entypo name="shopping-cart" size={30} color={colors.textBlack} />
                 <View style={styles.itemNumber}>
                 <Text style={{color:colors.defaultWhite}}>{count}</Text>
                 </View>
                </View>    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Header
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 50,
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:10,
        justifyContent:'space-between',
        borderBlockColor:'gray',
        borderBottomWidth:1
    },
    cartStyle:{
      flexDirection:'column'
    },
    itemNumber:{
      borderRadius:100,
      height:20,
      width:20,
      alignItems:'center',
      left:20,
      bottom:15,
      position:'absolute',
      backgroundColor:colors.textBlack
    },
    top: {
        height: height / 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    introImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        marginTop: -10
    },
    bottom: {
        flex: 1,
        padding: 30,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    },
    subTitle: {
        color: colors.defaultWhite,
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        backgroundColor: colors.defaultWhite,
        width: '100%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: colors.textBlack,
        fontSize: 14,
        fontWeight: '600'
    }


})