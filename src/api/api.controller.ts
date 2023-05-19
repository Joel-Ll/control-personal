import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiService } from './api.service';
import { loginAuthDTO } from './api.dto';

@Controller('api')
export class ApiController {

	constructor(
		private readonly apiService:ApiService
	){}

	@Post('auth-login')
	async authLogin(@Res() res:Response, @Body() loginAuthDTO: loginAuthDTO ) {
		const response = await this.apiService.loginAuth( loginAuthDTO )
		return res.status(HttpStatus.OK).json({  response } );
	}
}

