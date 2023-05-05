import { startMenu } from "./start";

export function createEndScreen(winner) {
  const main = document.querySelector("main");

  const endingContainer = document.createElement("div");
  endingContainer.setAttribute("id", "end-screen");

  const winnerSection = document.createElement("section");
  winnerSection.setAttribute("id", "winner-section");

  const winnerBefore = document.createElement("p");
  winnerBefore.textContent = "The winner is:";

  const winnerName = document.createElement("p");
  winnerName.setAttribute("id", "winner-name");
  winnerName.textContent = winner;

  winnerSection.append(winnerBefore, winnerName);

  const playAgain = document.createElement("button");
  playAgain.setAttribute("id", "play-again-btn");
  playAgain.textContent = "Play Again?";

  playAgain.addEventListener("click", () => playAgainListener());

  endingContainer.append(winnerSection, playAgain);
  main.appendChild(endingContainer);
}

function playAgainListener() {
  const main = document.querySelector("main");
  const endingContainer = document.getElementById("end-screen");

  main.removeChild(endingContainer);
  startMenu();
}
