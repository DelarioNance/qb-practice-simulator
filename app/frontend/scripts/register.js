/**
 * Creates a new player in the database from the user-inputted 
 * player fields.
 */
async function registerPlayer() {
  const name = document.getElementById("username").value;
  const major = document.getElementById("major").value;
  const minor = document.getElementById("minor").value;

  await fetch(`/player/?username=${name}&major=${major}&minor=${minor}`, {
    method: "POST",
  });

  // TODO: Use the data which was actually inserted in the database
  // instead of the data that I expect was inserted in the database
  alert(`Successfully added ${name} with major ${major} and minor ${minor}! ` +
        "You can now return to the homepage to start a match or stay on this " + 
        "page to create new teams and players.");
}

function registerTeam() {
  let name = document.getElementById("teamName").value
  let school = document.getElementById("school").value
  let p1 = document.getElementById("P1ID").value
  let p2 = document.getElementById("P2ID").value
  let p3 = document.getElementById("P3ID").value
  let p4 = document.getElementById("P4ID").value
  let p5 = document.getElementById("P5ID").value

  const responsePromise = fetch("/create-team/?" + "name=" + name + "&school=" + school + "&P1=" + p1 + "&P2=" + p2 + "&P3=" + p3 + "&P4=" + p4 + "&P5=" + p5, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  responsePromise.then(
    // Fulfilled
    async (response) => {
      let teamResult = await response.json()
      alert("Your new team's ID is " + teamResult["insertId"] + ". Please save it somewhere! You can now return to the homepage to start a match or stay on this page to create new teams and players.")
    },
    // Error
    (error) => {
      console.log(error)
    })
}