// Need to work on this a bit more

function citySelector(event) {
  if (event.target.value.length > 0) {
  }
  if (event.target.value === "paris") {
    alert(`${parisTime}`);
  }
  if (event.target.value === "tokyo") {
    alert(`${toykoTime}`);
  }
  if (event.target.value === "sydney") {
    alert(`${sydneyTime}`);
  }
}

let parisTime = moment()
  .tz("Europe/Paris")
  .format("[It is currently] dddd, MMMM Do, YYYY hh:mm A [Europe/Paris.]");

let toykoTime = moment()
  .tz("Asia/Tokyo")
  .format("[It is currently] dddd, MMMM Do, YYYY hh:mm A [Asia/Tokyo.]");

let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("[It is currently] dddd, MMMM Do, YYYY hh:mm A [Australia/Sydney.]");

let citySelection = document.querySelector("#cities");
citySelection.addEventListener("change", citySelector);
