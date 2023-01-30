import { DataSource } from "typeorm"
import * as dotenv from "dotenv"

dotenv.config()
export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
});
