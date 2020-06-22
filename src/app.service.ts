import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Gold!';
  }

  getAll(): Array<string> {
    return ['all', 'records'];
  }
}
