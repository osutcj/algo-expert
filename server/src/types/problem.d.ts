interface IChecker {
  file: File;
  command: string;
}

interface Problem {
  id: string;
  name: string;
  text: string;
  testCases: {
    input: File[];
    output?: File[];
  };
  checker: IChecker;
}
