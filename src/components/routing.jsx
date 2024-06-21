import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../App';
import '../index.css';


function RouterSetup() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                {/* <Route path="/clients" element={<Clients/>} /> */}
            </Routes>
        </Router>
    );
}
  
export default RouterSetup;