import { Children, createContext, useState } from "react";

export const stateContext = createContext(null);


 const StateProvider = ({children})=>{
    const [basket, setBasket] = useState([])
    const [count, setCount] = useState(1)

const show = (id, tittle, description, rating, price, img, count)=>{
    
    //Pushing  items into the basket and removing duplications
    setBasket([...basket, {id: id, img: img, tittle: tittle, rating: rating, description: description, price: price, count: count}]
        .filter((el, index)=> index === [...basket, {id: id, img: img, tittle: tittle, rating: rating, description: description, price: price, count: count}]
        .findIndex(item => el.id === item.id && el.description === item.description)))

    /*let aa = basket.filter((el, index)=> {
        return index === basket.findIndex(item => el.id === item.id && el.description === item.description)
    } )*/
}

const DeletItem = (id)=>{
    setBasket(basket.filter(item => id !== item.id ))
}

const IncreaseCount = (id)=>{
    const obj = basket.map(item =>{
        if(id === item.id){
            item.count = item.count + 1
        } 
        return item
    })
    console.log(obj)
    setBasket(obj)
}

const ReduceCount = (id)=>{
    const obj = basket.map(item =>{
        if(id === item.id){
            item.count = item.count - 1
        } 
        return item
    })
    console.log(obj)
    setBasket(obj)
}


 
return(
        <stateContext.Provider value={{show, basket, DeletItem, count, IncreaseCount, ReduceCount}} >
            {children}
        </stateContext.Provider>
    )
}

export default StateProvider;