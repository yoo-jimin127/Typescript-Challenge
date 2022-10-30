function fetchItems(): string[] {
    var items = ['a', 'b', 'c']
    return items;
}

var result = fetchItems();

function fetchItemsAsync(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c']
    return new Promise(function (resolve) {
        resolve(items);
    });
}

fetchItemsAsync();