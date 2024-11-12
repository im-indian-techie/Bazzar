import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'

const PriceFormat = ({amount}:{amount:number}) => {
    const formattedAmt= new Number(amount).toLocaleString(
        'en-US',{
            style:'currency',
            currency:'USD',
            minimumFractionDigits:2
        }
    )
  return (
    <View>
      <Text style={{color:colors.designColor}}>{formattedAmt}</Text>
    </View>
  )
}

export default PriceFormat

const styles = StyleSheet.create({})