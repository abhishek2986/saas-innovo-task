const audioPlayer = document.getElementById("audioPlayer");
const currentSong = document.getElementById("currentSong");
const playlistElement = document.getElementById("playlist");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const shuffleBtn = document.getElementById("shuffle");
const addSongBtn = document.getElementById("addSong");
const songNameInput = document.getElementById("songName");
const songPathInput = document.getElementById("songPath");
const SongInput_Image = document.getElementById("songImg");

// Playlist Array
let playlist = [
  {
    name: "Namo Namo Shankara",
    path: ".../../../../EXTRA JAVASCRIPT TASKS/Songs/Namo Namo Shankara(PagalWorld).mp3",
    img: ".../../../../HTML Practical Tasks/images/bholenath.jpg",
  },
  {
    name: "Laut Ke Tujhko Aana Hai - Ganapati Visarjan",
    path: ".../../../../EXTRA JAVASCRIPT TASKS/Songs/Laut Ke Tujhko Aana Hai - Ganapati Visarjan 2025.mp3",
    img: ".../../../../HTML Practical Tasks/images/ganpati_visarjan.jpg",
  },
  {
    name: "Abhi Na Jao Chhod Kar - Ganapati Visarjan",
    path: ".../../../../EXTRA JAVASCRIPT TASKS/Songs/Abhi Na Jao Chhod Kar - Ganapati Visarjan.mp3",
    img: ".../../../../HTML Practical Tasks/images/ganpati1.jpg",
  },
];

// Store current playing song index
let currentIndex = 0;

// Load Song
function loadSong(index) {
  currentIndex = index;
  // https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3
  audioPlayer.src = playlist[index].path;
  songImage.src = playlist[index].img;
  currentSong.textContent = "Now Playing : " + playlist[index].name;
}

// Display Playlist
function displayPlaylist() {
  // Clear old playlist
  playlistElement.innerHTML = "";

  // Loop through playlist
  playlist.forEach(function (song, index) {
    let li = document.createElement("li");

    li.textContent = song.name + " ";

    // Click song to play
    li.onclick = function () {
      loadSong(index);

      playSong(function () {
        console.log(song.name + " Started");
      });
    };

    // Remove Button logic
    let removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";

    removeBtn.onclick = function (event) {
      // Prevent li click event
      event.stopPropagation();

      removeSong(index);
    };

    li.appendChild(removeBtn);

    playlistElement.appendChild(li);
  });
}

// Callback Functions

// Play Song
function playSong(callback) {
  audioPlayer.play();

  callback();
}

// Pause Song
function pauseSong(callback) {
  audioPlayer.pause();

  callback();
}

// Stop Song
function stopSong(callback) {
  audioPlayer.pause();

  audioPlayer.currentTime = 0;

  callback();
}

// Play Button event handler
playBtn.onclick = function () {
  playSong(function () {
    alert("Song Playing");
  });
};

// Pause Button event handler
pauseBtn.onclick = function () {
  pauseSong(function () {
    alert("Song Paused");
  });
};

// Stop Button event handler
stopBtn.onclick = function () {
  stopSong(function () {
    alert("Song Stopped");
  });
};

// Add Song event handler
addSongBtn.onclick = function () {
  let songName = songNameInput.value.trim();

  let songPath = songPathInput.value.trim();

  let input_Image = SongInput_Image.value.trim();

  if (songName === "" || songPath === "") {
    alert("Please Enter Song Name and Path");

    return;
  }

  // Add song into array
  playlist.push({
    name: songName,
    path: songPath,
    img: input_Image,
  });

  // Refresh playlist
  displayPlaylist();

  // Clear input boxes
  songNameInput.value = "";

  songPathInput.value = "";
};

// Remove Song ==========================

function removeSong(index) {
  playlist.splice(index, 1);

  // If playlist becomes empty
  if (playlist.length === 0) {
    audioPlayer.src = "";

    currentSong.textContent = "No Song Playing";
  } else {
    loadSong(0);
  }

  displayPlaylist();
}

// Shuffle Playlist
shuffleBtn.onclick = function () {
  playlist.sort(function () {
    return Math.random() - 0.5;
  });

  displayPlaylist();
};

// Initial Load
loadSong(currentIndex);

displayPlaylist();
