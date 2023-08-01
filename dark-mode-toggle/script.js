const toggle = document.getElementById("toggle");

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark',
    e.target.checked);
});
// checkbox için bir listener yapısı oluşturuldu
// dark diye bir class ekledik dark mode için