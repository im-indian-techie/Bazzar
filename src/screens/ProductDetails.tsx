import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../components/CommonHeader'
import { Item, NavigationProps,ProductProps } from '../Types'
import { colors } from '../constants'
import Loader from '../components/Loader'
import PriceFormat from '../components/PriceFormat'
import StorageService from '../utils/StorageService'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { addCartItem } from '../redux/CartSlice'
import Utils from '../utils/Utils'

const ProductDetails = ({route}:any) => {
  const storageService = new StorageService('product')
  const id= route.params.id
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const [productData,setProductData] = useState<any>(null)
  const dispath:AppDispatch= useDispatch();
  const cartItems= useSelector((state:RootState)=>state.cart.cartItems)
  const utils= new Utils()
  const getData = async () => {
    try {
      setIsLoading(true)
      const url=`https://jsonserver.reactbd.com/amazonpro/${id}`
      const response = await fetch(url);
      console.log(url)
      const json = await response.json();
      setProductData(json)
      console.log(productData)
      setIsLoading(false)
      //console.log(json);
    }
    catch (error) {
      console.log('Error', error)
    }
  }
  const saveProduct= async(product:ProductProps)=>{
    try{
      const item= cartItems.filter((item) => item._id === product._id)
      if(item.length==0)
      {
        await storageService.addItem(product);
        utils.showToast('Added to cart','success');
      }
      else
      {
        utils.showToast('Already in the cart','error');
        console.log('Item is already in the cart')
      }
      
      
    }
    catch(error)
    {

    }
  }
  useEffect(() => {
    getData();
  }, [id])
  const saveAmt = productData && productData.previousPrice && productData.price
    ? productData.previousPrice - productData.price
    : 0;
  return (
    <View>
      <CommonHeader title='Product Details'/>
     <View>
      <View>
      {loading ? (
       <Loader title='Product is loading'
       />
      ) : productData ? (
        <View style={{padding:12}}>
                    {productData.image && (
            <Image
              source={{ uri: productData.image }}
              style={{ width: 200, height: 200 ,alignSelf:'center'}}
            />
          )}
          <Text style={{color:colors.textBlack,fontSize:20,marginTop:12,fontWeight:700}}>{productData.title}</Text>
          <Text style={{color:colors.textBlack,marginTop:12}}>{productData.description}</Text>
          <View style={{flexDirection:'row',marginTop:20}}>
            <Text style={{color:'grey',}}>Brand :</Text>
            <Text style={{color:colors.textBlack,}}>{productData.brand}</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Text style={{color:'grey'}}>Category :</Text>
            <Text style={{color:colors.textBlack}}>{productData.category}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:colors.designColor,marginRight:5}}>You will save</Text>
          <PriceFormat amount={saveAmt}></PriceFormat>
          <Text style={{color:colors.designColor,marginLeft:5}}>in this order</Text>
          </View>
          <View style={{marginTop:20,padding:12,backgroundColor:colors.textBlack,flexDirection:'row',justifyContent:'space-between'}}>
             <View>
              <Text style={{color:colors.defaultWhite}}>{productData.price}</Text>
              <Text style={{color:colors.defaultWhite,textDecorationLine:'line-through'}}>{productData.previousPrice}</Text>
             </View>
             <TouchableOpacity onPress={
              ()=>{

                saveProduct(productData);
              }
             }
              style={{alignItems:'center',justifyContent:'center',borderRadius:20,height:50,width:150,backgroundColor:colors.designColor}}>
             <Text style={{color:colors.textBlack}}>Add to cart</Text>
             </TouchableOpacity>
          </View>
          
        </View>
      ) : (
        <Text>No product data available</Text>
      )}
      </View>
     </View>
    </View>
  )
}

export default ProductDetails