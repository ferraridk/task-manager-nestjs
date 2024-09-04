import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * The main entry point for the application.
 * Initializes the NestJS application and starts listening on port 3000.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// Call the bootstrap function to start the application.
bootstrap();
