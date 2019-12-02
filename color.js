var numofsquares=6;
var colors=generateRandomColors(numofsquares);
var squares=document.querySelectorAll(".square");
var  pickedcolor=pickColor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#messagedisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybutton=document.querySelector("#easybtn");
var hardbutton=document.querySelector("#hardbtn");

easybutton.addEventListener("click",function()
{
    hardbutton.classList.remove("selected");
    easybutton.classList.add("selected");
    numofsquares=3;
    colors=generateRandomColors(numofsquares);
    pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else
            squares[i].style.display="none"
    }

});

hardbutton.addEventListener("click",function()
{
    hardbutton.classList.add("selected");
    easybutton.classList.remove("selected");
    numofsquares=6;
    colors=generateRandomColors(numofsquares);
    pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";    }
});

resetButton.addEventListener("click",function()
{
 colors=generateRandomColors(numofsquares);
 pickedcolor=pickColor();
 colordisplay.textContent=pickedcolor;
 for(var i=0;i<squares.length;i++)
 {
     squares[i].style.backgroundColor=colors[i];
 }
 h1.style.backgroundColor="steelblue";
 messagedisplay.textContent="";
 resetButton.textContent="new colors"
});

colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor= colors[i];

    squares[i].addEventListener("click",function()
    {
        var clickedcolor=this.style.backgroundColor;

        if(clickedcolor===pickedcolor)
        {
          
            messagedisplay.textContent="correct";
            changecolor(pickedcolor);
            h1.style.backgroundColor=pickedcolor;
            resetButton.textContent="play Again??"
        }
        else{
            messagedisplay.textContent="try again";
            this.style.backgroundColor="#232323";
        }
    });
}

function changecolor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var  random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomcolors());
    }
    return arr;
}

function randomcolors()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}