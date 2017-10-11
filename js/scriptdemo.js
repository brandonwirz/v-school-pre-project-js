var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

var myText = "";
for (var i = 0; i < colors.length; i++){
    myText += colors[i].toString() + " ";
}

document.getElementById("colorNames").innerHTML = myText;
document.getElementById("colorNames").style.fontWeight = 'bold';

function howManyColors(){
  //return colors.length;
     var howManyColors = colors.length;
     document.getElementById("numLength").innerHTML = "There are now " + howManyColors + " colors in my array!";
}

document.getElementById("button2").addEventListener("click", favColor);
function favColor() {
    document.getElementById("favColor").innerHTML = "My favorite color is " + colors[4] + "!";

}

document.getElementById("button3").addEventListener("click", favColorTimes);
function favColorTimes() {
    colors.push("Lime", "Magenta", "Fuchsia", "Purple");
    document.getElementById("favColorTimes").innerHTML = colors.join(", ") ;

}

//condFunction
document.getElementById("button4").addEventListener("click", colorChange);
function colorChange() {
//Switch statment better/easier to read than if/else statement
  var body = document.querySelector("body");

  switch(body.style.backgroundColor){
      case 'red':
          body.style.backgroundColor = 'orange';
          break;
      case 'orange':
          body.style.backgroundColor = 'yellow';
          break;
      case 'yellow':
          body.style.backgroundColor = 'green';
          break;
      case 'green':
          body.style.backgroundColor = 'blue';
          break;
      case 'blue':
          body.style.backgroundColor = 'indigo';
          break;
      case 'indigo':
          body.style.backgroundColor = 'violet';
          break;
      case 'violet':
          body.style.backgroundColor = 'white';
          break;
      default:
          body.style.backgroundColor = 'red';
        }
  }

function stopProp(){
  //event.stopPropagation();
}
