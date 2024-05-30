/**
 * Creates a new player in the database from the user-inputted 
 * player fields.
 */
async function registerPlayer() {
    const params = new URLSearchParams({
        name: getValueById("username"),
        major: getValueById("major"),
        minor: getValueById("minor")
    });

    await fetch(`/player/?${params.toString()}`, {
        method: "POST",
    });

    // TODO: Use the data which was actually inserted in the database
    // instead of the data that I expect was inserted in the database
    alert(
        `Successfully added ${params.get("name")} with major ${params.get("major")} and minor ${params.get("minor")}! ` +
        "You can now return to the homepage to start a match or stay on this " +
        "page to create new teams and players."
    );
}

/**
 * Creates a new team in the database from the user-inputted 
 * team fields.
 */
async function registerTeam() {
    // Calling this object's toString() method returns a query string
    // from the object's key-value pairs
    const params = new URLSearchParams({
        name: getValueById("teamName"),
        school: getValueById("school"),
        P1: getValueById("P1ID"),
        P2: getValueById("P2ID"),
        P3: getValueById("P3ID"),
        P4: getValueById("P4ID"),
        P5: getValueById("P5ID"),
    })

    const responseObject = await fetch(`/team/?${params.toString()}`, {
        method: "POST",
    });
    const responseData = await responseObject.json();
    const insertedTeamId = responseData.insertId;

    alert(
        `Your new team's ID is ${insertedTeamId}. Please save it somewhere! ` +
        "You can now return to the home page to start a match or " +
        "stay on this page to create new teams and players."
    )
}

/**
 * Returns the value of the first HTML element with the specified ID.
 * @param {string} elementId The ID of the HTML element
 * @returns The value of the first HTML element with the specified 
 * ID
 */
function getValueById(elementId) {
    return document.getElementById(elementId).value;
}