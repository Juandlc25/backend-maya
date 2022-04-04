import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Cat extends BaseEntity {
  @PrimaryColumn({ length: 4 })
  @MinLength(4)
  @MaxLength(4)
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  @IsString()
  weightimperial: string;

  @Column()
  @IsString()
  weightmetric: string;
}
