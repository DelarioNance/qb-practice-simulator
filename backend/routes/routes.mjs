import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import express from 'express';
const router = express.Router();

import * as db from "../db/db_mysql.mjs";

router.get("/", (request, response) => {
  response.sendFile("index.html")
});

// For GET requests to "/player?name=<name>"
router.get('/player', function(request, response){
  let name = request.query["name"]

  db.getAllPlayersByName(name, (results) => {
      response.json(results)
  })
});

router.get('/create-match', function(request, response){
  let homeID = request.query["homeID"]
  let awayID = request.query["awayID"]

  db.createNewMatch(homeID, awayID, (results) => {
      response.json(results)
  })
});


router.get("/match", function(request, response) {
  var matchID = request.query["matchID"]

  // Query the database to get info about the match
  db.getPlayersFromMatch(matchID, (results) => {

    for (const row of results) {
      let username = row["username"]
      var matchID = request.query["matchID"]
      db.initializePlayerScore(username, matchID);
    }
    response.render(path.join(__dirname, '..', '..', 'views/match'), {"results": results})
  });
});

router.get("/register", function(request, response) {
  response.sendFile("register.html")
  console.log("Register Page")
});

router.get("/stats", function(request, response) {
  let playerID = request.query["playerID"];

  db.getPlayerStats(playerID, (results) => {
    response.json(results)
  });

});

router.get("/create-player", function(request, response) {
let username = request.query["username"]
let major = request.query["major"]
let minor = request.query["minor"]

// Insert player data into player relation
db.createPlayer(username, major, minor, (results) => {
  response.json(results)   
})
})

// Calls db.create_team() and then db.insertIntoPlaysOn 
//    for each non-null player entered from the form
router.get("/create-team", function(request, response) {
let name = request.query["name"]
let school = request.query["school"]
let playerUsernames = [
  request.query["P1"],
  request.query["P2"],
  request.query["P3"],
  request.query["P4"],
  request.query["P5"]
]

// Insert team data into team relation
db.createTeam(name, school, (results) => {
  console.log(results)

  for (var player of playerUsernames) {
    if (player === '') {
      continue;
    } 
    db.insertIntoPlaysOn(player, results["insertId"])
  }

  response.json(results)
})
})

router.get("/initialize-player-score", function(request, response) {
let username = request.query["username"]
let matchID = request.query["matchID"]

db.initializePlayerScore(username, matchID, (results) => {
  response.json(results)
})
})

router.get("/update-player-score", function(request, response) {
let username = request.query["username"]
let matchID = request.query["matchID"]
let numPowersOnTossup = request.query["numPowersOnTossup"]
let numTensOnTossup = request.query["numTensOnTossup"]
let numNegsOnTossup = request.query["numNegsOnTossup"]

db.updatePlayerScore(numPowersOnTossup, numTensOnTossup, numNegsOnTossup, username, matchID, (results) => {
  response.json(results)
})
})

export default router
