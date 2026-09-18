function manageZoo() {

let zoo = document.getElementById("zoo");

let lionZone = document.getElementById("lionZone");
let elephantZone = document.getElementById("elephantZone");
let pandaZone = document.getElementById("pandaZone");

let output = document.getElementById("output");

// Parent Node
let parentNode = lionZone.parentNode.id;

// Child Nodes
let firstChild = zoo.children[0].id;
let secondChild = zoo.children[1].id;
let thirdChild = zoo.children[2].id;

// Sibling Nodes
let nextSibling = lionZone.nextElementSibling.id;
let previousSibling = pandaZone.previousElementSibling.id;

// Node Types
let elementNodeType = lionZone.nodeType;
let textNodeType = lionZone.firstChild.nodeType;

// Update Card Colors
lionZone.style.backgroundColor = "#FFE8CC";
elephantZone.style.backgroundColor = "#D8F3DC";
pandaZone.style.backgroundColor = "#E9D8FD";

// Update Titles
lionZone.querySelector("h2").innerHTML = "🦁 Updated Lion Habitat";
elephantZone.querySelector("h2").innerHTML = "🐘 Updated Elephant Habitat";
pandaZone.querySelector("h2").innerHTML = "🐼 Updated Panda Habitat";

// Display Output
output.innerHTML =

"<h2>🌿 Zoo Information</h2><br>" +

"<b>Parent Node:</b> " + parentNode + "<br><br>" +

"<b>First Habitat:</b> " + firstChild + "<br>" +
"<b>Second Habitat:</b> " + secondChild + "<br>" +
"<b>Third Habitat:</b> " + thirdChild + "<br><br>" +

"<b>Next Sibling:</b> " + nextSibling + "<br>" +
"<b>Previous Sibling:</b> " + previousSibling + "<br><br>" +

"<b>Element Node Type:</b> " + elementNodeType + "<br>" +
"<b>Text Node Type:</b> " + textNodeType + "<br><br>" +

"<b>Status:</b> Zoo information updated successfully ✅";

}

// =========================
// Search Animal
// =========================

function searchAnimal() {

let input = document.getElementById("searchBox").value.toLowerCase();

let zones = document.getElementsByClassName("zone");

for (let i = 0; i < zones.length; i++) {

let text = zones[i].innerText.toLowerCase();

if (text.includes(input)) {
zones[i].style.display = "block";
}
else {
zones[i].style.display = "none";
}

}

// Show all animals if search box is empty
if (input === "") {

for (let i = 0; i < zones.length; i++) {
zones[i].style.display = "block";
}

}

}