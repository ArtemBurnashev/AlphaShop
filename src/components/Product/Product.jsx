import GoodsDescr from "../GoodsDescr";
import Button from '@mui/material/Button';
import { useContext } from "react";
import {ShopContext} from '../../context/context';
const Product = (props)=>{

    const {orderProduct, addToBasket} = useContext(ShopContext);
    
   
    return(
        <div className="content-wrapper">
           <GoodsDescr {...orderProduct}/>
           <Button variant="contained" className='button-cart' onClick={()=>addToBasket(orderProduct)}>Add to cart</Button>

        </div>
    );
}
export default Product;