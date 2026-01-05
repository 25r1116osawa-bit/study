export enum Direction {
    UP,DOWN,LEFT,RIGHT,NEUTRAL
}

export type ButtonType = 'A' | 'B' | 'C'

export interface Controller{
    readonly connected: boolean
    connect(): boolean
    getDirection(): Direction[]
    getPushBtn(): ButtonType[]
}

export class OriginalController implements Controller{
    connected: boolean

    constructor(){
        this.connected = false
    }

    connect(): boolean {
        this.connected = true
        return true
    }
    getDirection(): Direction[] {
        return [Direction.UP]
    }
    getPushBtn(): ButtonType[] {
        return ['A']
    }

}