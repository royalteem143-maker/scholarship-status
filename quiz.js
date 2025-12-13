if(!localStorage.getItem("name")){
  window.location.href = "login.html";
}

const questions = [
  {q:"2 + 2 = ?", o:["2","3","4","5"], a:2},
  {q:"Capital of India?", o:["Delhi","Mumbai","Chennai","Kolkata"], a:0},
  {q:"5 × 2 = ?", o:["5","10","15","20"], a:1}
].sort(()=>0.5-Math.random());

let i=0, score=0, time=10, t;

const qEl = document.getElementById("question");
const oEl = document.getElementById("options");
const tiEl = document.getElementById("timer");

function show(){
  clearInterval(t);

  if(i>=questions.length){
    localStorage.setItem("score", score);
    window.location.href = "result.html";
    return;
  }

  qEl.innerText = questions[i].q;
  oEl.innerHTML = "";

  questions[i].o.forEach((x,j)=>{
    const b = document.createElement("button");
    b.innerText = x;
    b.onclick = ()=>ans(j);
    oEl.appendChild(b);
  });

  time=10;
  tiEl.innerText=time;

  t=setInterval(()=>{
    time--;
    tiEl.innerText=time;
    if(time<=0){ i++; show(); }
  },1000);
}

function ans(j){
  if(j===questions[i].a) score++;
  i++; show();
}

show();
