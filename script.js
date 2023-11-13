// initially create grid to have the memory game
// have 4 levels of the game
// include time duration to choose whether game is won or lost
// make it interactive by inputing name from the player


//the state of the grid
let reveled = 0;
let activeBox = null;
let endMove = false;

//select the main grid 
const containerEl = document.querySelector(".container");

//create a constant variable which is an array to have 8 colors
const colors = ["red","orange","yellow","green","purple","blue","pink","teal"];
 
//to assign each box with random color
const colorsPickList = [...colors,...colors];
//console.log(colorsPickList)

const boxCount = colorsPickList.length;

//give colors to each box
for (let i = 0; i < boxCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPickList.length);
    const color = colorsPickList[randomIndex];
    const box = showBox(color);
    colorsPickList.splice(randomIndex, 1);

  }

const eachBox = document.querySelector(".box");

function showBox(color){
    eachBox.setAttribute("data-color",color);
    eachBox.setAttribute("color-revealed","false");
    eachBox.addEventListener("click",()=>{
        const revealed = eachBox.getAttribute("color-revealed");
        if(endMove || revealed==="true" || eachBox == activeBox){
         return;
        }
        //reveal the color
        eachBox.style.backgroundColor = color;

        if (!activeBox) {
            activeBox = eachBox;
            return;
          }


    })

}

