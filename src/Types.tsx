import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList={
    Home:undefined,
    Intro:undefined,
    Cart:undefined,
    ProductDetails:undefined
}; 
export type NavigationProps= NativeStackNavigationProp<RootStackParamList>

export interface ProductProps{
    _id: number,
     brand: string,
    category: string, 
    description:string,
    image: string,
    isNew: string,
    previousPrice:number,
    price: number,
    quantity: number, 
    title:string
}

export interface Item{
    item:ProductProps
}