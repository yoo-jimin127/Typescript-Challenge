interface DropDownItem<T> {
    value: T;
    selected: boolean;
}

const emails: DropDownItem<string>[] = [
    {value: 'naver.com', selected: true},
    {value: 'gmail.com', selected: false},
    {value: 'hanmail.net', selected: false},
];

const numberOfProducts: DropDownItem<number>[] = [
    {value: 1, selected: true},
    {value: 2, selected: false},
    {value: 3, selected: false},
]

function createDropDownItem(item: DropDownItem<string> | DropDownItem<number>) {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

emails.forEach(function (email: {value: string; selected: boolean}) {
    const item = createDropDownItem(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
    const item = createDropDownItem(product);
})