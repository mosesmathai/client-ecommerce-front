import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({children}) {
  const [colorTheme, setColorTheme] = useState('theme-black');
  
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');

    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }

  return (
    <ThemeContext.Provider value={{colorTheme,setColorTheme, handleClick}}>{children}</ThemeContext.Provider>
  );
}  