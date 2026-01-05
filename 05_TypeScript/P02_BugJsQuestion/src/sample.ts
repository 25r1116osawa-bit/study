import { type Controller, Direction, OriginalController, type ButtonType } from "./Controller.js";

const up = document.getElementById("up") as HTMLButtonElement

class Game {
    controller: Controller
    constructor(con: Controller) {
        this.controller = con
        this.controller.connect()
    }

    action() {
        // 十字の情報を取得
        const direction: Direction[] = this.controller.getDirection()
        direction.forEach(btnElement => {
            if (btnElement = Direction.NEUTRAL) {
                console.log("そのまま")
            } else {
                if (btnElement = Direction.UP) {
                    console.log("上")
                }else if (btnElement = Direction.DOWN) {
                    console.log("下")
                }else if (btnElement = Direction.LEFT) {
                    console.log("左")
                }else if (btnElement = Direction.RIGHT) {
                    console.log("右")
                }
            }
        });
    }
}

const gameController = new OriginalController()
const game = new Game(gameController)

up.addEventListener('click',() => game.action())