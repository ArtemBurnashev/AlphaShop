export function reducer(state, {type, payload}){
    switch (type){
       case 'SET_GOODS':
           return{
               ...state,
               goods:payload || [] ,
               loading:false,
           }
       case 'ADD_TO_BASKET':{
           
        const itemIndex = state.order.findIndex(
            (orderItem) => orderItem.id === payload.id
        );

        let newOrder = null;
        if(itemIndex < 0){
            const newItem ={
                ...payload, 
                quantity:1,
            }
            newOrder = [...state.order, newItem];
           
        } else {
             newOrder = state.order.map((orderItem, index)=>{
                        if(index===itemIndex){
                           return {
                               ...orderItem,
                           }
                         
                        } else {
                                return orderItem;
                        }
                })

        }
        return {
            ...state,
            order: newOrder,
            getAlert:true,
        }
       }
        case 'CLOSE_ALERT':
            return{
                ...state,
                getAlert:false,
            }   
        case 'CLEAR_CART':{
            return {
                ...state,
                order:[],
            }
        }
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                order:state.order.filter(elem=>elem.id !== payload.id),
            }
        case 'INCRIMENT_QUANTITY': return {
            ...state,
            order: state.order.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity + 1;
                    return {
                        ...el,
                        quantity: newQuantity <31 ? newQuantity : 30,
                    };
                } else {
                    return el;
                }
            }),
        };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity > 0 ? newQuantity : 1,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'HANDLE_PRODUCT':
            return{
                ...state,
                orderProduct:payload,
            }
        case 'CATEGORY_VALUE':
            return {
                ...state,
                category:payload,
            }
      
        default:
            return state;
    }

}