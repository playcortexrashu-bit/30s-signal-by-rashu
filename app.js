/* ===== LOGIN PART ===== */
const USERNAME = "Autonomous";
const PASSWORD = "66962";

function login(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u === USERNAME && p === PASSWORD){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("appBox").style.display="block";
    generateSignal();
  } else {
    document.getElementById("msg").innerText="Wrong username or password";
  }
}

/* ===== SIGNAL PART ===== */
let countdown = 30;

function generateSignal(){
  let n = Math.floor(Math.random()*10);
  let bs = n >= 5 ? "Big" : "Small";
  let r = Math.random();
  let conf = r>0.7 ? "High" : r>0.4 ? "Medium" : "Low";

  document.getElementById("number").innerText = n;
  document.getElementById("bs").innerText = bs;
  document.getElementById("conf").innerText = conf;

  countdown = 30;
}

setInterval(()=>{
  if(document.getElementById("appBox").style.display==="block"){
    document.querySelector(".timer").innerText =
      `⏱ Next update in ${countdown}s`;
    countdown--;
    if(countdown < 0) generateSignal();
  }
},1000);
