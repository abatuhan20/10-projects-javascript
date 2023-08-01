const imgs = document.getElementById("imgs");
const img = document.querySelectorAll('#imgs img');
// imgs idsi ve img geçen şeyleri yakaladı

let idx = 0;

function run () {
    idx++;
    if(idx > img.length-1) {
        idx=0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
    // Bu yazım şeklinde ` ile $ sonrası {} curly brackets unutma
    // Yatay gideceği için X ekseninde translate etmek gerekiyor
    

}
setInterval(run,2000)
