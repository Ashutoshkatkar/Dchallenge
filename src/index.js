import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Home";


ReactDOM.render(

    <Router>
        {/* <Home /> */}
        <App />

    </Router>
    ,
    document.getElementById('root')
);