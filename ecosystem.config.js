const envFetchInt = (key, defaultValue) => {
  if (key in process.env) {
    return parseInt(process.env[key]);
  }
  return defaultValue;
};

module.exports = {
  apps : [{
    name: 'web',
    script: './bin/server.js',
    watch: false,
    instances: envFetchInt('WEB_CONCURRENCY', 4),
    exec_mode: 'cluster'
  }]
};
