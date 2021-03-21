import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ThemeProvider } from "styled-components"

import GlobalStyle from './globalStyles'
import  { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home'
import Projects from './pages/ProjectsPage/Projects'
import ScrollToTop from './components/ScrollToTop'
import { themes } from './themes'




function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar theme={theme} setTheme={setTheme}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
