/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter, Switch, Route} from 'react-router-dom'

import store from './redux/store'
import Main from './containers/main/main'
import Home from './containers/home/home'
import Category from './containers/category/category'
import './mock/mockSever'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route component={Main}/>
        <Route path='/category' component={Category}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </HashRouter>
  </Provider>
  
), document.getElementById('root'))