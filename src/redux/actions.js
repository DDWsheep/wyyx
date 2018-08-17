
/*
包含n个action creator函数的模块
同步action: 对象  (与action type一一对应)
异步action: 函数
 */

import {
  reqHome,
  reqBanner,
  reqCategory,
  reqExplore
} from "../api";

import {
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_CATEGORY,
  RECEIVE_EXPLORE
} from "./action-types";

//接收banner
const receiveBanner = (banner) => ({type: RECEIVE_BANNER, data: banner})
//接收home
const receiveHome = (home) => ({type: RECEIVE_HOME, data: home})
//接收category
const receiveCategory = (category) => ({type: RECEIVE_CATEGORY, data: category})
//接收explore
const receiveExplore = (explore) => ({type: RECEIVE_EXPLORE, data: explore})

/*
获取banner的action
 */
export function getBanner() {
  return async dispatch => {
    const result = await reqBanner();
    if (result.code === 0) {
      dispatch(receiveBanner(result.data))
    }
  }
}

/*
获取home的action
 */
export function getHome(cb) {
  return async dispatch => {
    const result = await reqHome();
    if (result.code === 0) {
      dispatch(receiveHome(result.data))
      cb && cb()
    }
  }
}

/*
获取category的action
 */
export function getCategory(cb) {
  return async dispatch => {
    const result = await reqCategory();
    if (result.code === 0) {
      dispatch(receiveCategory(result.data))
      cb && cb()
    }
  }
}

/*
获取explore的action
 */
export function getExplore(cb) {
  return async dispatch => {
    const result = await reqExplore();
    if (result.code === 0) {
      dispatch(receiveExplore(result.data))
      cb && cb()
    }
  }
}