import * as contestDatabase from '../database/contest.database';

export async function getContest() {
  return await contestDatabase.getContests();
}

export async function getById(id: string) {
  return await contestDatabase.getById(id);
}

export async function addContest(contest: Contest) {
  return await contestDatabase.addContest(contest);
}

export async function deleteContest(id: string) {
  await contestDatabase.deleteContest(id);
}
