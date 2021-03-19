import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home'
import Projects from './pages/ProjectsPage/Projects'
import ScrollToTop from './components/Categories/ScrollToTop'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
