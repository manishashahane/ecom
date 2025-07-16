import { createContext, useState } from "react";

export const ThemeContext = createContext;

function ThemeProvider(props){
    const [theme,setTheme] = useState('light');
    return(
        <ThemeProvider value={{theme,setTheme}}>
            {props.children}
        </ThemeProvider>
    );
}
export default ThemeProvider;