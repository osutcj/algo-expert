interface Contest {
  id: string;
  name: string;
  problems: Problem[];
  start: Date;
  end: Date;
  ranking: User[];
}
