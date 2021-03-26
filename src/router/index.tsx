/*
 * @Author: zhou teng
 * @Date: 2021-03-11 18:51:07
 * @LastEditTime: 2021-03-13 11:29:16
 */
import { Switch, Route } from "react-router-dom";
import Message from './../pages/Message'
import Markdown from './../pages/Markdown'
import LifeCharts from './../pages/LifeCharts'

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
        <Markdown />
      </Route>
      <Route path="/lifecharts">
        <LifeCharts />
      </Route>
      <Route path='*'>
        <div>main page</div>
      </Route>
    </Switch>
  )
}

export default Routes
