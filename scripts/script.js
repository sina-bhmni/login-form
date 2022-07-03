// form.addEventListener('mouseover', function() {
//     input.value = 'sina'

// })

// form.addEventListener('mouseout', function() {
//     input.value = ''
// })


let username = document.querySelector("#username");
let password = document.querySelector('#password');
let circle = document.querySelector('#circle2')

let btn = document.querySelector("#btn");
btn.addEventListener('click', function() {
    username.value = '';
    password.value = '';
})


password.addEventListener('mouseover', function() {
    password.setAttribute('type', 'text');
})
password.addEventListener('mouseout', function() {
    password.setAttribute('type', 'password');
})