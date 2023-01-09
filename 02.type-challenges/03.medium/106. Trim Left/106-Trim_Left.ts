type TrimLeft<S extends string> = 
	S extends `${' ' | '\n' | '\t'}${infer Right}` ? TrimLeft<Right> : S;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '