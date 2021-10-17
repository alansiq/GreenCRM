import React from 'react';
import { Route } from 'react-router-dom';
import {
            Home,
            About
        } from './pages';


const Routes = () => {

    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </>
    )
}

export default Routes;