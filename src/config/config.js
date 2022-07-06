const getEnv = () => ({
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
});

exports.config = { getEnv };
