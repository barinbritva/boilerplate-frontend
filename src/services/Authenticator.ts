import {Account} from '../entities/Account';
import {AlreadyAuthorizedError} from '../errors/AlreadyAuthorizedError';
import {UnauthorizedError} from '../errors/UnauthorizedError';

const userIdKey = 'userId';

/**
 * This logic needs to be implemented in real applications
 */
export class Authenticator {
	private account: Account | null = null;

	public signIn(): Promise<Account> {
		const userId = Math.random().toString(36).substring(2, 15);
		localStorage.setItem(userIdKey, userId);

		const account = new Account(userId);
		this.account = account;
		return Promise.resolve(account);
	}

	public loadAccount(): Promise<Account | null> {
		let userId = localStorage.getItem(userIdKey);
		if (userId) {
			const account = new Account(userId);
			this.account = account;
		}

		return Promise.resolve(this.account);
	}

	public getAccount(): Account | null {
		return this.account;
	}

	public getAccountOrThrow(): Account {
		if (this.account == null) {
			throw new UnauthorizedError();
		}

		return this.account;
	}

	public assertNoAccount(): void {
		if (this.account != null) {
			throw new AlreadyAuthorizedError();
		}
	}

	public signOut(): Promise<void> {
		localStorage.removeItem(userIdKey);
		this.account = null;
		return Promise.resolve();
	}
}
