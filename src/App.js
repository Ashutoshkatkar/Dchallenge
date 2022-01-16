import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';

import Todo from './components/Todo';
import Details from './components/Details';
import Tod from './components/Tod';
import Home from './components/Home';
import Login from './darwinc/Login';
import Dashboard from './darwinc/Dashboard';

const App = () => {

    return (
        <div >

            <Routes>

                {/* <Route path="/" element={<Todo />} />
                <Route path="/details" element={< Details />} /> */}
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

            </Routes>

        </div>
    )
}

export default App
