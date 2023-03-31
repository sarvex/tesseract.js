const { set, get, del } = require('idb-keyval');

export const cache = {
  readCache: get,
  writeCache: set,
  deleteCache: del,
  checkCache: (path) => get(path).then((v) => typeof v !== 'undefined'),
};
