import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { MongooseExceptionFilter, MongoDBExceptionFilter } from './exception-filters/mongo-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.set('trust proxy', 1);
  app.useGlobalFilters(new MongooseExceptionFilter());
  app.useGlobalFilters(new MongoDBExceptionFilter());
  await app.listen(process.env.PORT);
}
bootstrap();
