import Warning from "../../assets/warning.svg";

export function errorContainer(message) {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("errorContainer");

  const warningIcon = new Image();
  warningIcon.src = Warning;

  const errorMsg = document.createElement("p");
  errorMsg.classList.add("error");
  errorMsg.textContent = message;

  errorContainer.append(warningIcon, errorMsg);

  return errorContainer;
}
