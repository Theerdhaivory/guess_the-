var guess= 0
var y = Math.floor(Math.random()* 10 + 1);

var x = document.getElementById("guessField").value;

function submit(){
if(x == y)
{
alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
           + guess + "GUESS ")
    guess= 1;
}
  

else if (x > y)
{
guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}

else
{
guess++;
alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
}

function playagain(){
     y = Math.floor(Math.random()* 10 + 1);
}