module.exports = (worker, handler) => {
  worker.onmessage = ({ data }) => {
    handler(data);
  };
};
