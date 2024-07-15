let playButton = document.getElementById("playButton");
const song = document.querySelectorAll(".child");
const image = document.querySelector(".scroll-images");
const songImg = document.querySelector(".songnavimg");
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".artist-name");
const mainArtist = document.querySelector(".artist");
console.log(mainArtist);
const mainSongImg = document.querySelector(".preview-image");
const mainName = document.querySelector(".singer-name");
const arr = [...song];
console.log(arr);

arr.forEach(function (value, index) {
  value.addEventListener("click", function (e) {
    const info = e.target.closest(".child");
    const data = info.dataset.song;
    // const image = info.dataset.img;
    const artist = info.dataset.name;
    console.log(data);
    console.log(info);
    if (info.classList.contains("pause")) {
      pauseMusic();
      info.classList.remove("pause");
    } else {
      playMusic(`songs/${data}.mp3`);
      songImg.style.background = `url(songs/${data}.jpg)`;
      // mainSongImg.src = `songs/${data}.jpg`;
      songImg.style.backgroundSize = "cover";
      songName.textContent = `${data}`;
      //   mainName.textContent = `${data}`;
      artistName.textContent = `${artist}`;
      //   mainArtist.textContent = `${artist}`;
      info.classList.add("pause");
    }
  });
});
let audio;

function playMusic(path) {
  audio = new Audio(path);
  console.log(audio);
  audio.play();
}
function pauseMusic() {
  audio.pause();
  console.log(audio);
}
