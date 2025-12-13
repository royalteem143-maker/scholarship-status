const SHEET_URL="PASTE_YOUR_GOOGLE_SHEET_CSV_LINK";
const ENTRY_FEE=100;
const MAX_STUDENTS=10000;
const MAX_FIRST_PRIZE=100000;

function prize(rank,total){
 if(rank===1){
  return Math.min((total/MAX_STUDENTS)*MAX_FIRST_PRIZE,MAX_FIRST_PRIZE).toFixed(0);
 }
 if(rank===2) return "Dynamic";
 if(rank===3) return "Dynamic";
 return "-";
}

function load(){
 fetch(SHEET_URL).then(r=>r.text()).then(csv=>{
  let rows=csv.split("\n").slice(1);
  let users={};

  rows.forEach(r=>{
   let c=r.split(",");
   let email=c[1],name=c[0],s=parseInt(c[3]);
   if(!users[email]) users[email]={name,total:0};
   users[email].total+=s;
  });

  let arr=Object.values(users).sort((a,b)=>b.total-a.total);
  leaderboard.innerHTML="<tr><th>Rank</th><th>Name</th><th>Score</th><th>Prize</th></tr>";

  arr.forEach((u,i)=>{
   leaderboard.innerHTML+=`<tr>
    <td>${i+1}</td>
    <td>${u.name}</td>
    <td>${u.total}</td>
    <td>₹${prize(i+1,arr.length)}</td>
   </tr>`;
  });
 });
}

load();
setInterval(load,30000);
