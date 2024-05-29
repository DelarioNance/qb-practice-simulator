/**
 * This script contains the JavaScript functions used by the index 
 * page.
 */

/**
 * Creates a new match in the database between the user-inputted 
 * teams and sends the page of the newly created match.
 */
async function startMatch() {
    const home = document.getElementById("homeID").value
    const away = document.getElementById("awayID").value

    // Create a new match in the database
    const response = await fetch(`/match/?homeID=${home}&awayID=${away}`, {
        method: "POST"
    });

    // Redirect the user to the match page
    const dbResult = await response.json();
    window.location.assign("/match?matchID=" + dbResult.insertId)
}