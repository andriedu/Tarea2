
require('dotenv').config();
import { DataSource } from 'typeorm';
import {User} from './entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User],
  synchronize: true,
  logging : true
})