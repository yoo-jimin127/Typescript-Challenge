// api url
let url = 'https://jsonplaceholder.typicode.com/users';

// dom
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let address = document.querySelector('#address');

// user data
let user = {};

function startApp() {
    axios
        .get(url)
        .then(function (res) {
            console.log(res);
            user = res.data;

            // username, email, address
            console.log(user);
            username.innerText = user[0].name;
            email.innerText = user[0].email;
            address.innerText = user[0].address.street;
        })
        .catch(function (err) {
            console.log(err);
        })
}

startApp();