const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');


lightMode.addEventListener('click', () => {
    localStorage.setItem('mode', 'light');
    document.querySelector('body').className = 'light';
})
darkMode.addEventListener('click', () => {
    localStorage.setItem('mode', 'dark');
    document.querySelector('body').className = 'dark';
})


if(localStorage.getItem('mode') !== 'light'){
    document.querySelector('body').className = 'dark';
}
else{
    document.querySelector('body').className = 'light';
}