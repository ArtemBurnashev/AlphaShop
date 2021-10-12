import {Route, Switch} from 'react-router-dom';
import {Container } from "@mui/material";
import {useEffect} from 'react';
import Preloader from "./Preloader";
import CategorySelect from './Category';
import GoodsList from "./GoodsList";
import CustomizedBadges from './Cart';
import Alert from './Alert';
import Basket from "../Basket/Basket";
import Product from '../Product/Product'
import {HomePage} from '../Home/homePage';
import {Contacts} from '../Contacts';
import {NotFound} from '../NotFound';
import { useContext } from "react";
import { ShopContext } from "../../context/context";
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SingUp';


const Shop = ()=>{

    const {
        loading,
        order,
        getAlert,
        setGoods,
        orderProduct,

        } = useContext(ShopContext);
    
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            data && setGoods(data);
        })
        .catch(error=>console.error(error));
    }, []);
 
    useEffect(()=>{        
       sessionStorage.setItem('order', JSON.stringify(order));
       sessionStorage.setItem('product', JSON.stringify(orderProduct));
            
    }, [order,  orderProduct]);

  

    return(
       
           <main className="content">
                <CustomizedBadges quantity={order.length}></CustomizedBadges>
                {getAlert && <Alert/>}
                  <Container style={{maxWidth:'1010px'}}>
                    <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path="/">
                            {loading ? <Preloader/> : 
                            <>
                                <CategorySelect/>
                                <GoodsList/>
                            </> }
                    </Route>
                    <Route path="/cart" component={Basket}/>
                    <Route path="/product" component={Product}/>
                    <Route path='/contacts' component = {Contacts}/>
                    <Route path='/sign-in' component ={SignIn}/>
                    <Route path='/sign-up' component ={SignUp}/>
                    <Route component = {NotFound}/>
                    </Switch>
                  </Container>
           
           </main>
        
   
    );
}

export default Shop;