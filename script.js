// Array of players
const players = ['loltrash09', 'joojookittykat', 'bloxcenterr'];

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
