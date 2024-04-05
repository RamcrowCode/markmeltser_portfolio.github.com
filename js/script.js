var nav = document.getElementsByClassName("mininav");
var topics = document.querySelectorAll("h2");

window.addEventListener("load", () => {
  topics.forEach((element) => {
    element.id = element.innerText.replaceAll(" ", "").replace('"', '').replace(':', '');
    nav[0].innerHTML += "<a href=" + "#" + element.innerHTML.replaceAll(" ", "").replace('"', '').replace(':', '') + "> <h3>" + element.innerText + "</h3> </a>";
  });
});
