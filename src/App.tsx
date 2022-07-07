import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Authentication from './Components/Authentication/Authentication';

function App() {

    const [path, setPath] = useState('');

    return (
        <Routes>
            <Route path="/" element={<Authentication path={path} setPath={setPath}/>}/>
            <Route path={path}></Route>
            <Route></Route>
            <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
    );
}

export default App;
