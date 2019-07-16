import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.port || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
Logger.log(`server starting on ${port}`);
bootstrap();
