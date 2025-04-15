let currentName = "";

function playRandomAudio() {
  const random = audioList[Math.floor(Math.random() * audioList.length)];
  currentName = random.name;
  document.getElementById("name-display").textContent = "";
  document.getElementById("result").textContent = "";
  const player = document.getElementById("player");
  player.src = random.file;
  player.play();

  // 再生後に入力欄に自動フォーカス
  setTimeout(() => {
    document.getElementById("name-input").focus();
  }, 100);
}

function showAnswer() {
  document.getElementById("name-display").textContent = currentName;
}

function checkAnswer() {
  const input = document.getElementById("name-input").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!currentName) {
    resultDiv.textContent = "まず音声を再生してください。";
    resultDiv.style.color = "gray";
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

function resetApp() {
  currentName = "";
  document.getElementById("name-input").value = "";
  document.getElementById("name-display").textContent = "";
  document.getElementById("result").textContent = "";

  const player = document.getElementById("player");
  player.pause();
  player.currentTime = 0;
}

// キーボード操作対応
document.addEventListener("keydown", function(event) {
  const input = document.getElementById("name-input");

  switch (event.code) {
    case "Enter":
    case "Space":
      playRandomAudio();
      setTimeout(() => input.focus(), 100);
      event.preventDefault();
      break;
    case "KeyA":
      showAnswer();
      break;
    case "KeyC":
      checkAnswer();
      break;
    case "KeyR":
      resetApp();
      break;
  }
});
