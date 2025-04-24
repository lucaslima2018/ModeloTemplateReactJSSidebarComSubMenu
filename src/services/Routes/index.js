import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../../pages/Login";
import Home from "../../pages/Home";

import Erro from "../../pages/Erro";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Login/> }/>
                <Route path="/home" element={ <Home/> }/>

                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;