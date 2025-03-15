// -------------------------------------------
// Footer Year and Modification Date 

let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Raleigh";
let place = "Chamber of Commerce";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} ${author} ${place}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;