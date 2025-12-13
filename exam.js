if(!localStorage.getItem("student")) location="login.html";

const Q=[
{q:"भारत की राजधानी?",o:["Delhi","Mumbai","Chennai","Kolkata"],a:0},
{q:"5×6=?",o:["11","30","20","25"],a:1}
];

let i=0,score=0,time=20,t;
const q=document.getElementById("q"),o=document.getElementById("opt"),tm=document.getElementById("timer");

function load(){
  if(i>=Q.length){
    localStorage.setItem("attempted",1);
    alert("Exam submitted");
    return;
  }
  q.innerText=Q[i].q;
  o.innerHTML="";
  Q[i].o.forEach((x,j)=>{
    let b=document.createElement("button");
    b.className="btn secondary";
    b.innerText=x;
    b.onclick=()=>{ if(j===Q[i].a)score++; i++; load(); };
    o.appendChild(b);
  });
  time=20; tm.innerText=time;
  clearInterval(t);
  t=setInterval(()=>{
    time--; tm.innerText=time;
    if(time==0){i++;load();}
  },1000);
}

window.onblur=()=>{alert("Exam terminated");location="index.html";}
load();
