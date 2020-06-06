module.exports = {
  development: {
    DATABASE_URL: process.env.DATABASE_URL,
    database: process.env.PROJECT_NAME || "database_dev",
    dialect: "postgres",
  },
  test: {
    DATABASE_URL: process.env.DATABASE_URL,
    database: process.env.PROJECT_NAME || "database_test",
    dialect: "postgres",
  },
  production: {
    DATABASE_URL: process.env.DATABASE_URL,
    database: process.env.PROJECT_NAME || "database_prod",
    dialect: "postgres",
  },
};
