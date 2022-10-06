const colorSeed = document.getElementById("seed");
const colorScheme = document.getElementById("scheme");
const form = document.getElementById("form1");
const colors = document.getElementById("colors");
const rangeSlider = document.getElementById("range-slider");

function updateTextInput() {
  document.getElementById("textOutput").value = rangeSlider.value;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let postSeed = colorSeed.value.slice(1);
  let postScheme = colorScheme.value;
  let colorsAmount = rangeSlider.value;

  //FUNCTION TO FETCH COLOR SCHEME FROM THE COLOR API
  fetch(
    "https://www.thecolorapi.com/scheme?hex=${postSeed}&mode=${postScheme}&count=${colorsAmount}"
  )
    .then((response) => response.json())
    .then((data) => {
      let colorHtml = "";
      data.colors
        .map((color) => {
          colorHtml += `
          <div class="colours1">
           <div class="color-div" style="background-color: ${color.hex.value};"></div>
           <div class="color-hex"><p>${color.hex.value}</p></div>
       </div>
       `;
        })
        .join("");
      colors.innerHTML = colorHtml;
    });
});

//Calling fetchColor function on form submit
