import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return value!;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('DB_HOST'),
      url: this.getValue('DB_URL', false),
      port: parseInt(this.getValue('DB_PORT')),
      username: this.getValue('DB_USERNAME'),
      password: this.getValue('DB_PASSWORD'),
      database: this.getValue('DB_NAME'),
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
        __dirname + '/../entities/*{.ts,.js}',
      ],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      synchronize: false,
      autoLoadEntities: true,
      migrationsRun: true,
      logging: this.env['DB_LOGGING'] === 'true',
      ssl: false,
    };
  }
}

export const configService = new ConfigService(process.env);
