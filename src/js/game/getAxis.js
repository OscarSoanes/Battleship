export function getOrientation() {
  const orientationElement =
    document.getElementById("current-axis").textContent;
  const axis = orientationElement.slice(-1);

  switch (axis) {
    case "x": {
      return "horizontal";
    }
    case "y": {
      return "vertical";
    }
  }
}
