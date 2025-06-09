import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
    getHealth() {
        return { status: 'ok', version: '0.1.0', timestamp: Date.now() };
    }
}
