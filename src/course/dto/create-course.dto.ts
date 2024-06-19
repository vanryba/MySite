import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  desc: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  users: number[];

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  imageId: number;
}
