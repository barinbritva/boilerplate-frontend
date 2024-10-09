import {Account} from '../entities/Account';

export async function loadAccount(): Promise<Account> {
	const account = new Account('1', 'anonymous', '', false);

	return Promise.resolve(account);
}
