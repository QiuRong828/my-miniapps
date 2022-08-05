class Storage {
  static set(key, value) {
    wx.setStorageSync(key, value);
  }
  static get(key) {
    return wx.getStorageSync(key);
  }
  static remove(key) {
    wx.removeStorageSync();
  }
  static removeAll() {
    wx.clearStorageSync();
  }
}

export default Storage;
