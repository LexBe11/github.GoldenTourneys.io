// Array of players
const players = ['ggx7_71', 'lexicool1272', 'kingferdinand13', 'landdeb4', 'andyisbored', 'EL_FRED', 'Something', 'GabrielV4321'];

// Function to display players
function displayPlayers() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = player;
        playerList.appendChild(listItem);
    });
}

// Function to add a new player
function addPlayer(player) {
    if (player && !players.includes(player)) {
        players.push(player);
        displayPlayers();
    }
}

// Initialize the player list display
document.addEventListener('DOMContentLoaded', (event) => {
    displayPlayers();
});
