interface IChecker {
  file: File;
  command: string;
}

interface Problem {
  id: string;
  name: string;
  text: string;
  testCases: File[];
  checker: IChecker;
}
