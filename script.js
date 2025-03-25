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
function checkAnswer() {
  const input = document.getElementById("name-input").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!currentName) {
    resultDiv.textContent = "まず音声を再生してください。";
    return;
  }

  if (input === currentName.toLowerCase()) {
    resultDiv.textContent = "✅ 正解！";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `❌ 不正解。正解は "${currentName}"`;
    resultDiv.style.color = "red";
  }
}
