import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('answers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  find_all_answer() {
    // console.log('
    return this.appService.find_all_answer();
  }
}
