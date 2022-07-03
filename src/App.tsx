import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<h1>Auth</h1>}/>
            <Route></Route>
            <Route></Route>
            <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
    );
}

export default App;
