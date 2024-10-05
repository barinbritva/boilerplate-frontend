import {UserBase} from '../interfaces/AppContext';

export class Account implements UserBase {
	constructor(
		public readonly id: string,
		public readonly username: string,
		public readonly photoUrl: string,
		public readonly isAdmin: boolean
	) {}

	public isSignedIn(): boolean {
		return Boolean(this.id);
	}
}
