import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Header from './Header.js';
// import ProfilePage from './ProfilePage.js';


function App(props) {

    return (
        <div>
            <Header />
            <Routes>
                <Route index element={<Home />}></Route>
            </Routes>

        </div>
    )

}

export default App;