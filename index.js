const fastify = require('fastify')({
  logger: true
});
const { PORT } = require('./lib/constants');

fastify.get('/_health', async (request, reply) => {
  return 'OK';
});

fastify.get('/_health.json', async (request, reply) => {
  return {
    data: 1
  };
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

module.exports = {
  start
};