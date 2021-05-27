(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.tryApplyGet = function (inTarget, inArgs, inContext) {
    return typeof inTarget !== 'function' ? inTarget : inTarget.apply(inContext, inArgs);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tryApplyGet;
  }
})();
