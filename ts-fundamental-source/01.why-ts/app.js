// api url
let url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/** 
 * @returns {Promise<User>} 
 * */
function fetchUser() {
    return axios.get(url);
}

fetchUser() .then(function (res) {
    console.log(res.name);
    console.log(res.email);
    console.log(res.address);
})

function startApp() {
    fetchUser()
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