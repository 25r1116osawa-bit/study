export enum Direction {
    UP, DOWN, LEFT, RIGHT, NEUTRAL
}

export type ButtonType = 'A' | 'B' | 'C'

export interface Controller {
    readonly connected: boolean
    connect(): boolean
    getDirection(): Direction[]
    getPushBtn(): ButtonType[]
}

// 実装クラス: キーボード入力をコントローラーとして扱う
export class KeyboardController implements Controller {
    public connected: boolean = false;
    private pressedKeys: Set<string> = new Set();

    constructor() {
        window.addEventListener('keydown', (e) => this.pressedKeys.add(e.key));
        window.addEventListener('keyup', (e) => this.pressedKeys.delete(e.key));
    }

    connect(): boolean {
        this.connected = true;
        console.log("Keyboard Controller connected.");
        return true;
    }

    getDirection(): Direction[] {
        const directions: Direction[] = [];
        if (this.pressedKeys.has('ArrowUp')) directions.push(Direction.UP);
        if (this.pressedKeys.has('ArrowDown')) directions.push(Direction.DOWN);
        if (this.pressedKeys.has('ArrowLeft')) directions.push(Direction.LEFT);
        if (this.pressedKeys.has('ArrowRight')) directions.push(Direction.RIGHT);
        
        return directions.length > 0 ? directions : [Direction.NEUTRAL];
    }

    getPushBtn(): ButtonType[] {
        const buttons: ButtonType[] = [];
        if (this.pressedKeys.has('z')) buttons.push('A');
        if (this.pressedKeys.has('x')) buttons.push('B');
        if (this.pressedKeys.has('c')) buttons.push('C');
        return buttons;
    }
}