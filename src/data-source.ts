import 'dotenv/config';

import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['**/*.entity.{ts,js}'],
  migrations: ['./dist/migrations/*.js', './src/migrations/*.ts'],
  logging: true,
  synchronize: true,
});