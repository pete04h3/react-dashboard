"use strict";

window.addEventListener("DOMContentLoaded", goFetch);

function goFetch() {
  console.log(goFetch);
  fetchJson();
}

async function fetchJson() {
  let response = await fetch("https://foobar-exam.herokuapp.com/");
  let jsonData = await response.json();
  filterData(jsonData);
}

function filterData(jsonData) {
  console.log(jsonData);
  let taps = jsonData.taps;
  console.log(taps);

  taps.forEach(displayBeertaps, taps);
}

function calculateDiff(cap, lvl) {
  return (lvl / cap) * 100;
}

function displayBeertaps(taps) {
  let cap = taps.capacity;
  let lvl = taps.level;
  let tap_id = taps.id;
  console.log(cap, lvl);
  let percentage = calculateDiff(cap, lvl);
  console.log(percentage);
  const clone = document.querySelector("template").cloneNode(true).content;
  clone.querySelector("h4").textContent = percentage + "%" + " " + "id:" + tap_id;

  document.querySelector("#wrapper").appendChild(clone);
}
/* document.querySelector("#root > div.App > h4").textContent = percentage + "%" + " " + "id:" + tap_id; */
