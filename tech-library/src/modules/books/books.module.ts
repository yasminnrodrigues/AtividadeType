import { Module } from '@nestjs/common';

import { BooksService } from './books.service';
import { bookProviders } from './books.providers';
import { BooksController } from './books.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [...bookProviders, BooksService]
})
export class BooksModule {}
