import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/typeorm.config';
import { redisStore } from 'cache-manager-redis';
import { CompanyModule } from './company/company.module';
import { CompanyPermissionsModule } from './company-permissions/company-permissions.module';
import { CompanyRolePermissionsModule } from './company-role-permissions/company-role-permissions.module';
import { CompanyRolesModule } from './company-roles/company-roles.module';
import { CompanyUsersModule } from './company-users/company-users.module';
import { ProductModule } from './product/product.module';
import { ProductHistoryModule } from './product-history/product-history.module';
import { ProductSaleStatusModule } from './product-sale-status/product-sale-status.module';
import { ProductStatusModule } from './product-status/product-status.module';
import { SaleModule } from './sale/sale.module';
import { SaleStatusHistoryModule } from './sale-status-history/sale-status-history.module';
import { StoreModule } from './store/store.module';
import { StorePermissionsModule } from './store-permissions/store-permissions.module';
import { StoreProductModule } from './store-product/store-product.module';
import { StoreProductHistoryModule } from './store-product-history/store-product-history.module';
import { StoreRolePermissionsModule } from './store-role-permissions/store-role-permissions.module';
import { StoreRolesModule } from './store-roles/store-roles.module';
import { StoreUsersModule } from './store-users/store-users.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CompanyModule,
    CompanyPermissionsModule,
    CompanyRolePermissionsModule,
    CompanyRolesModule,
    CompanyUsersModule,
    ProductModule,
    ProductHistoryModule,
    ProductSaleStatusModule,
    ProductStatusModule,
    SaleModule,
    SaleStatusHistoryModule,
    StoreModule,
    StorePermissionsModule,
    StoreProductModule,
    StoreProductHistoryModule,
    StoreRolePermissionsModule,
    StoreRolesModule,
    StoreUsersModule,
    UserModule,
    AuthModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT || '6379'),
          ttl: 60 * 60 * 24, // 24 hours
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
