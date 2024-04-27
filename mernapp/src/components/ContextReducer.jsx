import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const cartdispatchContext = createContext();

const reducer = (state,action)=>{

        switch(action.type){
            case "ADD":
                return [...state,{id:action.id,name:action.name,quant:action.quant,size:action.size,price:action.price, img:action.img}]

            case "REMOVE":
                let newArr = [...state]
                newArr.splice(action.index, 1)
                return newArr; 
            case "DROP":
                let empArray = []
                return empArray   
            default:
                console.log('error in reducer')
        }

}

export const CardProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,[]);
  return (
        <cartdispatchContext.Provider value={dispatch}> 
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
        </cartdispatchContext.Provider>
  )
}


export const UseCart = ()=>useContext(CartStateContext);
export const usedispatchcart = ()=>useContext(cartdispatchContext);
 