import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../constants'
const{height}=Dimensions.get('window')
const Loader = ({title}:{title:String}) => {
  return (
    <View style={styles.Container}>
        <View>
        <Text style={{textAlign:'center',marginBottom:10,
            color:colors.defaultWhite,fontSize:16}}>{title}</Text>
        <ActivityIndicator size={'large'} color={colors.designColor}/>    
        </View>
      
    </View>
  )
}

export default Loader

const styles=StyleSheet.create({
    Container:{
      height:height-50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#00000080'
    }
})