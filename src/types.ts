export enum Languages {
  RU = `RU`,
  EN = `EN`
};

export enum Levels {
  HOT = `HOT`,
  INTERMEDIATE = `INTERMEDIATE`,
  ADVANCED = `ADVANCED`,
  HARDCORE = `HARDCORE`,
  ACADEMIC = `ACADEMIC`
};

export interface Card {
  id: number,
  title: string,
  author: string,
  level: Levels,
  language: Languages
};
