import { exec } from 'child_process';
import * as userDatabase from '../database/user.database';

export async function getUsers() {
  return await userDatabase.getUsers();
}

export async function getById(id: string) {
  return await userDatabase.getById(id);
}

export async function addUser(email: string, name: string) {
  return await userDatabase.addUser(email, name);
}

export async function deleteUser(id: string) {
  await userDatabase.deleteUser(id);
}
