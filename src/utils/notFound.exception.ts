import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(id: any) {
    super(`id ${id} not found`, HttpStatus.NOT_FOUND);
  }
}
