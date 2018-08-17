/*
mock数据
 */
import Mock from 'mockjs'


import dataNav from './data_nav.json'

import homeData from './home_data.json'

import shiwuData from './shiwu_data'


//返回banner 轮播图的接口
Mock.mock('/banner', {code: 0, data: homeData.focusList})

//返回主页的接口
Mock.mock('/home', {code: 0, data: homeData})

//返回分类页的接口
Mock.mock('/nav', {code: 0, data: dataNav.categoryL1List})

//返回识物接口
Mock.mock('/shiwu', {code: 0, data: shiwuData})




