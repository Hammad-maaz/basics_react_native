import { createContext, ReactNode, useContext, useState } from "react"

type Theme = "light" | "dark"
interface themeContextType{
    theme: Theme
    toggleTheme: () => void
}

const themeContext = createContext<themeContextType | undefined>(undefined)
export const useTheme = ()=> {
    const context = useContext(themeContext)
    if(context === undefined){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}


type ThemeProviderProps = {
    children: ReactNode
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light")
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <themeContext.Provider value={{theme, toggleTheme}}>{children}</themeContext.Provider>
    )
}