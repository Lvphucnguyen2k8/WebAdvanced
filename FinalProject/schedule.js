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
  //   let time = new Date().getHours();
  //   let messageText = "hello";
  //   let image = "https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg";

  //   let eventMessageJS = document.getElementById("eventMessage");
  //   let eventImageJS = document.getElementById('eventImage');
  //   let time1 = [sporttime, wakeuptime, lunchtime, sleeptime, noon, evening];
  //   let eventMessage1 = ["Let's play sport!","Wake up!","Let's have some lunch!","Have a good sleep!","Good evening","Good afternoon"];
  //   let eventImage = ["https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg",
  //   "https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/how-to-wake-up-early.png","https://images-na.ssl-images-amazon.com/images/I/71pJu3A8EML._AC_SL1498_.jpg",
  //   "https://img.freepik.com/free-vector/little-boy-lying-bed-counting-sheep_74855-7582.jpg?size=338&ext=jpg",
  //   "https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-mediumSquareAt3X.jpg",
  //   "https://earthsky.org/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
  // ]
  // let eventMessageColor = ["white","black","black","black","black","white","white",];
// console.log(eventImage.length);
// console.log(time1.length);
//console.log(time1);

// for ( let i = 0; i < time1.length; i++) {
//    if ( time == time1[i]) {
//        console.log("ZZZZZZZZZZZZZZZ");
//          console.log(time);
//         console.log(time1[i]);
//         document.getElementById("eventMessage").innerText = eventMessage1;
//         document.getElementById("eventMessage").innerText = "eventMessage1";
//        document.getElementById("eventImage").src = eventImage;
//    }
//    else {
//         console.log("YYYYYYYYY");
//         document.getElementById("eventMessage").innerText = "Good morning";
//         document.getElementById("eventImage").src = "https://simplifaster.com/wp-content/uploads/2017/05/Sunshine-Vitamin-D.jpg";
//       }
// }
  //eventMessageJS.innerText = messageText;
  // eventImageJS.src = image;
  // eventMessageJS.style.color = eventMessageColor;
  
  // showCurrentTime();
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

function confirm() {
//  localStorage.clear();
  let confirm_time = document.getElementById("appt").value;
  let confirm_content = document.getElementById("content").value;
  localStorage.setItem("confirm_time_ls", "confirm_time");
  localStorage.setItem("confirm_content_ls", "confirm_content");

}
function localStorage1() {
  let eventAddedJS = document.getElementById("eventAdded");
  localStorage.getItem("confirm_time_ls");
  localStorage.getItem("confirm_content_ls");
  let addEvent = document.createElement("h2");
  addEvent.innerText = confirm_time + confirm_content;
  eventAddedJS.appendChild("addEvent");
}
