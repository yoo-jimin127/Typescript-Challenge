interface Email {
    value: string;
    selected: boolean;
}

const emails: Email[] = [
    {value: 'naver.com', selected: true},
    {value: 'gmail.com', selected: false},
    {value: 'hanmail.net', selected: false},
];

interface ProductNumber {
    value: number;
    selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
    {value: 1, selected: true},
    {value: 2, selected: false},
    {value: 3, selected: false},
]

function createDropDownItem(item: {value: string; selected: boolean} | { value: string; selected: boolean}) {
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