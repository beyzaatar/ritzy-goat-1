import React,{ useState, createContext, useContext, useEffect } from 'react'
const BasketContext = createContext();

const defaultBasket=JSON.parse(localStorage.getItem("basket")) || [];
 
const BasketProvider = ({ children }) => {
    const [items, setItems] = useState(defaultBasket);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(items));
    }, [items]);

    const addToBasket = (data, findBasketItem) => {
        if(!findBasketItem){
          return  setItems((items) => [data, ...items]);
        }
        

        const filtered = items.filter((item) => item.data.id !== findBasketItem.data.id);
        setItems(filtered);
    };

    const removeFromBasket= (item_productId) => {
        const filtered =items.filter((item) => item.data.id !== item_productId);
        setItems(filtered);
    }

    const emptyBasket=()=>{
        setItems([])
    }


    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
        emptyBasket
    };


    return (
        <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
    );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
