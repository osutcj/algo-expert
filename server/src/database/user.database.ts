import app from '../firebase';
import {
  getFirestore,
  addDoc,
  collection,
  query,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

const firestore = getFirestore(app);

const USERS_COLLECTION_NAME = 'users';

export async function getUsers() {
  try {
    const usersQuery = query(collection(firestore, USERS_COLLECTION_NAME));

    const snapshot = await getDocs(usersQuery);

    const users: User[] = [];
    snapshot.forEach(doc => {
      users.push({ ...(doc.data() as User), id: doc.id });
    });

    return users;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function getById(id: string) {
  try {
    const user = await getDoc(doc(firestore, USERS_COLLECTION_NAME, id));

    if (user) {
      return { ...user.data(), id: user.id };
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function addUser(email: string, name: string) {
  try {
    const user = await addDoc(collection(firestore, USERS_COLLECTION_NAME), {
      email,
      name,
    });

    if (user) {
      return { email, name, id: user.id };
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function deleteUser(id: string) {
  try {
    await deleteDoc(doc(firestore, USERS_COLLECTION_NAME, id));
  } catch (error) {
    console.log(error);
  }

  return null;
}
