import React from 'react';
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null);

const DarkModeStore = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    const valueData = {
        isDarkMode,
        toggleDarkMode
    }

    return (
        <DarkModeContext.Provider value={valueData}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeStore