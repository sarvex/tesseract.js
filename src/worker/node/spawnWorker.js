const { Worker } = require('worker_threads');

/**
 * SpawnWorker
 *
 * @name spawnWorker
 * @function fork a new process in node
 * @access public
 */
module.exports = ({ workerPath }) => new Worker(workerPath);
