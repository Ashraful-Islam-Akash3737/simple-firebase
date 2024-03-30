// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
    return (
        <div>
            <h2>this is Main</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;