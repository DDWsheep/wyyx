//api接口
import ajax from './ajax'

//首页轮播图
export const reqBanner = () => ajax('/banner')
//主页
export const reqHome = () => ajax('/home')
//识物
export const reqExplore = () => ajax('/shiwu')
//分类
export const reqCategory = () => ajax('/nav')
