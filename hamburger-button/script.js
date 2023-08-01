const btn = document.getElementById('btn')  
const nav = document.getElementById('nav')

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
    //The toggle() method of the DOMTokenList interface removes an existing token from the list
    //and returns false. If the token doesn't exist it's added and the function returns true.
})