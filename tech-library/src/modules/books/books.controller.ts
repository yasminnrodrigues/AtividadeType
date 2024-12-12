// books.controller.ts
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    findAll() {
        return this.booksService.findAll();
    }



    @Put(':id')
    async update(@Param('id') id: number, @Body() body: { title: string; year: number }) {
        try {
            const updatedBook = await this.booksService.update(id, body);

            return updatedBook;

        } catch (error) {
            console.error(error);
            throw error; // Repassa o erro para o NestJS gerenciar
        }
    }
}