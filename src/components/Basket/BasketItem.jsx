import GoodsDescr from "../GoodsDescr";
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from "react";
import {ShopContext} from '../../context/context';
const BasketItem = (props)=>{
    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext);
    const {item} = props;
    return(
        <li className="basket-content">
             
             <Button style={{
        minWidth:'auto',
        padding:'0',
        position:'absolute',
        right:'7px',
        top:'7px',
        color:'#e40303',
    }}
    onClick = {()=>removeFromBasket(item.id)}>
    <DeleteForeverIcon/>
    </Button>
         <GoodsDescr {...item} />
         <div className="basket-buttons">
        <Button variant="outlined" size='small' style={{minWidth:'50px'}} onClick={()=>decQuantity(item.id)}>-</Button>
               <span style = {{padding:'15px'}}>{item.quantity}</span>
         <Button variant="outlined" size='small'  style={{minWidth:'50px'}} onClick={()=>incQuantity(item.id)}>+</Button>      

        </div> 

        </li>

    );

}
export default BasketItem;