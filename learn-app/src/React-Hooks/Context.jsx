import React, { createContext,useState } from 'react';

const theme = {
  light: { color: "#241e1e", background: "#ffffff" },
  dark: { color: "#ffffff", background: "#241e1e" },
  red: { color: "#f76060" },
  yellow: { color: "#ffd900" },
  green: { color: "#17fc03" },
  blue: { color: "#6880f7" },
  pink: { color: "#ff00ae" },
  skyblue: { color: "#00ff95" },
};


export const AppContext = createContext()


function AppProvider(props) {
  
  const [appTheme, setAppTheme] = useState(theme.light)
  // console.log(appTheme)
const  setDark = () => setAppTheme(theme.dark);
  const setLight = () => setAppTheme(theme.light);
  const setColor = (color)=>setAppTheme({...appTheme,...theme[color]})
  
  return (
    <AppContext.Provider value={{ appTheme, setDark, setLight, setColor }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default  AppProvider