import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home'
import Team from './pages/TeamPage/Team'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/team' component={Team} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
