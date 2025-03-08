let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "🇺🇸 Dakota Raul Hancock 🇺🇸";
let place = "United States of America";

document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} ${author} <br> ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;