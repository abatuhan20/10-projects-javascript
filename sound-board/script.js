const sounds = [
    'mixkit-1',
    'mixkit-2',
    'mixkit-3',
    'mixkit-4',
    'mixkit-5',
    'mixkit-6'
];

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
        // sesleri çalıyor

    });

    document.body.appendChild(btn);
    // returns newly appended node

});

function stopSongs() {
    
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}