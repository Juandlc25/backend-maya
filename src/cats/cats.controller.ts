import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Cat } from './cats.entity';
import { CatsService } from './cats.service';
import { CatDTO } from './../dto/cat.dto';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}
  @ApiOkResponse({
    description: 'Retrieved all the cats',
  })
  @ApiNotFoundResponse({ description: 'No cats found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get()
  findAll() {
    return this.catService.getCats();
  }

  @ApiOkResponse({
    description: 'Retrieved cat by ID successfully',
    type: CatDTO,
  })
  @ApiNotFoundResponse({ description: 'No cat found for ID' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get(':id')
  findOne(@Param('id') id) {
    return this.catService.findOne(id);
  }

  @ApiOkResponse({
    description: 'Create a cat successfully',
    type: CatDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Post()
  create(@Body() cat: Cat) {
    return this.catService.createCat(cat);
  }

  @ApiOkResponse({
    description: 'Edited cat by ID successfully',
    type: CatDTO,
  })
  @ApiNotFoundResponse({ description: 'No cat found for ID' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Patch(':id')
  async editNote(@Body() cat: Cat, @Param('id') id: string): Promise<Cat> {
    const noteEdited = await this.catService.editCat(id, cat);
    return noteEdited;
  }

  @ApiOkResponse({
    description: 'Deleted cat by ID successfully',
    type: CatDTO,
  })
  @ApiNotFoundResponse({ description: 'No cat found for ID' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Delete(':id')
  remove(@Param('id') id) {
    this.catService.remove(id);
  }
}
