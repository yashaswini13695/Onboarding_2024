require('dotenv').config(); // Load environment variables from .env file

const config = {
  app: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development'
  },
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    jwtExpiration: process.env.JWT_EXPIRATION || '1h'
  },
  api: {
    version: 'v1',
    baseUrl: '/api'
  },
  log: {
    level: process.env.LOG_LEVEL || 'info'
  }
};

module.exports = config;