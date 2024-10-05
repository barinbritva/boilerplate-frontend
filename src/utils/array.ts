export function remove<T>(array: T[], item: T): boolean {
	const index = array.indexOf(item);

	if (index === -1) {
		return false;
	}

	array.splice(index, 1);
	return true;
}

export function clone<T>(array: T[]): T[] {
	return array.slice();
}

export function flat<T>(array: T[][]): T[] {
	return array.reduce((result, element) => [...result, ...element], []);
}

export function sliceIntoChunks<T>(array: T[], chunkSize: number): T[][] {
	const result: T[][] = [];

	for (let i = 0; i < array.length; i += chunkSize) {
		const chunk = array.slice(i, i + chunkSize);
		result.push(chunk);
	}

	return result;
}

export function filterDuplicates<T>(value: T, index: number, array: T[]): boolean {
	return array.indexOf(value) === index;
}
