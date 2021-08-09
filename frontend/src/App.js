import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import ResumeHeader from './components/common/ResumeHeader'
import HR from './components/pages/HR/HR';
import ResumeBuilder from './components/pages/ResumeBuilder';





function App() {
  return (
    <div>
    <Router>
      <Switch>
      <Route path = "/" exact component ={LandingPage}/>
        <Route path = "/hr" component = {HR}/>
        <Route path = "/resumeBuilder" component = {ResumeBuilder}/>
        
        </Switch>
    </Router>
    </div>

  );
}
export default App;

