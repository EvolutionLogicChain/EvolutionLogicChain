(function() {
  var lang = navigator.language || navigator.userLanguage || '';
  if (!lang.startsWith('zh')) return;
  var path = window.location.pathname;
  if (path.indexOf('_cn') !== -1) return;
  if (path.endsWith('/')) {
    window.location.href = path + 'README_cn/';
  }
})();
