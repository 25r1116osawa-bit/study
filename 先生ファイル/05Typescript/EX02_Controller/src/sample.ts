import { Direction, KeyboardController, type ButtonType, type Controller } from "./Controller.js";

class GameApp {
    // Controllerインターフェースを型として持つプロパティ
    private controller: Controller;

    constructor(controller: Controller) {
        this.controller = controller;
    }

    public start() {
        if (this.controller.connect()) {
            console.log("Game Started!");
            const connectedSpan = document.getElementById('connected');
            if (connectedSpan) {
                connectedSpan.textContent = 'Yes';
                connectedSpan.style.color = 'blue';
            }
            this.update();
        }
    }

    private update() {
        // 入力の状態を表示するループ
        setInterval(() => {
            const dirs = this.controller.getDirection();
            const btns = this.controller.getPushBtn();

            this.processInput(dirs, btns);
        }, 100);
    }

    private processInput(dirs: Direction[], btns: ButtonType[]) {
        const dirNames = dirs.map(d => Direction[d]).join(', ');
        const btnNames = btns.join(', ');

        const directionSpan = document.getElementById('direction');
        const buttonsSpan = document.getElementById('buttons');

        if (directionSpan) directionSpan.textContent = dirNames || 'NEUTRAL';
        if (buttonsSpan) buttonsSpan.textContent = btnNames || 'None';

        console.log(`[Input] Direction: ${dirNames} | Buttons: ${btnNames}`);

        if (btns.includes('A')) {
            console.log("Action: Jump!");
        }
    }
}

// 実行例
const myInput = new KeyboardController();
const app = new GameApp(myInput);
app.start();