// 🔐 Login check
const name = localStorage.getItem("studentName");
if (!name) {
  window.location.href = "login.html";
}

// 📚 Questions
const questions = [
  {
    q: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    q: "CSS ka use kisliye hota hai?",
    options: [
      "Database ke liye",
      "Logic likhne ke liye",
      "Styling ke liye",
      "Server ke liye"
    ],
    correct: 2
  }
];

let current = 0;
let score = 0;
let timeLeft = 10;
let timer;

// ⏱️ Timer start
function startTimer() {
  timeLeft = 10;
  document.getElementById("timer").innerText = "⏳ Time: " + timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "⏳ Time: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

// ❓ Show question
function showQuestion() {
  const q = questions[current];
  let html = `<h3>${q.q}</h3>`;

  q.options.forEach((opt, i) => {
    html += `
      <label>
        <input type="radio" name="option" value="${i}">
        ${opt}
      </label><br>
    `;
  });

  document.getElementById("quizBox").innerHTML = html;
  startTimer();
}

// ▶️ Next question
function nextQuestion() {
  clearInterval(timer);

  const selected = document.querySelector('input[name="option"]:checked');
  if (selected && parseInt(selected.value) === questions[current].correct) {
    score++;
  }

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
}

// 🚀 Start quiz
showQuestion();
