const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener('click', () => {
    container.classList.add('active');
    // class ismine active ekledi
});

close.addEventListener('click', () => {
    container.classList.remove('active');
    // class isminden active çıkardı
});