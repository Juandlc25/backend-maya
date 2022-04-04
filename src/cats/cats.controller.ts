import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Cat } from './cats.entity';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  findAll() {
    return this.catService.getCats();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.catService.findOne(id);
  }

  @Post() create(@Body() cat: Cat) {
    return this.catService.createCat(cat);
  }

  @Patch(':id')
  async editNote(@Body() cat: Cat, @Param('id') id: string): Promise<Cat> {
    const noteEdited = await this.catService.editCat(id, cat);
    return noteEdited;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    this.catService.remove(id);
  }
}
