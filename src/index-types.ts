export type user = {
  email: string;
  password: string;
  progress: {
    beginner: levelCategory.beginner;
    intermediate: levelCategory.intermediate;
    advanced: levelCategory.advanced;
    grandTotalScore: number;
  };
};

export type levelType = {
  name: string;
  description: string;
  category: string;
  task: string;
  solution: string;
//   level: string;
};

export enum levelCategory {
  beginner,
  intermediate,
  advanced,
}
