/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitData = [
  {
    title: "Length (Meter/Feet)",
    metric: "meter",
    imperial: "feet",
    ratio: 3.281
  },
  {
    title: "Volume (Liters/Gallons)",
    metric: "liters",
    imperial: "gallons",
    ratio: 0.264
  },
  {
    title: "Mass (Kilograms/Pounds)",
    metric: "kilos",
    imperial: "pounds",
    ratio: 2.204
  }
];

const inputBox = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");
const unitContentEl = document.getElementById("unit-content");

inputBox.addEventListener("input", function () {
  inputBox.value = this.value;
  renderUnitCards();
});

function getUnitCard(title, metric, imperial, ratio, unitVal) {
  const metricResult = (unitVal / ratio).toFixed(3);
  const imperialResult = (unitVal * ratio).toFixed(3);
  return `
  <div class="unit-card">
    <h3 class="card-title">${title}</h3>
    <p class="card-desc">
      ${unitVal} ${metric} = ${imperialResult} ${imperial} | ${unitVal} ${imperial} = ${metricResult} ${metric}
    </p>
  </div>
  `;
}
function renderUnitCards() {
  console.log("call renderUnitCards()");
  let cards = "";
  for (let i = 0; i < unitData.length; i++) {
    cards += getUnitCard(
      unitData[i].title,
      unitData[i].metric,
      unitData[i].imperial,
      unitData[i].ratio,
      inputBox.value
    );
  }
  unitContentEl.innerHTML = cards;
}

convertBtn.addEventListener("click", () => renderUnitCards());

renderUnitCards();
// unitContentEl.innerHTML = getUnitCard(
//   "Length (Meter/Feet)",
//   "liters",
//   "gallons",
//   0.264,
//   inputBox.value
// );
