let currentName = ""; // 再生された名前を保存

function playRandomAudio() {
  const random = audioList[Math.floor(Math.random() * audioList.length)];
  currentName = random.name;
  document.getElementById("name-display").textContent = ""; // 表示をクリア
  const player = document.getElementById("player");
  player.src = random.file;
  player.play();
}

function showAnswer() {
  document.getElementById("name-display").textContent = currentName;
}
