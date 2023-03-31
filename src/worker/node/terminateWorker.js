/**
 * TerminateWorker
 *
 * @name terminateWorker
 * @function kill worker
 * @access public
 */
export const terminateWorker = (worker) => {
  worker.terminate();
};
