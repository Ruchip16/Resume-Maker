import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import ResumeHeader from './components/common/ResumeHeader';
import HR from './components/pages/HR/HR';
import ResumeBuilder from './components/pages/ResumeBuilder';
import ResumeSummary from './components/pages/HR/ResumeSummary';
import Navbar from './components/pages/HR/Navbar';
import Logout from './components/common/Logout'
import React,{ createContext,useReducer } from 'react';
import { initialState,reducer } from './reducer/UserReducer';

export const UserContext=createContext();


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    
      <UserContext.Provider value={{state,dispatch}}>
       
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/hr" component={HR} />
          <Route path="/resumeBuilder" component={ResumeBuilder} />
          <Route path="/resumeSummary" component={ResumeSummary} />
          <Route path="/logout" component={Logout}/>
        </Switch>
        
      </UserContext.Provider>
    
  );
}
export default App;

