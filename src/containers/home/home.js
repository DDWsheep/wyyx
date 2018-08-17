import React, {Component} from 'react';
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import Banner from './banner/banner'

import './home.styl'
import '../../assets/reset.css'

class Home extends Component{
  state = {
    navList: ['推荐', '居家', '鞋包服饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
    current: 0
  }
  switchTab = (num) => {
    this.setState({
      current: num
    })
  }
  
  componentDidMount () {
    //导航滑动
     new BScroll(this.scroll, {
      scrollX: true,
      click: true
    })
    new BScroll(this.scrollID, {
      click: true
    })
  }
  
 /* componentDidUpdate () {
  
  }*/
  
  render () {
    const {navList} = this.state
    return (
      <div>
        <div className="nva-wrap">
          <div className="msite-header">
            <a href="javascript:;" className="logo"></a>
            <div className="msite-search">
              <i className="iconfont icon-sousuo2 icon"></i>
              <span className="placeholder">搜索商品, 共11784款好物</span>
            </div>
          </div>
    
          <div className="msite-nav-wrap" ref={self => this.scroll = self}>
            <div className="msite-nav">
              {
                navList.map((item, index) => (
                  <div key={index} className="nav-tab"
                  onClick={() => this.switchTab(index)}>
                    <span className={['nav-text', this.state.current===index && 'active'].join(' ')}>{item}</span>
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
        <div className="goods-wrap" ref={self => this.scrollID = self}>
          <Banner/>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Home)