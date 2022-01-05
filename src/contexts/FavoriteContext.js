import React,{ useState, createContext, useContext, useEffect } from 'react'

const FavoriteContext = createContext();

const defaultFavorite=JSON.parse(localStorage.getItem("favorite")) || [];

const FavoriteProvider = ({ children }) => {
    const [favoriteItems, setFavoriteItems] = useState(defaultFavorite);

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favoriteItems));
    }, [favoriteItems]);

    const addToFavorite = (data, findFavoriteItem) => {
        if(!findFavoriteItem){
          return  setFavoriteItems((favoriteItems) => [data, ...favoriteItems]);
        }
        

        const filtered = favoriteItems.filter((favoriteItem) => favoriteItem.data.id !== findFavoriteItem.data.id);
        setFavoriteItems(filtered);
    };

    const removeFromFavorite= (favoriteItem_productId) => {
        const filtered =favoriteItems.filter((favoriteItem) => favoriteItem.data.id !== favoriteItem_productId);
        setFavoriteItems(filtered);
    }


    const values = {
        favoriteItems,
        setFavoriteItems,
        addToFavorite,
        removeFromFavorite,
    };


    return (
        <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>
    );
};

const useFavorite = () => useContext(FavoriteContext);

export { FavoriteProvider, useFavorite };