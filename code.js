(function bwColorMorfer() {
  let colorDecimal = 0;
  const targetEl = document.getElementById("rainbowHeader");
  let reverse = false;
  const step = 65793 * 10; //rgb step from/to black & white; 16711680/255(red) + 65280/255(green) + 255/255(blue)
  const max = 16777215 * 0.5; // equals to FFFFFF; 0.5 multiplier is grey color
  const min = 0; // equals to 000000; black color
  setInterval(() => {
    colorDecimal += reverse ? -step : step;
    if (colorDecimal >= max || colorDecimal <= min) {
      reverse = !reverse;
    }
    targetEl.style.color = "#" + convertColorToString(colorDecimal);
  }, 100);

  function convertColorToString(color) {
    return color.toString(16).padStart(6, "0");
  }
})();
