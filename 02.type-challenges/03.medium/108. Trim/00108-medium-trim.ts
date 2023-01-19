// ============= Test Cases =============
import type { Equal, Expect } from '../../test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type TrimTarget = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${TrimTarget}${infer R}` | `${infer R}${TrimTarget}` 
  ? Trim<R> : S;
