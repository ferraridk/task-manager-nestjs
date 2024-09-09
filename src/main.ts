import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * The main entry point for the application.
 * Initializes the NestJS application and starts listening on port 3000.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

// Call the bootstrap function to start the application.
bootstrap();
