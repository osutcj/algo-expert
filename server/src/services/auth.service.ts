import * as authDatabase from '../database/auth.database';
import * as userDatabase from '../database/user.database';

export async function login(email: string, password: string) {
  return await authDatabase.login(email, password);
}

export async function register(email: string, password: string, name: string) {
  const userLoginData = await authDatabase.register(email, password);

  if (userLoginData && userLoginData.email) {
    const user = await userDatabase.addUser(userLoginData.email, name);

    return user;
  }

  return null;
}
