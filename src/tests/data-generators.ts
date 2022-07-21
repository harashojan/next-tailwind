// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Overrides = Record<string, any>;

export const productGenerator = (overrides?: Overrides) => ({
  id: "fda",
  name: "fda",
  createdAt: "fda",
  ...overrides,
});
