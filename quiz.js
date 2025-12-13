if(!localStorage.getItem("name")){
  window.location.href="login.html";
}

const Q = [
 {q:"भारत की राजधानी क्या है?",o:["मुंबई","दिल्ली","चेन्नई","कोलकाता"],a:1},
 {q:"5 + 7 = ?",o:["10","11","12","13"],a:2},
 {q:"ताजमहल कहाँ है?",o:["दिल्ली","जयपुर","आगरा","लखनऊ"],a:2},
 {q:"10 × 4 = ?",o:["20","30","40","50"],a:2},
 {q:"राष्ट्रपिता कौन हैं?",o:["नेहरू","गांधी","पटेल","सुभाष"],a:1},
 {q:"20 − 9 = ?",o:["9","10","11","12"],a:2}
];

let i=0,score=0,time=10,timer;
const qEl=document.getElementById("question");
const oEl=document.getElementById("options");
const tEl=document.getElementById("timer");

function show(){
  clearInterval(timer);
  if(i>=Q.length){
    localStorage.setItem("score",score);
    let lb=JSON.parse(localStorage.getItem("lb")||"[]");
    lb.push({name:localStorage.getItem("name"),score});
    localStorage.setItem("lb",JSON.stringify(lb));
    window.location.href="result.html";
    return;
  }
  qEl.innerText=Q[i].q;
  oEl.innerHTML="";
  Q[i].o.forEach((x,j)=>{
    let b=document.createElement("button");
    b.innerText=x;
    b.onclick=()=>{ if(j===Q[i].a)score++; i++; show(); };
    oEl.appendChild(b);
  });
  time=10; tEl.innerText=time;
  timer=setInterval(()=>{
    time--; tEl.innerText=time;
    if(time==0){ i++; show(); }
  },1000);
}
show();
