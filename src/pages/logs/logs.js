import wx from 'labrador';
import { formatTime } from '../../utils/util';
import loadViewer from '../../actions/viewer'
//import {fetch} from 'whatwg-fetch'

export default class Logs extends wx.Component {
  data = {
    logs: []
  };

  async onLoad() {
//    console.log('+++++++++++++')
//    await fetch('http://127.0.0.1:3012/ping')
//      .then(function(response) {
//        console.log('++++++', response)
//        return response.text()
//      }).then(function(body) {
//        console.log('++++++', body)
//      }).catch(function(ex) {
//        console.error('++++++', ex)
//      })
//    console.log('+++++++++++++')


//    console.log('+++++++++++++')
//    await wx.request({
//      url: 'http://127.0.0.1:3012/ping', //仅为示例，并非真实的接口地址
////      data: {
////        x: '' ,
////        y: ''
////      },
////      header: {
////        'Content-Type': 'application/json'
////      },
//      success: function(res) {
//        console.log('s+',res)
//      },
//      fail: function(res) {
//        console.log('f+',res)
//      },
//      complete: function(res) {
//        console.log('c+',res)
//      }
//    })
//    console.log('+++++++++++++')


    console.log('+++++++++++++')
    const viewer = await loadViewer();
    console.log('++++++++++++', viewer)
    
    
    let res = await wx.getStorage({key: 'logs'});
    let logs = res.data || [];
    this.setData({
      logs: logs.map(log => formatTime(new Date(log)))
    });
  }
}
