import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../App';
import '../index.css';
import Qualify from '../pages/clients';
import Booking from './booking';


function RouterSetup() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/qualify" element={<Qualify/>} />
                <Route path="/booking" element={<Booking/>} />
            </Routes>
        </Router>
    );
}
  
export default RouterSetup;