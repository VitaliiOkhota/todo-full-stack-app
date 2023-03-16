import {Module} from '@nestjs/common';
import {TodoModule} from './todo/todo.module';
import {SequelizeModule} from '@nestjs/sequelize';
import {ConfigModule} from '@nestjs/config';
import {SequelizeConfigService} from './config/sequelizeConfig.service';
import {databaseConfig} from './config/configuration';

@Module({
  imports: [
      SequelizeModule.forRootAsync({
        imports: [ConfigModule],
        useClass: SequelizeConfigService,
      }),
      ConfigModule.forRoot({
        load: [databaseConfig]
      }),
      TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
