import { Db, MongoClient } from 'mongodb';
import { databaseConfig } from './database.config';
import {
  DEVELOPMENT,
  MONGODB,
  PRODUCTION,
  SEQUELIZE,
  TEST,
} from 'src/helpers/constant';
import { Sequelize } from 'sequelize-typescript';
import { Structure } from 'src/structure/entities/structure.entity';
import { News } from 'src/news/entities/news.entity';

export const databaseProviders = [
  {
    provide: MONGODB,
    useFactory: async (): Promise<Db> => {
      try {
        console.log(databaseConfig.mongodb);
        const client = await MongoClient.connect(databaseConfig.mongodb.uri);
        const db = client.db(databaseConfig.mongodb.dbName);
        return db;
      } catch (error) {
        throw error;
      }
    },
  },
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      await sequelize.addModels([Structure, News]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
