import React from 'react';
import {Route, Routes} from "react-router-dom";
import Authentication from './Components/Authentication/Authentication';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Authentication/>}/>
            <Route></Route>
            <Route></Route>
            <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
    );
}

export default App;
