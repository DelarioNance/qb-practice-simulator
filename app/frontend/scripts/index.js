function fetchPlayers() {
  let name = document.getElementById("playerName").value
  const responsePromise = fetch("/player?name=" + name, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  responsePromise.then(
    async (response) => {
      populateListPlayer(await response.json())
    },
    (error) => {
      alert("Cannot obtain players")
    })
}

function startGame() {
  let home = document.getElementById("homeID").value
  let away = document.getElementById("awayID").value
  const responsePromise = fetch("/create-match/?homeID=" + home + "&awayID=" + away, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  responsePromise.then(
    async (response) => {
      let dbResult = await response.json()
      window.location.replace("/match?matchID=" + dbResult.insertId)
    },
    (error) => {
      alert("Failed to start match")
      console.log(error)
    })
}

function populateListPlayer(results) {
  let players = document.getElementById("playerList")

  results.forEach(element => {
    let player = document.createElement("li")
    player.innerText = "Name: " + element.name + "; ID: " + element.player_id

    players.appendChild(player)
  })
}