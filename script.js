function cambiarColor(numeroDiv) {
  var div = document.getElementById("div" + numeroDiv);
  if (div.style.backgroundColor === "lightblue") {
    div.style.backgroundColor = "lightpink";
  } else if (div.style.backgroundColor === "lightgreen") {
    div.style.backgroundColor = "lightyellow";
  } else {
    div.style.backgroundColor = "lightblue";
  }
}
