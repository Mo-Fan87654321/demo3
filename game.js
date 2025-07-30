const story = [
  { name: "Hero", text: "Where am I...? This place feels unfamiliar." },
  { name: "Hero", text: "I must find out what's going on." },
  { name: "Mysterious Voice", text: "You have been chosen..." },
  { name: "Hero", text: "Who's there?! Show yourself!" }
];

let currentIndex = 0;

const nameEl = document.getElementById("character-name");
const textEl = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-button");
const saveBtn = document.getElementById("save-button");
const loadBtn = document.getElementById("load-button");

const menuScreen = document.getElementById("menu-screen");
const gameContainer = document.getElementById("game-container");
const startBtn = document.getElementById("start-button");

function showDialogue(index) {
  if (index < story.length) {
    nameEl.textContent = story[index].name;
    textEl.textContent = story[index].text;
  } else {
    nameEl.textContent = "";
    textEl.textContent = "[End of Demo]";
    nextBtn.disabled = true;
  }
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  showDialogue(currentIndex);
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("rpg_save_index", currentIndex);
  alert("Game saved!");
});

startBtn.addEventListener("click", () => {
  menuScreen.style.display = "none";
  gameContainer.style.display = "block";
  currentIndex = 0;
  nextBtn.disabled = false;
  showDialogue(currentIndex);
});

loadBtn.addEventListener("click", () => {
  const savedIndex = localStorage.getItem("rpg_save_index");
  if (savedIndex !== null) {
    currentIndex = parseInt(savedIndex);
    menuScreen.style.display = "none";
    gameContainer.style.display = "block";
    showDialogue(currentIndex);
    alert("Game loaded!");
  } else {
    alert("No save data found.");
  }
});