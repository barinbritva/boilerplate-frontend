import {createHttpError} from './createHttpError';

export class HttpTransport {
	public async makeRequest(url: string, options?: RequestInit): Promise<Response> {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw createHttpError(response.status);
		}

		return response;
	}
}
