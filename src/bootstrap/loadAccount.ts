import {Account} from '../entities/Account';

export async function loadAccount(): Promise<Account> {
	let account = new Account('', 'anonymous', '', false);
	/* const userSerialized = window.localStorage.getItem('user');
  if (userSerialized) {
    try {
      const serverData = await restApi.getMe();
      const localData = JSON.parse(userSerialized);
      account = new Account(
        serverData.id,
        serverData.username,
        serverData.photoUrl || localData.photo_url,
        serverData.isAdmin
      );
    } catch (e) {
      // todo handle situation
    }
  } */

	return account;
}
