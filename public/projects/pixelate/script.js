// Your code here
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

let chosenColor = "pink";

function colorize(event) {
  const clickTarget = event.target;
  if(clickTarget.tagName !== 'TD'){
    return
  }
  if (clickTarget.className.length) {
    clickTarget.className = "";
  }else{
    clickTarget.className = chosenColor;
  }
}

function addMouseOver(){
  table.addEventListener('mouseover', colorize)
}
function removeMouseOver(){
  table.removeEventListener('mouseover', colorize)
}
const addRowButton = document.getElementById("add-row");
const colorOption = document.getElementsByTagName("select")[0];

addRowButton.addEventListener("click", makeRow);
table.addEventListener("click", colorize);
table.addEventListener('mousedown', addMouseOver)
table.addEventListener('mouseup', removeMouseOver)

colorOption.addEventListener("change", function (event) {
    chosenColor = event.target.value;
});
