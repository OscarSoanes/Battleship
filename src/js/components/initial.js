import GitHub from "../../assets/github.svg";

export function start() {
  const header = buildHeader();

  const main = document.createElement("main");

  const footer = buildFooter();

  document.body.append(header, main, footer);
}

function buildHeader() {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "BATTLESHIPS";

  header.appendChild(heading);
  return header;
}

function buildFooter() {
  const footer = document.createElement("footer");

  const madeBy = document.createElement("p");
  madeBy.textContent = "Made by Oscar Soanes, 2023";

  const linkToGitHub = document.createElement("a");
  linkToGitHub.href = "https://github.com/OscarSoanes";

  const githubImage = new Image();
  githubImage.src = GitHub;

  linkToGitHub.appendChild(githubImage);

  footer.append(madeBy, linkToGitHub);
  return footer;
}
