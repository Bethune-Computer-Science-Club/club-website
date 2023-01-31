import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react'
import { ThemeProvider } from "styled-components"
import GlobalStyle from './globalStyles'
import { Navbar, Footer } from './components'
import { themes } from './themes'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Archives from './pages/Archives/Archives';

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeProvider theme={themes[theme]}>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
    {/* fixes routing issues with github pages. Got it from here: https://medium.com/swlh/using-react-router-on-github-pages-2702afdd5d0c*/}
      <GlobalStyle />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/archives' element={<Archives />}></Route>
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);