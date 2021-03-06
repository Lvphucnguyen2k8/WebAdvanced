let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let sleeptime = lunchtime + 2;
let sporttime;
let evening = 18;

let showCurrentTime = function()
{
    let clock = document.getElementById('clock');
 
    let currentTime = new Date();
 
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
 
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 

    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

let updateClock = function() 
{
    let time = new Date().getHours();
    let messageText;
    let image = "https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg";

    let eventMessageJS = document.getElementById("eventMessage");
    let eventImageJS = document.getElementById('eventImage');
    let eventMessage = ["Let's play sport!","Wake up!","Let's have some lunch!","Have a good sleep!","Good morning","Good evening","Good afternoon"];
    let eventImage = ["https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg",
    "https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/how-to-wake-up-early.png","https://images-na.ssl-images-amazon.com/images/I/71pJu3A8EML._AC_SL1498_.jpg",
    "https://img.freepik.com/free-vector/little-boy-lying-bed-counting-sheep_74855-7582.jpg?size=338&ext=jpg",
    "https://simplifaster.com/wp-content/uploads/2017/05/Sunshine-Vitamin-D.jpg",
    "https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-mediumSquareAt3X.jpg",
    "https://earthsky.org/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
  ]
  let eventMessageColor = ["white","black","black","black","black","white","white",]
  console.log(messageText); 
  eventMessageJS.innerText = messageText;
  eventImageJS.src = image;
  eventMessageJS.style.color = eventMessageColor;
  
  showCurrentTime();
};
updateClock();

let oneSecond = 1000;
setInterval( updateClock, oneSecond);


let sportButton = document.getElementById("sportTimeButton");

let sportEvent = function()
{
    if (sporttime < 0) 
    {
        sporttime = new Date().getHours();
        sportTimeButton.innerText = "Sport Time's Up!";
        sportTimeButton.style.backgroundColor = "red";
    }
    else
    {
        sporttime = -1;
        sportTimeButton.innerText = "Sport Time!";
        sportTimeButton.style.backgroundColor = "#222222";
    }
};

sportButton.addEventListener("click", sportEvent);
sportEvent(); 


let wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


let lunchTimeSelector =  document.getElementById("lunchTimeSelector");

let lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


let sleepTimeSelector =  document.getElementById("sleepTimeSelector");

let sleepEvent = function()
{
    sleeptime = sleepTimeSelector.value;
};

sleepTimeSelector.addEventListener("change", sleepEvent);

function logout() {

  if (confirm("Ok to log out, Cancel to keep in your account")) {

    setTimeout(function () { alert("LOG OUT SUCCESSFUL!"); location.replace("login.html") }, 3000);

  }
  
} 
function addEvent() {

}