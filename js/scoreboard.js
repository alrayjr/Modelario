// Initialize players with the stored data or default values
let players = JSON.parse(localStorage.getItem('players')) || [

];

function updateScoreboard() {
  let scoreboardHtml = '';
  for (let i = 0; i < players.length; i++) {
    scoreboardHtml += `
      <div class="player-row">
        <input type="text" value="${players[i].name}" class="player-name input" id="player-name-${i}">
        <label class="player-score lead">${players[i].score}</label>
		<div>
        <button class="add-score-button btns btn-primary" onclick="addScore(${i}, 1)">+</button>
        <button class="subtract-score-button btns btn-primary" onclick="addScore(${i}, -1)">-</button>
        <button class="delete-player-button btns btn-primary" onclick="deletePlayer(${i})">Delete</button>
		</div>
      </div>
    `;
  }
  document.getElementById('scoreboard').innerHTML = scoreboardHtml;
}

function addScore(playerIndex, scoreDelta) {
  players[playerIndex].score += scoreDelta;
  localStorage.setItem('players', JSON.stringify(players));
  updateScoreboard();
}

function deletePlayer(playerIndex) {
  players.splice(playerIndex, 1);
  localStorage.setItem('players', JSON.stringify(players));
  updateScoreboard();
}

document.addEventListener('DOMContentLoaded', function() {
  updateScoreboard();

  // Add event listeners to player name inputs to update the player name in the players array
  const playerNames = document.getElementsByClassName('player-name');
  for (let i = 0; i < playerNames.length; i++) {
    playerNames[i].addEventListener('change', function() {
      players[i].name = this.value;
      localStorage.setItem('players', JSON.stringify(players));
    });
  }

  // Add an event listener to the "Add Player" button
  document.getElementById('add-player-button').addEventListener('click', function() {
    // Get the value of the new player name input field
    const newPlayerName = document.getElementById('new-player-name').value;

    // Add the new player to the players array
    players.push({ name: newPlayerName, score: 0 });
    localStorage.setItem('players', JSON.stringify(players));

    // Clear the input field and update the scoreboard
    document.getElementById('new-player-name').value = '';
    updateScoreboard();
  });
});
