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

const CONTESTS_COLLECTION_NAME = 'contests';

export async function getContests() {
  try {
    const contestsQuery = query(
      collection(firestore, CONTESTS_COLLECTION_NAME),
    );

    const snapshot = await getDocs(contestsQuery);

    const contests: Contest[] = [];
    snapshot.forEach(doc => {
      contests.push({ ...(doc.data() as Contest), id: doc.id });
    });

    return contests;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function getById(id: string) {
  try {
    const contest = await getDoc(doc(firestore, CONTESTS_COLLECTION_NAME, id));

    if (contest) {
      return { ...(contest.data() as Contest), id: contest.id };
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function addContest(contest: Contest) {
  try {
    const contestDoc = await addDoc(
      collection(firestore, CONTESTS_COLLECTION_NAME),
      contest,
    );

    if (contestDoc) {
      return { ...contestDoc, id: contestDoc.id };
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function deleteContest(id: string) {
  try {
    await deleteDoc(doc(firestore, CONTESTS_COLLECTION_NAME, id));
  } catch (error) {
    console.log(error);
  }

  return null;
}
