/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-03-05 20:45:53
 * @LastEditTime: 2022-11-20 01:27:35
 * @FilePath: /piniaVite_ts/src/store/index.ts
 */
//  1 定义状态容器  和  状态
//  修改容器中的state
//  仓库中的 action 的使用

import { defineStore } from 'pinia'
// 引入别的仓库
import { listStore } from './list'

export const mainSrore = defineStore('main', {
  state: () => {
    return {
      hello: 'hello word  pinia',
      cont: 0,
      phone: 18309469751
    }
  },
  getters: {
    // 正常写法
    // phonehide(state){
    //     console.log('getters  具有缓存特性' )
    //  return    state.phone.toString().replace(/^(\d{3})(\d{4})(\d{4})$/,'$1****$3')

    // }
    //  ts  this 写法
    phonehide(): String {
      console.log('getters  具有缓存特性')
      return this.phone.toString().replace(/^(\d{3})(\d{4})(\d{4})$/, '$1****$3')
    }
  },
  actions: {
    //  不要用 箭头函数  明确当前的 this 指向
    changeSate() {
      this.cont++
      this.hello = 'wagpeng'
    },
    //  store
    getList() {
      console.log('-获取list仓库--', listStore().list)
    }
    // todo:bn
    // TODO:
    //done:  复古风格
  }
})
