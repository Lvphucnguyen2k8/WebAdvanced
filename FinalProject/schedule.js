let wakeuptime = 7;
let noon = 12;
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
showCurrentTime();
let updateClock = function() 
{
  let time = new Date().getHours();
  let messageText = "hello";
  let image = "https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg";
  if (time < noon)
  {
    image = "https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/how-to-wake-up-early.png";
    messageText = "Good morning!";
    color = "black";
  }
  else if (time >= evening)
  {
    image = "https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-mediumSquareAt3X.jpg";
    messageText = "Good evening!";
    color = "white";
  }
  else
  {
    image = "https://earthsky.org/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg";
    messageText = "Good afternoon!";
    color = "white";
  }

  console.log(messageText); 
  eventMessage.innerText = messageText;
  eventImage.src = image;
  eventMessage.style.color = color;
  
  showCurrentTime();
};
updateClock();

let oneSecond = 1000;
setInterval( updateClock, oneSecond);

function logout() {

  if (confirm("Ok to log out, Cancel to keep in your account")) {

    setTimeout(function () { alert("LOG OUT SUCCESSFUL!"); location.replace("login.html") }, 3000);

  }
} 

function openForm() {
  document.getElementById("form").style.display = "block";
}

function closeForm() {
  document.getElementById("form").style.display = "none";
}

let confirm_array = [];

function confirm() { 
  let confirm_timeJS = document.getElementById("appt").value;
  let confirm_contentJS = document.getElementById("content").value;
  let obj = JSON.parse('{"time": "'+ confirm_timeJS +'" , "content": "'+ confirm_contentJS +'" }')
  confirm_array.push(obj);
  localStorage.setItem("confirm_arrayls", JSON.stringify(confirm_array));

}
function localStorage1() {
  let eventAddedJS = document.getElementById("eventAdded");
  let confirm_timels = JSON.parse(localStorage.getItem("confirm_arrayls"));
  console.log(confirm_timels);
  let addEvent = document.createElement("h3");
  addEvent.innerText = confirm_timels.time;
  eventAddedJS.appendChild(addEvent);
}
