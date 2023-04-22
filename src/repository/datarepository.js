let statusData = [];

/**
 * @function setStatusData
 * @param {statusDataResponse} stores the data from API temporarily
 */
function setStatusData(statusDataResponse) {
  statusData = statusDataResponse;
}

/**
 * @function setStatusData
 * @returns {statusData}
 */

function getStatusData() {
  return statusData;
}
export { setStatusData, getStatusData };

/**
 * TODO: save the response in a database
 * create database singleton classes
 */
