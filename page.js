const oldPage = Page
Page = function (pageOptions) {

  function initAgain(pageOptions, methodName, methodFunc) {
    if (pageOptions[methodName]) {
      const oldMethodfunc = pageOptions[methodName];
      pageOptions[methodName] = function (n) {
        methodFunc.call(this, n, methodName), oldMethodfunc.call(this, n);
      };
    } else
      pageOptions[methodName] = function (n) {
        methodFunc.call(this, n, methodName);
      };
  }

  initAgain(pageOptions, "onLoad", _onLoad)

  /**
   * 生命周期函数--监听页面加载
   */
  function _onLoad(options) {
    console.log('lalala')
  }

  return oldPage(pageOptions)
}

export default Page