import app from '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(app);

export async function login(email: string, password: string) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    if (user) {
      return user.user;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function register(email: string, password: string) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    if (user) {
      return user.user;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
