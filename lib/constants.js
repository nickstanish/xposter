const PORT = process.env.PORT || 3000;
const BIND_ADDRESS = process.env.BIND_ADDRESS || 'localhost'; // '0.0.0.0', '::1', '127.0.0.1'

module.exports = {
  BIND_ADDRESS,
  PORT
};