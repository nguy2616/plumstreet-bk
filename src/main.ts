import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { config } from 'process';
import { AppModule } from './app.module';
import { ExceptionsLoggerFilter } from './utils/exceptionsLogger.filter';
import { ExcludeNullInterceptor } from './utils/excludeNull.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
  });

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.use(cookieParser());
  // exception
  app.useGlobalFilters(new ExceptionsLoggerFilter(httpAdapter));
  // excludde null value
  //app.useGlobalInterceptors(new ExcludeNullInterceptor());
  // validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
