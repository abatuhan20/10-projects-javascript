function createHeart() {
    const heart = document.createElement('div');
    
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "vw";
    // vw burada view for widths yani enine doğru randomize ettiriyor
    // kalplerin yatay eksene dağılması için

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    // Kalplerin düşme saniyelerini değiştiriyor kimisi 2 saniyede kimisi 5 saniyede düşüyor
    // s ise secondu belirtiyor

    heart.innerText="💜"

    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },5000);
    // Biriken kalpleri kaldırıyor
}

setInterval(createHeart, 300);
