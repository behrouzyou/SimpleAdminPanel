import { createContext, useState } from "react";

export const AppContext=createContext({

})
const AppContextProvider=({children})=>{
    const [dark, setDark] = useState(false)
    const setTheme=()=>{
        const theme=window.matchMedia("(prefers-color-scheme: dark)")
        if(theme.matches)setDark(true)
        else setDark(false)
    }
    return(
        <AppContext.Provider value={{dark,setDark,setTheme}}>
                 {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;
