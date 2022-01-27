// App.tsx
import React from 'react'
import Navbar from './navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/routes/main';
import Projects from './components/routes/projects';
import Cv from './components/routes/cv';

const App: React.FC = () => {
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