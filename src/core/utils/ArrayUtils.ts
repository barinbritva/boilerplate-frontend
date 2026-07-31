export abstract class ArrayUtils {
	public static remove<T>(array: T[], item: T): boolean {
		const index = array.indexOf(item);

		if (index === -1) {
			return false;
		}

		array.splice(index, 1);
		return true;
	}

	public static clone<T>(array: T[]): T[] {
		return array.slice();
	}

	public static flat<T>(array: T[][]): T[] {
		return array.reduce((result, element) => [...result, ...element], []);
	}

	public static sliceIntoChunks<T>(array: T[], chunkSize: number): T[][] {
		const result: T[][] = [];

		for (let i = 0; i < array.length; i += chunkSize) {
			const chunk = array.slice(i, i + chunkSize);
			result.push(chunk);
		}

		return result;
	}

	public static filterDuplicates<T>(value: T, index: number, array: T[]): boolean {
		return array.indexOf(value) === index;
	}
}
