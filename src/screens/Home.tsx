import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../constants'
import { Item, NavigationProps } from '../Types'
import Carousel from 'react-native-reanimated-carousel'
import { bannerOne, bannerThree, bannerTwo } from '../assets'
import { useNavigation } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import IsNewBadge from '../components/IsNewBadge'
import Loader from '../components/Loader'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import StorageService from '../utils/StorageService'
import { addCartItem, setCartItems } from '../redux/CartSlice'


const { height, width } = Dimensions.get('window')
const images = [bannerOne, bannerTwo, bannerThree]
const Home = () => {
  const navigation: any = useNavigation();
  const [productArray, setProductArray] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const dispath:AppDispatch=useDispatch();
  const storageService=new StorageService('product')
  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://jsonserver.reactbd.com/amazonpro');
      const json = await response.json();
      setProductArray(json)
      setIsLoading(false)
      console.log(json);
    }
    catch (error) {
      console.log('Error', error)
    }
  }
  const getCartData=async()=>{
    const data= await storageService.getItems();
    dispath(setCartItems(data))
  }
  useEffect(() => {
    getData();
    getCartData();
  }, [])

  const RenderItem = ({ item }: Item) => {
    return (
      <TouchableOpacity style={styles.productView} onPress={() =>
        navigation.navigate('ProductDetails', { id: item._id })
      }>
        <Image style={styles.img} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.price}</Text>
        <TouchableOpacity style={styles.addCart}>
          <Fontisto  name="shopping-basket-add" size={20} color={colors.textBlack} />
        </TouchableOpacity>
        {item.isNew && <IsNewBadge/>}
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.carouselContainer}>
        <Carousel
          loop
          width={width}
          height={200}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => {
            console.log(index)
          }}
          renderItem={
            ({ index }) => (
              <Image style={styles.carouselImage} source={images[index]}>

              </Image>
            )
          }
        >

        </Carousel>
      </View>

      {
        loading ? <Loader title='Product is loading'
        /> :
          <FlatList data={productArray}
            keyExtractor={(item: any) => item?._id}
            renderItem={RenderItem}
            refreshing={refreshing}
            onRefresh={
              () => {
                getData()
              }
            }
            numColumns={2}
          />
      }

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultWhite,

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
    alignSelf:'center',
    marginTop: 10
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
   
    borderRadius: 20,
    
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
    position: 'absolute',
    bottom: 0,      // Position at the bottom of the parent
    right: 0,       // Position at the right of the parent
    padding: 10,
    borderBottomRightRadius:15,
    backgroundColor:colors.designColor,

  }


})

