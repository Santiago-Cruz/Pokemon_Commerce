import React, { createContext, useContext, useState } from 'react';

// Create a Bag Context
const BagContext = createContext();

// Create a Bag Provider component
export function BagProvider({ children }) {
    const [bag, setBag] = useState([]);
    console.log(bag)
    return (
        <BagContext.Provider value={{ bag, setBag }}>
            {children}
        </BagContext.Provider>
    );
}

// Custom hook to access the Bag Context
export function useBag() {
    return useContext(BagContext);
}
