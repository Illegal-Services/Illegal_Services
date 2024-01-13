import { makeWebRequest } from "/Illegal_Services/js/makeWebRequest.js";

document.addEventListener("DOMContentLoaded", async function () {
  const htmlVisitorsCounterText = document.getElementById("visitors-counter-text");

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers,
    mode: "cors",
  };

  const response = await makeWebRequest("https://illegal-services.com/counter", requestOptions);
  if (response.ok) {
    htmlVisitorsCounterText.innerHTML = `Total visitors since 13/01/24 (beta):<br>[${await response.text()}]`;
  }
});
