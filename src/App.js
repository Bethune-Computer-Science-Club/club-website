import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { AuthProvider } from './contexts/AuthContext'

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
import Announcements from './pages/AnnouncementsPage/Announcements'

// import SignUp from './pages/SignupPage/SignUp' ONLY USED FOR DEVELOPMENT PURPOSES. DO NOT RELEASE A SIGNUP PAGE TO THE PRODUCTION VERSION OF THE SITE BECAUSE WE DON'T WANT PEOPLE TO CREATE MULTIPLE ACCOUNTS TO ACCESS THE ADMIN PAGES
import Login from './pages/LoginPage/Login'
import Admin from './pages/AdminPages/AdminPage/Admin'
import AnnouncementsAmn from './pages/AdminPages/AnnouncementsAdminPage/AnnouncementsAdmin'
import ProjectsAmn from './pages/AdminPages/ProjectsAdminPage/ProjectsAdmin'
import ExecsAmn from './pages/AdminPages/ExecsAdminPage/ExecsAdmin'

import PrivateRoute from './PrivateRoute'


function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar theme={theme} setTheme={setTheme}/>
        <AuthProvider>
        <Switch>
          <Route path='/club-website' exact component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/projects' component={Projects} />
          <Route path='/team' component={Team} />
          <Route path='/join_us' component={JoinUs}/>
          <Route path='/announcements'component={Announcements} />

          <Route path='/robotics' component={Robotics}/>
          <Route path='/apps' component={Apps}/>
          <Route path='/websites' component={Websites}/>
          <Route path='/games' component={Games}/>
          <Route path='/AI' component={AI}/>
          <Route path='/other' component={Other}/>

          {/* <Route path='/signup' exact component={SignUp}/>  ONLY USE FOR DEVELOPMENT PURPOSES*/}
          <Route path='/login' exact component={Login}/>
          <PrivateRoute path='/admin' exact component={Admin}/>
          <PrivateRoute path='/admin/announcements' component={AnnouncementsAmn}/>
          <PrivateRoute path='/admin/projects' component={ProjectsAmn}/>
          <PrivateRoute path='/admin/execs' component={ExecsAmn}/>
        </Switch>
        </AuthProvider>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
