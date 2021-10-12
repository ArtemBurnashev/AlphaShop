import { createContext, useReducer } from "react";
import {reducer} from "../reducer/reducer";

export const ShopContext = createContext();

export const ContextProvider = ({children})=>{
    const defaultOrder = JSON.parse(sessionStorage.getItem('order')) || [];
    const defaultProduct = JSON.parse(sessionStorage.getItem('product')) || {};

    const initialState = {
        goods:[],
        loading:true,
        order:defaultOrder,
        getAlert:false,
        orderProduct:defaultProduct,
        category:'all products',
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    state.addToBasket = (item)=>{

        dispatch({type:'ADD_TO_BASKET', payload:item}) ;
    }
    state.closeAlert = ()=>{
        dispatch({type:'CLOSE_ALERT', payload:''});
    }

    state.clearCart = ()=>{
        dispatch({type:'CLEAR_CART'});
       
    }
    state.removeFromBasket = (itemId)=>{
        dispatch({type:'REMOVE_FROM_BASKET', payload:{id:itemId}});

     }
    state.incQuantity = (itemId)=>{
        dispatch({type:'INCRIMENT_QUANTITY', payload:{id:itemId}});
      
      }
   
    state.decQuantity = (itemId)=>{
       
        dispatch({type:'DECREMENT_QUANTITY', payload:{id:itemId}});
    }
  
  
    state.handleProduct = (item)=>{
      dispatch({type:'HANDLE_PRODUCT', payload:item});
    }

    state.setGoods = (data)=>{
        dispatch({type:'SET_GOODS', payload:data});
    }
    state.categoryValue = (val)=>{

        dispatch({type:'CATEGORY_VALUE', payload:val}) 
      }
    
    return <ShopContext.Provider value={state} >
        {children}
    </ShopContext.Provider>
}