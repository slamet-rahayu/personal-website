var techstack = [
  { name: "React", logo: "./images/react-logo.png" },
  { name: "Angular", logo: "./images/angular-logo.png" },
  { name: "React Native", logo: "./images/react-native-logo.png" },
  { name: "Express Js", logo: "./images/express-js-logo.png" },
  { name: "Python", logo: "./images/python-logo.jpg" },
  { name: "Springboot", logo: "./images/spring-boot-logo.png" },
  { name: "PostgreSQL", logo: "./images/postgresql-logo.jpg" },
  { name: "MongoDB", logo: "./images/mongodb-logo.png" },
];

var techStackContainer = document.querySelector('.tech-stack-cards');
techstack.forEach(function(tech) {
  var card = document.createElement('div');
  card.className = 'glass-card';
  card.innerHTML = `
    <img width="100" height="100" src="${tech.logo}" alt="${tech.name} logo">
    <p>${tech.name}</p>
  `;
  techStackContainer.appendChild(card);
});

const audio = document.getElementById("audioPlayer");
const seekSlider = document.getElementById("seek_slider");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function playAudio() {
  audio.play();
  document.getElementById("playBtn").src = "./svg/pause-svgrepo-com.svg";
  isPlaying = true;
}

function pauseAudio() {
  audio.pause();
  document.getElementById("playBtn").src = "./svg/play-svgrepo-com.svg";
  isPlaying = false;
}

// Format waktu jadi mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}

// Update UI saat metadata sudah dimuat
audio.addEventListener("loadedmetadata", () => {
  seekSlider.max = Math.floor(audio.duration);
  durationLabel.textContent = formatTime(audio.duration);
});

// Update progress bar dan waktu saat diputar
audio.addEventListener("timeupdate", () => {
  seekSlider.value = Math.floor(audio.currentTime);
  currentTimeLabel.textContent = formatTime(audio.currentTime);
});

// Update posisi lagu saat user geser slider
seekSlider.addEventListener("input", () => {
  audio.currentTime = seekSlider.value;
});

$(document).ready(function() {
  $("#openSidebar").click(() => {
    $("#sidebar").removeClass("d-none-mobile");
    $("#appbar").addClass("d-none-mobile");
  });
  $("#closeSidebar").click(() => {
    $("#sidebar").addClass("d-none-mobile");
    $("#appbar").removeClass("d-none-mobile");
  });
});
