
import React , {useState}from 'react';

import * as themes from './src/global/Themes';
import {ThemeProvider} from 'styled-components/native'

import Home from './src/Screens/Home'

export default function App() {
  const [theme, setTheme] = useState(themes.dark)

  function changeTheme(){
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }
  
  return ( 
    <ThemeProvider theme={theme}>
      <Home changeTheme={() => {changeTheme()}}/> 
    </ThemeProvider>
  );
}
