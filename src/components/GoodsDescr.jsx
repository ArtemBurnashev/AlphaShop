
const GoodsDescr = (props)=>{
   
    const {
        id, 
        title,
        price,
        category,
        image,
    } = props;

  
  
    let description = props.description.replace(/[/,]/g, ', ');
    const  styles = {
        image:{
            display:'block',
            maxWidth:'250px',
            width:'100%',
            height:'auto',
            maxHeight:'250px',
            objectFit:'contain',
             borderRadius:'3px',
             marginBottom:'10px',
        },
        basketItem:{
                maxWidth:'500px',
                padding:'10px',
                width:'100%',
                height:'auto',
        },
        price:{
            fontSize:'19px',
            fontWeight:500,
            marginBottom:'15px',
            lineHeight:'140%',

        }, 
        category:{
            backgroundColor:'#e5e5e5',
            padding:'5px 20px 5px 10px',
            display:'inline-block',
            borderRadius:'5px',
            background: 'linear-gradient(to right, #d3cce3, #e9e4f0)',
            marginBottom:'20px',
        },
        description:{
            marginBottom:'15px',
            width:'100%',
            height:'auto',
            fontSize:'17px',
        }

    }

return(
    <div className="contentBasket-wrapper"  id = {id}>

         <img src={image} style={styles.image} alt={title}/>
           <div className="basket-item" style={styles.basketItem}>
               <h3 style={{margin:'0 0 20px 0'}}>{title}</h3>

               <div className="price-item" style={styles.price}>Price: <span style={{color:'#0ab30a', fontSize:'19px'}}>{price} $</span></div>

               <div className = 'category-item' style={styles.category}>{category}</div>

               <div className ="description-item" style={styles.description}>{description}</div>

           </div>

    </div>
 
    
);

}

export default GoodsDescr;