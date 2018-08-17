import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import Footer from "../../components/footer/footer";
import Home from "../home/home";
import Explore from "../explore/explore";
import Category from "../category/category";
import Profile from "../profile/profile";

import './main.styl'
import ShopCart from "../ShopCart";

class Main extends Component{
  
  render(){
    // 请求根路径时, 自动 跳转到对应的用户主界面
    const pathname = this.props.location.pathname;
  
    if (pathname === '/') {
      
      return <Redirect to='/home'/>
    }
  

  
    return (
      <div className='main'>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/explore' component={Explore}/>
          <Route path='/category' component={Category}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default connect(

)(Main);