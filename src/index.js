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
  let nyDate = nyElement.querySelector(".date-row1");
  let nyTimeElement = nyElement.querySelector(".time-row1");
  let nyTime = moment();

  nyDate.innerHTML = nyTime.format("MMMM Do, YYYY");
  nyTimeElement.innerHTML = nyTime
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");

  // Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDate = berlinElement.querySelector(".date-row2");
  let berlinTimeElement = berlinElement.querySelector(".time-row2");
  let berlinTime = moment();

  berlinDate.innerHTML = berlinTime.format("MMMM Do, YYYY");
  berlinTimeElement.innerHTML = berlinTime
    .tz("Europe/Berlin")
    .format("hh:mm:ss [<small>]A[</small>]");

  //Tokyo Timezone
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date-row3");
  let tokyoTimeElement = tokyoElement.querySelector(".time-row3");
  let tokyoTime = moment();

  tokyoDate.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date-row4");
  let sydneyTimeElement = sydneyElement.querySelector(".time-row4");
  let sydneyTime = moment();

  sydneyDate.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime
    .tz("Australia/Sydney")
    .format("hh:mm:ss [<small>]A[</small>]");
}
refreshTime();
setInterval(refreshTime, 1000);
