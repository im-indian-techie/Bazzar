import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants'


const SideMenu = () => {
  const navigations=[
    {
      title:'Cart'
    }
  ]
  const navigation:any= useNavigation()
  return (
    <SafeAreaView>
    <View>
      <Text style={{color:colors.textBlack}}>
        Press the menu to navigate
      </Text>
    </View>
    {
      navigations.map(({title}:{title:string})=>(
       <View style={{padding:12}}>
<TouchableOpacity 
onPress={()=>navigation.navigate(title)}
style={{
        backgroundColor:colors.designColor,
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
       }}>
        <Text style={{color:colors.textBlack}}>{title}</Text>
       </TouchableOpacity>
       </View> 
       
      )
    )
    }
    </SafeAreaView>
  )
}

export default SideMenu