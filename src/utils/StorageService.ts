import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductProps } from "../Types";
import { addCartItem, setCartItems } from "../redux/CartSlice";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

export default class StorageService {
    private dispath:AppDispatch= useDispatch();
    private storage_key: string;
    constructor(storageKey: string) {
        this.storage_key = storageKey;
    }
    async saveItems(productlist: ProductProps[]): Promise<void> {
        try {
            const jsonValue = JSON.stringify(productlist);
            await AsyncStorage.setItem(this.storage_key, jsonValue);
            console.log('list saved')
        }
        catch (e) {
            console.log('list error', e)
        }
    }
    async getItems(): Promise<ProductProps[] | []> {
        try {
            const items = await AsyncStorage.getItem(this.storage_key)
            return items != null ? JSON.parse(items) : [];
        }
        catch (error) {
            console.log('list get error', error);
            return [];
        }

    }
    

    async addItem(product:ProductProps,showToast:void):Promise<void>
    {
        try{
            const getItems= await this.getItems();
            if(getItems.length!=0)
            {
                const filterItem= getItems.filter((item) => item._id === product._id)
                if(filterItem.length==0)
                {
                    const newItem=[...getItems,product]
                    await this.saveItems(newItem)
                    this.dispath(setCartItems(newItem))
                }
                else
                {
                    console.log('already in cart')
                    
                }
            }
            else
            {
                await this.saveItems([product])
                this.dispath(setCartItems([product]))
            }
           
        }
        catch(error)
        {
            console.log('add Item error',error)
        }
    }
} 