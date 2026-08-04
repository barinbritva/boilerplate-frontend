export function convertUnknownToError(value: unknown): Error {
	if (value instanceof Error) {
		return value;
	}

	let message = 'An unknown error occurred';

	try {
		if (typeof value === 'string') {
			message = value;
		} else if (typeof value === 'object' && value !== null && 'message' in value) {
			const candidate = Reflect.get(value, 'message');
			if (typeof candidate === 'string') {
				message = candidate;
			}
		} else {
			const serialized = JSON.stringify(value);
			message = `An error occurred: ${serialized ?? String(value)}`;
		}
	} catch {
		// Keep the safe fallback message.
	}

	return new Error(message, {cause: value});
}
