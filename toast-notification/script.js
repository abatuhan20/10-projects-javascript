const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', () => {
  createNotification();
});

function createNotification() {
    const notif = document.createElement
    ('div');

    notif.classList.add('toast');
    // notifin class ismini toast olarak verdim CSS te kullanayım diye
    // The classList property returns the CSS classnames of an element.
    // The classList property returns a DOMTokenList.
    // https://www.w3schools.com/jsref/prop_element_classlist.asp
    
    notif.innerText = "Slm slm slm";

    container.appendChild(notif);
    // The appendChild() method appends a node (element) as the last child of an element.
    // Bir listenin elemanını başka bir listeye son eleman olarak ekliyor.
    // https://www.w3schools.com/jsref/met_node_appendchild.asp

    setTimeout(() => {
        notif.remove();
    }, 3000);
    // 1 saniye = 1000 milisaniye
    // The setTimeout() method calls a function after a number of milliseconds.
    // https://www.w3schools.com/jsref/met_win_settimeout.asp


}