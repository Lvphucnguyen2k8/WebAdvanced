let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let sleeptime = lunchtime + 2;
let sporttime = -1;
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
    let messageText = "hello";
    let image = "https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg";

    let eventMessageJS = document.getElementById("eventMessage");
    let eventImageJS = document.getElementById('eventImage');
    let time1 = [sporttime, wakeuptime, lunchtime, sleeptime, noon, evening];
    let eventMessage1 = ["Let's play sport!","Wake up!","Let's have some lunch!","Have a good sleep!","Good evening","Good afternoon"];
    let eventImage = ["https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg",
    "https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/how-to-wake-up-early.png","https://images-na.ssl-images-amazon.com/images/I/71pJu3A8EML._AC_SL1498_.jpg",
    "https://img.freepik.com/free-vector/little-boy-lying-bed-counting-sheep_74855-7582.jpg?size=338&ext=jpg",
    "https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-mediumSquareAt3X.jpg",
    "https://earthsky.org/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
  ]
  let eventMessageColor = ["white","black","black","black","black","white","white",];
// console.log(eventImage.length);
// console.log(time1.length);
//console.log(time1);

for ( let i = 0; i < time1.length; i++) {
   if ( time == time1[i]) {
       console.log("ZZZZZZZZZZZZZZZ");
         console.log(time);
        console.log(time1[i]);
        document.getElementById("eventMessage").innerText = eventMessage1;
        document.getElementById("eventMessage").innerText = "eventMessage1";
       document.getElementById("eventImage").src = eventImage;
   }
   else {
       if (time < time1[i]) {
        console.log("YYYYYYYYY");
        document.getElementById("eventMessage").innerText = "Good morning";
        document.getElementById("eventImage").src = "https://simplifaster.com/wp-content/uploads/2017/05/Sunshine-Vitamin-D.jpg";
       }
       if (time >= time1[i]) {
        document.getElementById("eventMessage").innerText = "";
        document.getElementById("eventImage").src = ""
       }
       else {
        document.getElementById("eventMessage").innerText = "";
        document.getElementById("eventImage").src = ""
       }
     }
}
  //eventMessageJS.innerText = messageText;
  eventImageJS.src = image;
  eventMessageJS.style.color = eventMessageColor;
  
  showCurrentTime();
};
updateClock();

let oneSecond = 1000;
setInterval( updateClock, oneSecond);


let sportButton = document.getElementById("sportTimeButton");

// let sportEvent = function()
// {
//     if (sporttime < 0) 
//     {
//         sporttime = new Date().getHours();
//         sportTimeButton.innerText = "Sport Time's Up!";
//         sportTimeButton.style.backgroundColor = "red";
//     }
//     else
//     {
//         sporttime = -1;
//         sportTimeButton.innerText = "Sport Time!";
//         sportTimeButton.style.backgroundColor = "#222222";
//     }
// };

sportButton.addEventListener("click", sportEvent);

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
  let addevent = prompt("Please choose a time you want to set!", "Ex: 8AM - 9AM")
  let add_time = ["1AM-2AM","2AM-3AM","4AM-5AM","5AM-6AM","6AM-7AM","7AM-8AM","8AM-9AM","9AM-10AM","10AM-11AM","11AM-12PM","12PM-1PM","1PM-2PM","2PM-3PM","3PM-4PM","4PM-5PM","5PM-6PM","6PM-7PM","7PM-8PM","8PM-9PM","9PM-10PM","10PM-11PM","11PM-12AM","12AM-1AM"];
      for ( i = 0; i < add_time.length; i++) {
        switch(addevent) {
            case addevent == add_time[i]: 
                let addevent1 = document.createElement("p").innerText = addevents;
                prompt("Please write something to note for this alarm!", "Ex: Good Morning!");
                document.body.appendChild("addevent1");
            }
      }
  }