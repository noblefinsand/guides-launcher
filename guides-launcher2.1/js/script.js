//Event Listener for Canvas Search Box
const cSearch = document.getElementById("c-submit");

cSearch.addEventListener("click", () => {
  const cSearchVar = document.getElementById("c-input").value;
  const cURL =
    "https://community.canvaslms.com/t5/forums/searchpage/tab/message?filter=includeTkbs&q=" +
    cSearchVar +
    "&include_tkbs=true&collapse_discussion=true";

  //Search Canvas Button
  window.open(cURL), "_blank";
  cSearchVar = document.getElementById("c-input").value = "";
});
