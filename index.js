const fastify = require('fastify')({
  logger: true
});
const { BIND_ADDRESS, PORT } = require('./lib/constants');
const { v4: uuidv4 } = require('uuid');

const PROCESS_GID = uuidv4();

fastify.get('/_health', async (request, reply) => {
  return 'OK';
});

fastify.get('/_health.json', async (request, reply) => {
  return {
    data: 1
  };
});

fastify.setNotFoundHandler(async (request, reply) => {
  return reply.status(404).send('Not Found');
});

const start = async () => {
  try {
    fastify.log.info(`Starting server ${PROCESS_GID}, WEB_CONCURRENCY=${process.env.WEB_CONCURRENCY}`);
    await fastify.listen(PORT, BIND_ADDRESS);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

module.exports = {
  start
};