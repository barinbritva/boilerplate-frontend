import {HttpStatus} from './consts/HttpStatus';
import {UnauthorizedError} from './errors/UnauthorizedError';

export class HttpTransport {
	constructor(private readonly baseUrl: string) {}

	public async get<Response>(url: string): Promise<Response> {
		return this.makeRequest<Response>(`${this.baseUrl}${url}`);
	}

	private async makeRequest<Response>(url: string, options?: RequestInit): Promise<Response> {
		const response = await fetch(url, options);
		if (!response.ok) {
			if (response.status === HttpStatus.Unauthorized) {
				throw new UnauthorizedError();
			} else {
				throw new Error('Failed to fetch data.');
			}
		}

		return response.json();
	}
}
