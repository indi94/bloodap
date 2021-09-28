import React from 'react';
import './App.css';
import './Style.css';
import Nav from './components/Header/Nav';
import {BrowserRouter , Route } from 'react-router-dom';
import Footr from './components/Footer/Footr';
import Conseil from './components/Conseil/Conseil';
import Inscription from './components/Inscription/Inscription';
import Alert from './components/Alert/Alert';
import Sos from './components/Sos/Sos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUserMd} from '@fortawesome/free-solid-svg-icons'
import { faFirstAid} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <BrowserRouter>
     <Nav/>
     < Route exact path="/Conseil"component={ Conseil }/>
     < Route exact path="/Inscription"component={ Inscription }/>
     < Route exact path="/Sos"component={ Sos }/>
     < Route exact path="/ Alert "component ={ Alert }/>
     
     <Footr/>
    </BrowserRouter>
  );
}

export default App;
