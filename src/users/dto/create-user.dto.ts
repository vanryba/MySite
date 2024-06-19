import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  second_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty({ default: 'student' })
  role: string;
}
