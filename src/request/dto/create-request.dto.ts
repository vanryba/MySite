import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty()
  about: string;

  @ApiProperty()
  org: string;

  @ApiProperty()
  user: number;
}
