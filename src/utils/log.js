let logging = false;

exports.logging = logging;

export const setLogging = (_logging) => {
  logging = _logging;
};

export const log = (...args) =>
  logging ? console.log.apply(this, args) : null;
