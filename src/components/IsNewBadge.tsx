import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants'

const{height}=Dimensions.get('window')
const IsNewBadge = () => {
 return(
    <View style={styles.container}>
       <Text style={{color:colors.textBlack}}>New</Text>
    </View>
 )
}

export default IsNewBadge

const styles = StyleSheet.create({
    container: {
      position:'absolute',
      alignSelf:'flex-start',
      padding:5,
      borderTopLeftRadius:15,
      backgroundColor:'grey'
    },
    top: {
      height: height / 2,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30
    },
    img: {
      width: '50%',
      height: '50%',
      objectFit: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -10
    },
    bottom: {
      flex: 1,
      padding: 30,
      alignItems: 'center'
    },
    title: {
      color: colors.textBlack,
      fontSize: 20,
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
    },
    productView: {
      height: 200,
      width: Dimensions.get('window').width / 2,
      flex: 0.5,
      margin: 10,
      borderWidth: 2,
      borderColor: 'gray',
      alignItems: 'center',
      borderRadius: 20,
      justifyContent: 'center'
    },
    carouselContainer: {
      height: 200,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    addCart: {
      backgroundColor:colors.designColor,
      position: 'absolute',
      top: 170,
      left: 150,
    }
  
  
  })