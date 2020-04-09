import React from "react";
import { Switch, Route } from 'react-router-dom'

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function Routes(params) {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/home" exact component={Home} isPrivate />
            
            <Route component={SignIn} />
        </Switch>
    )
}