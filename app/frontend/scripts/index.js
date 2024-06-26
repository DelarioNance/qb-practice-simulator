/**
 * Creates a new match in the database between the user-inputted 
 * teams and sends the user to the page of the newly created match.
 */
async function startMatch() {
    const home = document.getElementById("homeID").value;
    const away = document.getElementById("awayID").value;

    // Create a new match in the database
    const responseObject = await fetch(`/match/?homeID=${home}&awayID=${away}`, {
        method: "POST"
    });
    const responseData = await responseObject.json(); // returns a resolved Promise
    const insertedMatchId = responseData.insertId;

    // The code below is used instead of HTML form since the 
    // user is being sent to an HTML template rather than a static 
    // HTML page. If an HTML form was used instead, then it would be 
    // more difficult to pass data into the match template.
    window.location.assign(`/match?matchID=${insertedMatchId}`);
}