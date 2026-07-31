import {HttpStatus} from './HttpStatus';
import {UnauthorizedError} from './errors/UnauthorizedError';

export class HttpTransport {
	public async get<Response>(url: string): Promise<Response> {
		return this.makeRequest<Response>(url);
	}

	private async makeRequest<Response>(url: string, options?: RequestInit): Promise<Response> {
		const response = await fetch(url, options);
		if (!response.ok) {
			if (response.status === HttpStatus.Unauthorized) {
				throw new UnauthorizedError();
			} else {
				// todo create specific error classes
				throw new Error('Failed to fetch data.');
			}
		}

		return response.json();
	}
}
