import {createHttpError} from './createHttpError.js';

export class HttpTransport {
	public async makeRequest(url: string, options?: RequestInit): Promise<Response> {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw createHttpError(response.status);
		}

		return response;
	}
}
