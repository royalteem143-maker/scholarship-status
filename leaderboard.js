const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbI7dKLRiOcihfAELAYDeZekbaGk0TMgVxN-7cV7bCNYC88BWX2TXiBY4a_QMh8MrarAJld5yJQZc7/pub?output=csv";

fetch(csvUrl)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split("\n").map(row => row.split(","));
    let table = "";

    rows.forEach((row, index) => {
      table += "<tr>";
      row.forEach(cell => {
        table += index === 0
          ? `<th>${cell}</th>`
          : `<td>${cell}</td>`;
      });
      table += "</tr>";
    });

    document.getElementById("leaderboard").innerHTML = table;
  });
