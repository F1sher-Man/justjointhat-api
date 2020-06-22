import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/all')
  getAll(): Array<string> {
    return this.appService.getAll();
  }

  @Get(':id/:name')
  getById(@Param('id') id: string, @Param('name') name: string): string {
    return `This is id: ${id} and name ${name}`;
  }
}
