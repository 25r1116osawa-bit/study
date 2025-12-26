import { Aircon } from './Aircon.js';

// Initialize Game
const aircon = new Aircon();
// Expose to window for user interaction (The Gimmick)
window.aircon = aircon;

// UI Elements
const roomTempEl = document.getElementById('room-temp');
const targetTempEl = document.getElementById('remote-temp-display');
const roomBg = document.getElementById('game-container');
const messageArea = document.getElementById('main-message');
const successOverlay = document.getElementById('success-overlay');

// Game Loop
setInterval(() => {
    // 1. Tick the simulation
    aircon.tick();

    // 2. Get Status
    const status = aircon.getStatus();

    // 3. Update UI
    roomTempEl.textContent = status.roomTemp;

    if (status.power === 'ON') {
        targetTempEl.textContent = status.targetTemp;
        // Visual feedback for 'running'
        targetTempEl.style.color = '#333';
    } else {
        targetTempEl.textContent = '--';
        targetTempEl.style.color = '#777';
    }

    // 4. Update Atmosphere
    updateAtmosphere(parseFloat(status.roomTemp));

    // 5. Check Win
    if (!status.isLocked && !successOverlay.classList.contains('visible')) {
        gameClear();
    }

}, 1000); // 1 tick per second

function updateAtmosphere(temp) {
    if (temp <= 26) {
        document.body.className = 'cool-mode';
        messageArea.textContent = "涼しい... 生き返るようだ...";
    } else if (temp <= 28) {
        document.body.className = ''; // Neutral
        messageArea.textContent = "少しマシになってきたか？";
    } else {
        document.body.className = '';
        messageArea.textContent = "暑い... 目が回るようだ... リモコンが効かない...";
    }
}

function gameClear() {
    successOverlay.classList.add('visible');
    messageArea.textContent = "脱出成功！";
    // Celebrate
    console.log("おめでとうございます！脱出成功です！");
}

console.log("HINT: `aircon` オブジェクトを操作して、部屋を冷やしてください。");
