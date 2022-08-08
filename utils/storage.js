import {field} from '../config/config'
class Storage {
  static set(key, value) {
    wx.setStorageSync(key, value);
  }
  static get(key) {
    return wx.getStorageSync(key) || "";
  }
  static remove(key) {
    wx.removeStorageSync();
  }
  static removeAll() {
    wx.clearStorageSync();
  }
  static setToken(token){
      wx.setStorageSync(field.loginCredentials, token)
  }
  static setUserInfo(userInfo){
      wx.setStorageSync(field.userInfoKey, userInfo)
  }
}

export default Storage;
