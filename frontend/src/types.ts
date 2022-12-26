export type GQLQuery<T, K extends string> = {
  [key in K]: T;
};

export interface User {
  id: string;
  name: string;
}

export interface Todo {
  id: string;
  name: string;
  doneAt: string;
  userId: string;
}
