import './App.css'

import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ThemeProvider } from "styled-components"

import GlobalStyle from './globalStyles'
import  { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home'
import Events from './pages/EventsPage/Events'
import Team from './pages/TeamPage/Team'
import JoinUs from './pages/JoinUsPage/JoinUs'

import Projects from './pages/ProjectsPage/Projects'
// import Placeholder from './pages/PlaceholderPage/Placeholder'
import ScrollToTop from './components/ScrollToTop'
import { themes } from './themes'

import Robotics from './pages/RoboticsPage/Robotics'
import Apps from './pages/AppsPage/Apps'
import Websites from './pages/WebsitesPage/Websites'
import Games from './pages/GamesPage/Games'
import AI from './pages/AIPage/AI'
import Other from './pages/OtherPage/Other'

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
          <Route path='/events' component={Events} />
          <Route path='/projects' component={Projects} />
          <Route path='/team' component={Team} />
          <Route path='/join_us' component={JoinUs}/>

          <Route path='/robotics' component={Robotics}/>
          <Route path='/apps' component={Apps}/>
          <Route path='/websites' component={Websites}/>
          <Route path='/games' component={Games}/>
          <Route path='/AI' component={AI}/>
          <Route path='/other' component={Other}/>

        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
