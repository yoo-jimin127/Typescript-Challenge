type Chainable<O = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
    get(): O;
  };

declare const config: Chainable;

const resultChain = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface ResultChain {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}