(function() {
  var path = window.location.pathname;
  if (path.indexOf('_cn') !== -1) return;
  var ref = document.referrer;
  if (ref && ref.indexOf(window.location.hostname) !== -1) return;
  var lang = navigator.language || navigator.userLanguage || '';
  if (lang.startsWith('zh') && path.endsWith('/')) {
    window.location.href = path + 'README_cn/';
  }
})();
