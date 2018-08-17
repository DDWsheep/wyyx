
import React, {Component} from 'react';
import Swiper from 'swiper'
import {connect} from "react-redux";
import BScroll from 'better-scroll'

import './banner.styl'
import '../../../assets/reset.css'
import 'swiper/dist/css/swiper.min.css'
import {getBanner, getHome} from "../../../redux/actions";
import Split from '../../../components/split/split'

class Banner extends Component{
  componentWillMount(){
    this.props.getBanner()
    this.props.getHome()
  }
  
  componentDidUpdate(){
  
    new Swiper(this.swiperID, {
      pagination: {
        el: this.paginateID,
      },
      loop: true,
      autoplay: true
    })
    
    new BScroll(this.scrollID, {
      click: true,
      scrollX: true
    })
    new BScroll(this.hotGrid, {
      click: true,
      scrollX: true
    })
    
    
  }
  
  render(){
    let {banner} = this.props
    let {
      policyDescList,
      tagList,
      newItemNewUserList,
      popularItemList,
      topicList
    } = this.props.home
    return (
      <div>
        <div className="swiper-container" ref={self => this.swiperID = self}>
          <div className="swiper-wrapper">
            {
              banner.map((item, index) => (
                <div key={index} className="swiper-slide">
                  <img src={item.picUrl} alt=""/>
                </div>
              ))
            }
          </div>
          <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
        </div>
        
        <div className="policy-desc">
          {
            policyDescList ?  policyDescList.map((item, index) => (
              
              <div className="desc" key={index}>
                <img src={item.icon}/>
                <span>{item.desc}</span>
              </div>
            )) : null
           
          }
          
          
        </div>
        <Split/>
        <div className="brand-container">
          <header className="brand-header">
            <span>品牌制造商直供</span>
            <i className="iconfont icon-rightarrow icon"></i>
          </header>
          <div className="brand">
            {
              tagList ? Array.from(tagList).slice(0,4).map((item, index) => (
                <div key={index} className="brand-item">
                  <h4>{item.name}</h4>
                  <div className="price">
                    <span>{item.floorPrice}</span><span className="right">元起</span>
                  </div>
                  <i className="icon"></i>
                  <img src={item.picUrl} alt=""/>
                </div>
              )) : null
            }
            
          </div>
        </div>
        <Split/>
        <div className="newGoods">
          <header className="newHeader">
            <span className="newFirst">新品首发</span>
            <div className="all">
              <span>查看全部</span>
              <i className="iconfont icon-arrow-right-copy-copy icon"></i>
            </div>
          </header>
          <div className="goodGrid" ref={self => this.scrollID = self}>
            <div className="list">
              {
                newItemNewUserList ? newItemNewUserList.map((item, index) => (
                  <div className="goodGrid-item" key={index}>
                    <div className="wraper">
                      <img src={item.primaryPicUrl}/>
                    </div>
                    <div className="title">
                      七夕推荐
                    </div>
                    <div className="name ellipsis">{item.name}</div>
                    <div className="newItemDesc ellipsis">{item.simpleDesc}</div>
                    <div className="price">￥{item.retailPrice}</div>
                  </div>
                )) : null
                
              }
              
            <div className="more">
              <div className="more-text">
                <span>查看全部</span>
              </div>
            </div>
          </div>
  
        </div>
      </div>
        <Split/>
        <div className="newGoods">
          <header className="hotHeader">
            <span className="hotRecm">人气推荐.好物精选</span>
            <div className="all">
              <span>查看全部</span>
              <i className="iconfont icon-arrow-right-copy-copy icon"></i>
            </div>
          </header>
          <div className="goodGrid hotGrid" ref={self => this.hotGrid = self}>
            <div className="list">
              {
                popularItemList?popularItemList.map((item, index) => (
                  <div className="goodGrid-item" key={index}>
                    <div className="wraper">
                      <img src={item.primaryPicUrl}/>
                    </div>
                    <div className="title">
                      七夕推荐
                    </div>
                    <div className="name ellipsis">{item.name}</div>
                    <div className="newItemDesc ellipsis">{item.simpleDesc}</div>
                    <div className="price">￥{item.retailPrice}</div>
                  </div>
                )) : null
              }
             
            <div className="more">
              <div className="more-text">
                <span>查看全部</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Split/>
  
        <div className="timing-wrap">
          <div className="timing-container">
            <div className="timing-left">
              <div className="title">严选限时购</div>
              <div className="countdown">
                <span className="hours time">00</span>
                <span className="colon">:</span>
                <span className="mins time">00</span>
                <span className="colon">:</span>
                <span className="secs time">00</span>
              </div>
              <div className="next-title">下一场20:00开始</div>
            </div>
            <div className="timing-right">
              <img src="http://yanxuan.nosdn.127.net/25c7279ef37c6836bb6010d03f8a5caf.png?imageView&quality=85&thumbnail=330x330" alt=""/>
                <div className="price">
                  <span className="pl">¥98</span>
                  <span className="pr">¥139</span>
                </div>
            </div>
          </div>
        </div>
        <Split/>
  
        <div className="sale">
          <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt=""/>
        </div>
        <Split/>
  
        <div className="GoodsSale">
          <header className="sub-header">
            <span>专题精选</span>
            <i className="iconfont icon-rightarrow icon"></i>
          </header>
          <div className="subjects">
            <div className="subjects-warp">
              {
                topicList ? topicList.map((topic, index) => (
                  <div className="slide" key={index}>
                    <img src={topic.itemPicUrl} alt=""/>
                    <div className="description">
                      <h4 className="title ellipsis">{topic.title}</h4>
                      <span className="price">{topic.priceInfo}元起</span>
                    </div>
                    <div className="text ellipsis">{topic.subtitle}</div>
                  </div>
                )) : null
              }
              
          </div>
        </div>
      </div>
    <Split/>
  
        <div className="copyright">
          <div className="content">
            <div className="bd">
              <a href="javascript:;" className="goApp">下载APP</a>
              <a href="javascript:;">电脑版</a>
            </div>
            <p className="desc">
              <span>网易公司版权所有 © 1997-2018</span>
              <br/>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({banner: state.banner, home: state.home}),
  {getBanner, getHome}
)(Banner)