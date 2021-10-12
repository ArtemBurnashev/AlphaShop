 import * as React from 'react';
 import {Link} from 'react-router-dom';
 import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import CardMedia from '@mui/material/CardMedia';
 import Button from '@mui/material/Button';
 import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { ShopContext } from '../../context/context';

const GoodsItem = (props)=>{
    const {
        id, 
        title,
        price,
        description,
        category,
        rating,
        image,

    } = props;

    const {addToBasket, handleProduct} = useContext(ShopContext);

    const styles = {
        card:{
            position:'relative',
            padding: '10px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            maxWidth:'310px',
        },
        price:{
            fontSize:'15px',
            fontWeight:500,
            margin:0,
        }
    }
   


    return (
    <Card  className = 'item' sx={{ maxWidth: 345}} style={styles.card} id = {id}>
       <Link to='/product' style={{cursor:'pointer', color:'#000', textDecoration:'none'}}  onClick={()=>{handleProduct({
            id, 
            title,
            price,
            description,
            category,
            rating,
            image,}
        )}}>
       <CardMedia
        component="img"
        height="200px"
        image= {image}
        alt="goods"
        style={{objectFit: 'contain', marginBottom:'5px'}}/>
        <CardContent style={{padding:'10px'}}>
        <Typography gutterBottom component="div"  style={styles.price}>
           {title}
        </Typography>
        </CardContent>
       </Link> 
       <div> 
        <Stack spacing={1} style={{padding: '7px 7px 10px'}}>
      <Rating name="half-rating" defaultValue={rating.rate} readOnly size="small"/>
        </Stack>
        <CardActions style={{display:'flex',
        justifyContent:'space-between',}}>
        <Button variant="contained" size="medium" 
        style= {{
                padding:'6px 17px',
        }}
        onClick={()=>{addToBasket({
            id, 
            title,
            price,
            description,
            category,
            rating,
            image,}
        )}}
      ><AddShoppingCartIcon /></Button>
        <span style={{
            fontWeight:600,
            fontSize:'19px',
        }}>{price} $</span>
        </CardActions>
        </div>
    </Card>
    );
        
}

export default GoodsItem;