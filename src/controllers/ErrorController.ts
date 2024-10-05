import {View} from '../entities/View';

export class ErrorController {
	constructor(private readonly error: Error) {}

	public handle(): View<{}> {
		return new View(() => 'ErrorController: ' + this.error.message, {});
	}
}
