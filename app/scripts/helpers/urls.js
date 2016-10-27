export function objToParams(obj) {
  const keys = Object.keys(obj);

  if (!keys.length) {
    return '';
  }

  return '?' + keys.map(function(key) {
    return key + '=' + encodeURIComponent(obj[key]);
  }).join('&');
}
