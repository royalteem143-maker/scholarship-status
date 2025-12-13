if(!localStorage.getItem("name")) location.href="login.html";

const questions=[
 {q:"भारत की राजधानी?",o:["दिल्ली","मुंबई","कोलकाता","चेन्नई"],a:0},
 {q:"2+2=?",o:["2","3","4","5"],a:2}
];

let i=0,score=0,time=10,t;

function show(){
 let q=questions[i];
 box.innerHTML="<h3>"+q.q+"</h3>"+q.o.map((x,j)=>
 `<button onclick="ans(${j})">${x}</button><br>`).join("");
 start();
}

function start(){
 time=10;
 timer.textContent=time;
 t=setInterval(()=>{
  time--;
  timer.textContent=time;
  if(time<0) next();
 },1000);
}

function ans(x){
 if(x===questions[i].a) score++;
 next();
}

function next(){
 clearInterval(t);
 i++;
 if(i<questions.length) show();
 else{
  localStorage.setItem("score",score);
  location.href="result.html";
 }
}

show();
