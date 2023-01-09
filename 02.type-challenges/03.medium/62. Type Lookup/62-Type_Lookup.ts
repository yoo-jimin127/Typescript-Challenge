type LookUp<U extends { type: string }, T extends U['type']> = 
	U extends { type: T } ? U : never

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

  type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`