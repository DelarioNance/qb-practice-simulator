async function fetchplayerStats() {
  let playerID = document.getElementById("playerID").value;

  try {
    const response = await fetch("/player-stats?playerID=" + playerID, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let result = await response.json();
    populateplayerStats(result);
  } catch (error) {
    console.error('Fetch error:', error.message);
    alert("Cannot obtain player stats: " + error.message);
  }
  
}


  function populateplayerStats(results) {
  const stats = convertObjectToArray(results);
      let statsTable = document.getElementById("stats-table")

  // Clear existing rows (except header)
  var rowCount = statsTable.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    statsTable.deleteRow(i);
  }

  stats.forEach(match => {
    let matchRow = document.createElement("tr");

    let matchID = document.createElement("td");
    let matchPowers = document.createElement("td");
    let matchTens = document.createElement("td");
    let matchNegs = document.createElement("td");
    let matchTUH = document.createElement("td");
    let matchPercentCorrect = document.createElement("td");

    matchID.innerText = match["match_id"];
    matchPowers.innerText = match["num_powers"];
    matchTens.innerText = match["num_tens"];
    matchNegs.innerText = match["num_negs"];
    let TUH = match["num_tossups_heard"];
    matchTUH.innerText = TUH
    let percentCorrect = ((match["num_powers"]+match["num_tens"])/TUH)*100
    matchPercentCorrect.innerText = percentCorrect

    matchRow.appendChild(matchID);
    matchRow.appendChild(matchPowers);
    matchRow.appendChild(matchTens);
    matchRow.appendChild(matchNegs);
    matchRow.appendChild(matchTUH);
    matchRow.appendChild(matchPercentCorrect);

    statsTable.appendChild(matchRow); // Append the row to the table
    });
  }

// Convert object to array of players
function convertObjectToArray(obj) {
    return Object.keys(obj).map(key => obj[key]);
}