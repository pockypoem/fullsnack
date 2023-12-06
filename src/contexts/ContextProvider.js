import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false, // close or open
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined); // cause we dunno what the screen size is

    const handleClick = (clicked) => {
        // change all the initialState to true.
        setIsClicked({ ...initialState, [clicked] : true});
    } 

    return (
        <StateContext.Provider 
            value={{ 
                activeMenu, 
                setActiveMenu, 
                isClicked, 
                setIsClicked, 
                handleClick,
                screenSize,
                setScreenSize 
            }}>

            {children}
            {/* that means that whatever you wrap your context with whatever is inside of it will be displayed */}
        
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);