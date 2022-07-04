const getEnv = () => ({
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  ROUNDS: process.env.ROUNDS,
  SERVER_BASE_URL: process.env.SERVER_BASE_URL,
  FRONTEND_URL: process.env.FRONTEND_URL,
});

exports.config = { getEnv };
