import React from 'react'
import { Switch, Route } from "react-router-dom";

import Message from './../pages/Message'

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <div>main page</div>
      </Route>
      <Route path="/message">
        <Message />
      </Route>
      <Route path="/documents">
        <div>documents page</div>
      </Route>
    </Switch>
  )
}

export default Routes
