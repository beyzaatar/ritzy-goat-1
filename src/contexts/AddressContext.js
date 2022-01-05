import React,{ useState, createContext, useContext, useEffect } from 'react'
const AddressContext = createContext();

const defaultAddress=JSON.parse(localStorage.getItem("adress")) || [];
 
const AddressProvider = ({ children }) => {
    const [addressItems, setAddressItems] = useState(defaultAddress);

    useEffect(() => {
        localStorage.setItem("address", JSON.stringify(addressItems));
    }, [addressItems]);

    const addToAddress = (data, findAddressItem) => {
        if(!findAddressItem){
          return  setAddressItems((addressItems) => [data, ...addressItems]);
        }
        

        const filtered = addressItems.filter((AddressItem) => AddressItem.data.id !== findAddressItem.data.id);
        setAddressItems(filtered);
    };

    const removeFromAddress= (addressItem_productId) => {
        const filtered =addressItems.filter((addressItem) => addressItem.data.id !== addressItem_productId);
        setAddressItems(filtered);
    }


    const values = {
        addressItems,
        setAddressItems,
        addToAddress,
        removeFromAddress,
    };


    return (
        <AddressContext.Provider value={values}>{children}</AddressContext.Provider>
    );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
