import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsosModule } from './usos/usos.module';
import { TypeOrmModule } from 'node_modules/@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [
    UsosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sillasAdmin',
      password: 'secretPassword123!',
      database: 'sillasDB',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
