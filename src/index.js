// Need to work on this a bit more

// function citySelector(event) {
//   if (event.target.value.length > 0) {
//   }
//   if (event.target.value === "paris") {
//     alert(`${parisTime}`);
//   }
//   if (event.target.value === "sydney") {
//     alert(`${toykoTime}`);
//   }
//   if (event.target.value === "sydney") {
//     alert(`${sydneyTime}`);
//   }
// }

// let parisTime = moment()
//   .tz("Europe/Paris")
//   .format("[It is currently] dddd, MMMM Do, YYYY hh:mm A [Europe/Paris.]");

// let toykoTime = moment()
//   .tz("Asia/Tokyo")
//   .format("[It is currently] dddd, MMMM Do, YYYY hh:mm A [Asia/Tokyo.]");

// let sydneyTime = moment()
//   .tz("Australia/Sydney")
//   .format("[It is currently] dddd, MMMM Do, YYYY hh:mm A [Australia/Sydney.]");

// let citySelection = document.querySelector("#cities");
// citySelection.addEventListener("change", citySelector);

function refreshTime() {
  // NY Timing
  let nyElement = document.querySelector("#ny");
  if (nyElement) {
    let nyDate = nyElement.querySelector(".date-row1");
    let nyTimeElement = nyElement.querySelector(".time-row1");
    let nyTime = moment();

    nyDate.innerHTML = nyTime.format("MMMM Do, YYYY");
    nyTimeElement.innerHTML = nyTime
      .tz("America/New_York")
      .format("hh:mm:ss [<small>]A[</small>]");
  }

  // Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDate = berlinElement.querySelector(".date-row2");
    let berlinTimeElement = berlinElement.querySelector(".time-row2");
    let berlinTime = moment();

    berlinDate.innerHTML = berlinTime.format("MMMM Do, YYYY");
    berlinTimeElement.innerHTML = berlinTime
      .tz("Europe/Berlin")
      .format("hh:mm:ss [<small>]A[</small>]");
  }

  //Tokyo Timezone
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date-row3");
    let tokyoTimeElement = tokyoElement.querySelector(".time-row3");
    let tokyoTime = moment();

    tokyoDate.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime
      .tz("Asia/Tokyo")
      .format("hh:mm:ss [<small>]A[</small>]");
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date-row4");
    let sydneyTimeElement = sydneyElement.querySelector(".time-row4");
    let sydneyTime = moment();

    sydneyDate.innerHTML = sydneyTime.format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime
      .tz("Australia/Sydney")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
}
function updateCityDisplay(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date-row1">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time-row1">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/"> All cities</a>`;
}

refreshTime();
setInterval(refreshTime, 1000);

let citiesSelect = document.querySelector("#cityList");

citiesSelect.addEventListener("change", updateCityDisplay);
