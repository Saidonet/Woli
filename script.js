
const startButton = document.getElementById("startButton");
const aboutButton = document.getElementById("aboutButton");
const worldSection = document.getElementById("world");
const notice = document.getElementById("notice");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

let noticeTimer;

function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("show");

  clearTimeout(noticeTimer);

  noticeTimer = setTimeout(() => {
    notice.classList.remove("show");
  }, 3000);
}

startButton.addEventListener("click", () => {
  showNotice("Dein Abenteuer beginnt bald! ⚔️");
});

aboutButton.addEventListener("click", () => {
  worldSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

console.log("Woli wurde erfolgreich geladen!");
