import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { PositionModule } from './position/position.module';
import { PositionTagModule } from './position-tag/position-tag.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      introspection: true,
      context: ({ req }) => ({ req }),
      cors: {
        // 是否允许携带cookies
        credentials: true,
        // 不能设置直接设定成*，否则会被浏览器CORS策略拦截。
        origin: /.*/,
        context: ({ req }) => ({ req }),
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '8705A07896b',
      database: 'wechat-interview-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CatsModule,
    UserModule,
    CompanyModule,
    PositionModule,
    PositionTagModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
