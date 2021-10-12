import * as React from 'react';
import {Link} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import {ShopContext} from '../../context/context';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const styles = {
  button:{
    backgroundColor:'#e0e0e0',
    color:'#4c4c4c',
    width:'47px',
    height:'47px',
  }
}

export default function CustomizedBadges(props) {
  const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);
  const quantity = order.length;
  return (
    <Link to="/cart" style={{ position:'fixed',
    zIndex: 30,}} className="cart">
 <IconButton aria-label="cart"
    style={styles.button} 
    onClick = {handleBasketShow}>
      <StyledBadge badgeContent={quantity} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </Link>
   
  );
}


