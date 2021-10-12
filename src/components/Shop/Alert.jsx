import {useEffect } from "react";
import { useContext } from "react";
import {ShopContext} from '../../context/context';

const Alert = ()=>{
const {closeAlert = Function.prototype} = useContext(ShopContext);
 useEffect(()=>{

     const timerAlert = setTimeout(closeAlert, 3000);

     return ()=>{
        clearTimeout(timerAlert);
     } 
 })
 return (
    <div className="toast">
        Product added to cart
    </div>
 );
}

export default Alert;