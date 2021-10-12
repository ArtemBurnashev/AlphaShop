import GoodsItem from "./GoodsItem";
import { useContext } from 'react';
import { ShopContext } from '../../context/context';

const GoodsList = ()=>{

    const {goods = [], category = 'all products'} = useContext(ShopContext);

    if(!goods.length){
        return <h2>Nothing here</h2>
    }
    
    return (<div className="items">
        {goods.map((item)=>{

        
            if(item.category === category){
                return <GoodsItem key = {item.id} {...item}/>
            }
            if(category === 'all products'){
                return <GoodsItem key = {item.id} {...item}/>
            }

            }
            )}
    </div>);
}

export default GoodsList;