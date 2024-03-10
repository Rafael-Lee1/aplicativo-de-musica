const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

function playSong(song) {
    audio.src = song;
    audio.play();
}

// Adicione mais músicas à playlist aqui
