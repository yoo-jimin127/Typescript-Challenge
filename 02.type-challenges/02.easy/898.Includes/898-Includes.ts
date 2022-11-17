type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

// expected to be `false`
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;
