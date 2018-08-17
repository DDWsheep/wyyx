/*
包含多个用于生成新的state的reduce函数的模块
 */
import {combineReducers} from 'redux'

import {
  RECEIVE_BANNER,
  RECEIVE_CATEGORY,
  RECEIVE_EXPLORE,
  RECEIVE_HOME
} from "./action-types";

//产生banner相关数据的reducer
const initBanner = []
function banner(state = initBanner, action) {
  switch (action.type) {
    case RECEIVE_BANNER:
      return action.data
    default:
      return state
  }
}

const initHome = {}
function home(state = initHome, action) {
  switch (action.type) {
    case RECEIVE_HOME:
      return action.data
    default:
      return state
  }
}


//返回合并后的reducer函数
export default combineReducers({
  banner,
  home
})