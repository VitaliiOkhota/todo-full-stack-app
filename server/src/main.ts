import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5000, () => {
    console.log('Сервер запущено на порту: 5000')
  });
}
bootstrap();
