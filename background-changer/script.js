const btn=document.getElementById("btn");
btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
    console.log(randomBg());

});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    // backgroundları randomize ediyor 360 tane
    // Bu satırdaki ' işareti ` aslında bu işaret alt gr ile yapılıyor. Literal işaretçisi
    // The hsl() functional notation expresses an sRGB color according to its hue, saturation,
    // and lightness components. An optional alpha component represents the color's transparency.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
  }