import { factory, primaryKey } from "@mswjs/data";

import type { Value } from "@mswjs/data/lib/glossary";

export const post = {
  id: primaryKey(String),
  title: String,
  body: String,
};

export type Post = Value<typeof post, {}>;

export const defaultPosts: Post[] = [
  {
    id: "0",
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem("msw-db") || "{}"));

export const persistDb = (model: Model) => {
  if (process.env.NODE_ENV === "test") return;
  const data = loadDb();
  data[model] = db[model];
  window.localStorage.setItem("msw-db", JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, unknown>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();
