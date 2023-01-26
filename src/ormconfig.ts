import { DataSource } from "typeorm"

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'login_system',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
});
