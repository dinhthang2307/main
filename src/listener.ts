import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ, 
    options: {
      urls: ['amqps://sqlkbvwz:Hn2MV2mAPtyE_XXB-G5e4cb3pYy6_pGk@gerbil.rmq.cloudamqp.com/sqlkbvwz'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen();
}

bootstrap();
