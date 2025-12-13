if(!localStorage.getItem("name")){
  window.location.href = "./login.html";
}

const questions = [
  {q:"भारत की राजधानी क्या है?", o:["दिल्ली","मुंबई","चेन्नई","कोलकाता"], a:0},
  {q:"2 + 2 = ?", o:["2","3","4","5"], a:2},
  {q:"सूरज कहाँ से उगता है?", o:["उत्तर","दक्षिण","पूरब","पश्चिम"], a:2},
  {q:"5 × 2 = ?", o:["5","7","10","12"], a:2}
].sort(()=>0.5-Math.random());

let i=0, score=0, time=10, t;
const qEl=document.getElementById("question");
const oEl=document.getElementById("options");
const tiEl=document.getElementById("timer");

function saveLeaderboard(){
  let data = JSON.parse(localStorage.getItem("leaderboard")) || [];
  data.push({name:localStorage.getItem("name"), score:score});
  localStorage.setItem("leaderboard", JSON.stringify(data));
}

function show(){
  clearInterval(t);
  if(i>=questions.length){
    saveLeaderboard();
    localStorage.setItem("score", score);
    window.location.href="./result.html";
    return;
  }
  qEl.innerText = questions[i].q;
  oEl.innerHTML="";
  questions[i].o.forEach((x,j)=>{
    const b=document.createElement("button");
    b.className="option-btn";
    b.innerText=x;
    b.onclick=()=>ans(j);
    oEl.appendChild(b);
  });
  time=10; tiEl.innerText=time;
  t=setInterval(()=>{
    time--; tiEl.innerText=time;
    if(time<=0){ i++; show(); }
  },1000);
}
function ans(j){ if(j===questions[i].a) score++; i++; show(); }
show();
