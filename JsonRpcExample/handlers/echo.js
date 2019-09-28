var echo = function(params, callback) {
  console.log("JSON-RPC echo 호출함.");
  console.dir(params);
  callback(null, params);
};

module.exports = echo;
