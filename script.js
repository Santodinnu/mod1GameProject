//create initial constants
//one for game container
const container = document.querySelector(".game-board");

//one for colors
const colors = ["red", "blue", "green", "yellow", "purple", "orange","aqua","brown"];
//creating an array to hold the colors array twice using spread operator
const colorsPicklist = [...colors, ...colors];

//initializing tile count using the length of total colors
let tileCount = colorsPicklist.length;

//starting of the game initial status are stored in variables
let revealedCount = 0; //
let activeTile = null;
let toCloseTile = false;

//the tiles are assigned with random colors from array using for loop
for(i=0;i<tileCount;i++){
  const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
  const color = colorsPicklist[randomIndex]; //giving random color to tile
  
  colorsPicklist.splice(randomIndex, 1); //removing the colors assigned using splice method 

  //calling the buildTile function
  const tile = buildTile(color); //color is passed as parameter to the function
  container.appendChild(tile);
  
}

function buildTile(color){
  const element = document.createElement("div");  
  element.classList.add("tile");
  element.setAttribute("color",color);
  element.setAttribute("color-revealed","false");

  return element;

}












