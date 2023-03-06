//Add-to-cart action
export const ADD=(item)=>{
    return{
        type: "ADD_TO_CART",
        payload: item,
    }
    
}

//action for Delete the cart 
export const DELETE=(id)=>{
    return{
        type:"DELETE_CART",
        payload:id,
    }
}

//action to delete cart items one by one
export const REMOVE=(itm)=>{
    return{
        type:"REMOVE_ONE",
        payload:itm
    }
}