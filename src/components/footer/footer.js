/*
底部导航
 */
import React, {Component} from 'react'

import {withRouter} from 'react-router-dom'
import './footer.styl'

class Footer extends Component {
  
  goTo = (path) => {
    this.props.history.replace(path)
  }
  render() {
    const {pathname} = this.props.history.location
    return (
      <footer className="footer_guide border-1px">
        <div className={['guide_item', pathname==='/home' && 'on'].join(' ')}
             onClick={() => this.goTo('/home')} >
          <span className="item_icon">
            <i className="iconfont icon-shouye"></i>
          </span>
          <span>首页</span>
        </div>
        <div className={['guide_item', pathname==='/explore' && 'on'].join(' ')}
             onClick={() => this.goTo('/explore')}>
          <span className="item_icon">
            <i className="iconfont icon-fangxingweixuanzhong"></i>
          </span>
          <span>识物</span>
        </div>
        <div className={['guide_item', pathname==='/category' && 'on'].join(' ')}
             onClick={() => this.goTo('/category')}>
          <span className="item_icon">
            <i className="iconfont icon-drawer2chouti"></i>
          </span>
          <span>分类</span>
        </div>
        <div className={['guide_item', pathname==='/shopCart' && 'on'].join(' ')}
             onClick={() => this.goTo('/shopCart')}>
          <span className="item_icon">
            <i className="iconfont icon-gouwuchekong"></i>
          </span>
          <span>购物车</span>
        </div>
        <div className={['guide_item', pathname==='/profile' && 'on'].join(' ')}
             onClick={() => this.goTo('/profile')}>
          <span className="item_icon">
            <i className="iconfont icon-gerenyonghutouxiang"></i>
          </span>
          <span>我的</span>
        </div>
      </footer>
    )
  }
}

export default withRouter(Footer)