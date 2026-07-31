import {AccountModel} from './AccountModel';
import {UnauthorizedError} from '../../../core/http/errors/UnauthorizedError';
import {AlreadyAuthorizedError} from './errors/AlreadyAuthorizedError';

/**
 * This logic needs to be implemented in real applications
 */
export class Authenticator {
	private readonly userIdKey = 'userId';
	private account: AccountModel | null = null;

	public signIn(): Promise<AccountModel> {
		const userId = Math.random().toString(36).substring(2, 15);
		localStorage.setItem(this.userIdKey, userId);

		const account = new AccountModel(userId);
		this.account = account;
		return Promise.resolve(account);
	}

	public loadAccount(): Promise<AccountModel | null> {
		let userId = localStorage.getItem(this.userIdKey);
		if (userId) {
			const account = new AccountModel(userId);
			this.account = account;
		}

		return Promise.resolve(this.account);
	}

	public getAccount(): AccountModel | null {
		return this.account;
	}

	public getAccountOrThrow(): AccountModel {
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
		localStorage.removeItem(this.userIdKey);
		this.account = null;
		return Promise.resolve();
	}
}
