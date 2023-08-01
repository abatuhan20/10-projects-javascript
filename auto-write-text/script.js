const text = "Arda Batuhan AYDIN";

let index = 0;

function writeText() {
    document.body.innerText = text.slice (0, index);
    // slice(start, end) Negatif sayılar arrayin sonundan seçiyor. startta
    // endde ise defaultu son eleman negatif sondan seçiyor
    // Yeni bir array olarak 0 dan indexe kadar verecek bana
    index++;
    if(index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 150);
// myInterval = setInterval(function, milliseconds);
// clearInterval(myInterval); çalışmasını durduruyor.
// Belli milisaniye içerisinde istediğim functionu tekrar tekrar çalıştırmaya yarıyor.
