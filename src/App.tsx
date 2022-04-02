// App.tsx
import React, { useEffect } from 'react'
import Navbar from './navbar/navbar';
import Main from './components/routes/main';
import Projects from './components/routes/projects';
import Cv from './components/routes/cv';
import ReactGa from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App: React.FC = () => {

  useEffect(() => {
    ReactGa.initialize('UA-214940684-1')

    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Main}/>
        <Route exact path={"/projects"} component={Projects}/>
        <Route exact path={"/cv"} component={Cv}/>
      </Switch>
    </Router>
    
  )
}

export default App