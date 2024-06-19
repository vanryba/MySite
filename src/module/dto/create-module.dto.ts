import { ApiProperty } from '@nestjs/swagger';

export class CreateModuleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  desc: string;

  @ApiProperty()
  courseId: number;
}
