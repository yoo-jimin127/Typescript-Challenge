type TupleToObject<T extends readonly (string | number | boolean)[]> = {
    [K in T[number]]: K;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
const result: TupleToObject<typeof tuple>;