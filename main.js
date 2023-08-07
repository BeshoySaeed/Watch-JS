let sec = document.querySelector(".seconds");
let min = document.querySelector(".minutes");
let hor = document.querySelector(".hours");

let interval = setInterval(() => {
  let myDate = new Date();
  let mySec = myDate.getSeconds();
  let myMin = myDate.getMinutes();
  let myHor = myDate.getHours();

  sec.style.transform = `rotate(${mySec * 6}deg)`;
  min.style.transform = `rotate(${myMin * 6}deg)`;
  hor.style.transform = `rotate(${myHor * 30 + myMin / 2}deg)`;
}, 1000);
