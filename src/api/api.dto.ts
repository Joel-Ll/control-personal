import { ApiProperty } from "@nestjs/swagger";

export class loginAuthDTO {
	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string
}