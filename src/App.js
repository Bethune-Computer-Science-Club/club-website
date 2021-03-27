import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ThemeProvider } from "styled-components"

import GlobalStyle from './globalStyles'
import  { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home'
import Events from './pages/EventsPage/Events'

import Projects from './pages/ProjectsPage/Projects'
import Placeholder from './pages/PlaceholderPage/Placeholder'
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
          <Route path='/club-website' exact component={Home} />
          <Route path='/events' exact component={Events} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/team' exact component={Placeholder} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
