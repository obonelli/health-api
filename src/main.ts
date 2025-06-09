import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    // Usa la env var PORT si existe; de lo contrario, 4000.
    const port = process.env.PORT ?? 4000;
    await app.listen(port);
    console.log(`Health API running on http://localhost:${port}`);
}

bootstrap();
