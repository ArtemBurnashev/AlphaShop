import BasketItem from "./BasketItem";
import Button from '@mui/material/Button';
import { useContext } from "react";
import {ShopContext} from '../../context/context';
const Basket = (props)=>{
 const {clearCart, order} = useContext(ShopContext);



    const totalId = order.reduce((sum, elem)=>{
       return (sum + elem.price*elem.quantity); 
    }, 0);
    
   
   const styles = {
      basketList:{
         listStyleType:'none',
         margin:'0',
         padding:'0',
      },
      buy:{
            display:'flex',
            justifyContent:'space-between',
            flexWrap:'wrap',
            alignItems:'center',
      },
      total:{
        fontSize:'20px',
      fontWeight:'600',
      padding:'5px',
      }
   }
  
   return(
            <div className="content-wrapper"> 
               <ul className="basket-list" style={styles.basketList}>
               
                  {order.length ?
                  <>{
                     (order.map(item=>{
                         return (
                            <BasketItem  key={item.id} item = {item}/>
                         )
                         
                      })
                     )}
                     <li  style={styles.buy}>
                        <div style={{padding:'10px'}}>
                           <Button variant="contained" style={{marginRight:'15px'}}>Buy Now</Button>
                           <Button variant="contained" size="small" color="error" onClick={clearCart}>Clear Card</Button>
                        </div>
                        <div style={styles.total}>Total Price:  {totalId.toFixed(2)} $</div>
                     </li>
                     </>:
                   (<li style={{
                      fontWeight:'500',
                      fontSize:'19px',
                      textAlign:'center',
                      }}>Your shopping cart is empty.</li>) 
                  }

               
               </ul>
            </div>
   )
}

export default Basket;