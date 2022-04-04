import { ApiProperty } from '@nestjs/swagger';

export class CatDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  weightmetric: string;

  @ApiProperty()
  weightimperial: string;
}
