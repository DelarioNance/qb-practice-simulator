import { getValueById } from "./utils.js";

async function displayPlayerStats() {
    const statsTable = document.getElementById("stats-table");

    resetTable(statsTable);

    const playerName = getValueById("username");

    // await is used because the called function is async
    const playerAllStats = await getPlayerStats(playerName);

    for (let i = 0; i < playerAllStats.length; i++) {
        displayStatsforSingleMatch(playerAllStats[i], statsTable);
    }
}

// Since this file uses an import statement, this file is treated as 
// a "module." However, by default, top-level functions in modules are 
// not accessible to the HTML file(s) which those modules are linked 
// to. Therefore, the line below is used to add the corresponding 
// function to global scope of the browser's JavaScript environment.
window.displayPlayerStats = displayPlayerStats;

function resetTable(table) {
    // TODO: Find quicker algorithm for when number of rows is large
    const rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

async function getPlayerStats(username) {
    const params = new URLSearchParams({
        name: username
    });

    const responseObject = await fetch(`player-stats?${params}`, {
        method: "GET"
    });
    const playerStatsObject = await responseObject.json();

    return Object.values(playerStatsObject);
}

function displayStatsforSingleMatch(matchStats, statsTable) {
    const matchRow = document.createElement("tr");

    const id = document.createElement("td");
    const powers = document.createElement("td");
    const tens = document.createElement("td");
    const negs = document.createElement("td");
    const numTossupsHeard = document.createElement("td");
    const percentTossupsCorrect = document.createElement("td");

    id.innerText = matchStats["match_id"];
    powers.innerText = matchStats["num_powers"];
    tens.innerText = matchStats["num_tens"];
    negs.innerText = matchStats["num_negs"];
    numTossupsHeard.innerText = matchStats["num_tossups_heard"];
    percentTossupsCorrect.innerText = ((matchStats["num_powers"] + matchStats["num_tens"]) / matchStats["num_tossups_heard"]) * 100

    matchRow.appendChild(id);
    matchRow.appendChild(powers);
    matchRow.appendChild(tens);
    matchRow.appendChild(negs);
    matchRow.appendChild(numTossupsHeard);
    matchRow.appendChild(percentTossupsCorrect);

    statsTable.appendChild(matchRow);
}

