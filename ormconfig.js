module.exports = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

// {
//   "type": "mysql",
//   "host": "localhost",
//   "port": 3306,
//   "username": "root",
//   "password": "root",
//   "database": "catsapp",
//   "entities": ["dist/**/*.entity{.ts,.js}"],
//   "synchronize": true
// }
