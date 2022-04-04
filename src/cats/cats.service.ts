import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cats.entity';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}
  async getCats(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  findOne(id: string): Promise<Cat> {
    return this.catsRepository.findOne(id);
  }

  async createCat(cat: Cat) {
    if (!cat.image) cat.image = '';
    this.catsRepository.save(cat);
  }

  async remove(id: string): Promise<void> {
    await this.catsRepository.delete(id);
  }

  async editCat(id: string, cat: Cat): Promise<Cat> {
    const editedCat = await this.catsRepository.findOne(id);
    if (!editedCat) {
      throw new NotFoundException('Cat is not found');
    }
    editedCat.image = cat.image;
    await editedCat.save();
    return editedCat;
  }
}
