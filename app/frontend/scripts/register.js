function registerPlayer() {
  let username = document.getElementById("username").value
  let major = document.getElementById("major").value
  let minor = document.getElementById("minor").value
  const responsePromise = fetch("/create-player/?" + "username=" + username + "&major=" + major + "&minor=" + minor, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  responsePromise.then(
    // Fulfilled
    async (response) => {
      let playerResult = await response.json()
      alert("Successfully added " + username + " with major " + major + " and minor " + minor + "! You can now return to the homepage to start a match or stay on this page to create new teams and players.")
    },
    // Error
    (error) => {
      alert("Failed to add player. Make sure that the username is unique.")
      console.log(error)
    })
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