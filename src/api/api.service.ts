import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { loginAuthDTO } from './api.dto';

@Injectable()
export class ApiService {
	private apiSeguridad = process.env.API_SEGURIDAD; 

	constructor( 
		private readonly httpService: HttpService,
	){}

	async test() {
		return 'Hello from services'
	}

	async loginAuth( loginAuthDTO:loginAuthDTO ) {
		const response = await this.httpService.post(`${this.apiSeguridad}/auth/login`, loginAuthDTO ).toPromise()
			return response.data
	}
}

