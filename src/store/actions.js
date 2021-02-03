import {ADD_COUNTER, ADD_TO_CART} from './mutations-types'

export default {
  addCart(context, payload) {
    
      // for(let item of state.cartList) {
      //   if(item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    if(oldProduct) {
      context.commit(ADD_COUNTER,oldProduct)
      resolve('加入购物车成功')
    }else {
      payload.count = 1 
      // context.state.cartList.push(payload) 
      context.commit(ADD_TO_CART,payload)
      resolve('加入购物车成功')
    }
  }
    )
}
}