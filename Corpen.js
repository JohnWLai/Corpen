//function to change gradients based on time
let gradientUpdate = () => {

  let currentTime = new Date();

  let morning = new Date();
  morning.setHours(6);
  morning.setMinutes(30);

  let night = new Date();
  night.setHours(18);
  night.setMinutes(30);

  console.log(currentTime);

  if (morning < currentTime && currentTime < night) {
    document.getElementById("gradient-day").classList.add("gradient-1");
    document.getElementById("gradient-night").classList.remove("gradient-2");
  } else {
    document.getElementById("gradient-night").classList.add("gradient-2");
    document.getElementById("gradient-day").classList.remove("gradient-1");
  }

  //run again 12 hours later
  setTimeout(gradientUpdate, 43200000);
}


//call gradientUpdate function at screen-load on browser window
window.addEventListener("load", gradientUpdate);


//call gradientUpdate function at specific time
let currentTime = new Date();

let morning = new Date();
morning.setHours(6);
morning.setMinutes(30);

let night = new Date();
night.setHours(18);
night.setMinutes(30);

let tomorrowMorning = new Date();
tomorrowMorning.setHours(6);
tomorrowMorning.setMinutes(30);
tomorrowMorning.setDate(tomorrowMorning.getDate() + 1);


let targetTime;
if (currentTime >= morning && currentTime < night) {
  targetTime = night;
  //if current time is after or exactly 6:30 and current time is before 18:30 its day so...
  //next update is at night

} else if (currentTime >= night) {
  targetTime = tomorrowMorning;
  //if current time is greater or equal to 18:30 it's currently night so...
  //next update is tomorrow morning.

} else {
  targetTime = morning;
  //if none of the conditions are met, then it must be morning.
}

let msTilTarget = (targetTime - currentTime);

console.log(msTilTarget);

setTimeout(gradientUpdate, msTilTarget);


//display modal when user clicks "contact us"

let showModal = (event) => {
  event.stopPropagation();

  let modal = document.getElementById("contactModal")

  if (modal.classList.contains("modal-hidden")) {
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-open");
  }
}
document
  .getElementById("contactUsButton")
  .addEventListener('click', showModal);

let closeModal = () => {
  let modal = document.getElementById('contactModal')

  if (modal.classList.contains("modal-open")) {
    modal.classList.remove("modal-open");
    modal.classList.add("modal-hidden");
  }
}

document
  .getElementById("xButton")
  .addEventListener('click', closeModal);

/*window << I need to create a background div.
  .addEventListener("click", closeModal);*/


//form validation, name and last name, and e-mail contains @ sign

//animation or notification to let users know it successfully sent.

//animation on screen scroll
AOS.init({
  duration: 1200,
})

