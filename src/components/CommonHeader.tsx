import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../constants'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, ProductProps } from '../Types';
import { logo } from '../assets';
import StorageService from '../utils/StorageService';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const{height}=Dimensions.get('window')
const CommonHeader = ({title}:{title:string}) => {
    const navigation:NavigationProps=useNavigation()
    const storageService=new StorageService('product')
    const [cartItemsCount,setCartItemsCount] = useState<number>(0)
    const count= useSelector((state:RootState)=> state.cart.cartCount);
  const getItems = async():Promise<void>=>{
    const data=await storageService.getItems();
    console.log('data',data)
    setCartItemsCount(data?data.length:0)
    
  } 
  useEffect(()=>{
      getItems();
  },[])
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{flexDirection:'row'}}>
        <Ionicons name="arrow-back" size={30} color={colors.textBlack} />
        <Text style={styles.title}>{title}</Text>
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

export default CommonHeader

const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     paddingHorizontal:15,
     paddingVertical:10,
     borderBottomWidth:1,
     borderBlockColor:'gray'

    },
    top:{
      height:height/2,
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      padding:30
    },
    introImg:{
      width:'100%',
      height:'100%',
      objectFit:'contain',
      marginTop:-10
    },
    bottom:{
      flex:1,
      padding:30,
      alignItems:'center'
    },
    title:{
      color:colors.textBlack,
      fontSize:20,
      fontWeight:'700',
      textAlign:'center'
    },
    subTitle:{
      color:colors.defaultWhite,
      textAlign:'center',
      marginTop:20
    },
    button:{
      backgroundColor:colors.defaultWhite,
      width:'100%',
      height:50,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20
    },
    buttonText:{
      color:colors.textBlack,
      fontSize:14,
      fontWeight:'600'
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
  
  
  })