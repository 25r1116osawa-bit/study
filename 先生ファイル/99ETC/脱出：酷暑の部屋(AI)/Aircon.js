/**
 * Aircon Class
 * The core logic for the air conditioner.
 * Users must interact with this via console to win.
 */
export class Aircon {
    #power = false;
    #targetTemp = 25;
    #currentRoomTemp = 35.0;
    #minTemp = 18;
    #maxTemp = 30;
    #mode = 'cool'; // cool, dry, fan
    #isLocked = true;
    
    constructor() {
        console.log("%cエアコンシステム初期化中...", "color: lime; background: black; padding: 5px;");
        console.log("リモコン信号: 受信不可 (ERR_REMOTE_BROKEN)");
        console.log("デバッグポート: 開放中 (window.aircon)");
    }

    /**
     * Get the current status of the Aircon.
     */
    getStatus() {
        return {
            power: this.#power ? 'ON' : 'OFF',
            targetTemp: this.#targetTemp,
            roomTemp: this.#currentRoomTemp.toFixed(1),
            mode: this.#mode,
            isLocked: this.#isLocked
        };
    }

    /**
     * Toggle the power.
     */
    togglePower() {
        this.#power = !this.#power;
        console.log(`電源を${this.#power ? 'ON' : 'OFF'}にしました。`);
        return this.getStatus();
    }

    /**
     * Set the target temperature.
     * @param {number} temp - Target temperature (18-30)
     */
    setTemperature(temp) {
        if (!this.#power) {
            console.warn("エラー: 電源が入っていません。");
            return;
        }
        if (typeof temp !== 'number' || temp < this.#minTemp || temp > this.#maxTemp) {
            console.error(`エラー: 温度は${this.#minTemp}から${this.#maxTemp}の間で設定してください。`);
            return;
        }
        this.#targetTemp = temp;
        console.log(`設定温度を${this.#targetTemp}℃に変更しました。`);
    }

    /**
     * Simulation tick. Called repeatedly by the game loop.
     */
    tick() {
        // Natural heat up
        let naturalChange = 0.05;
        
        if (this.#power) {
            // Cooling Logic
            if (this.#currentRoomTemp > this.#targetTemp) {
                // Cool down
                this.#currentRoomTemp -= 0.2; 
            } else {
                // Maintain
                this.#currentRoomTemp += 0.01;
            }
        } else {
            // Heat up if off
            if (this.#currentRoomTemp < 35) {
                this.#currentRoomTemp += naturalChange;
            }
        }

        // Clamp logic mostly handled by physics, but just in case
        if (this.#currentRoomTemp < 10) this.#currentRoomTemp = 10;
        
        // Win condition check (Internal logic, though script.js handles the event mainly)
        if (this.#currentRoomTemp <= 24 && this.#isLocked) {
            this.#unlockDoor();
        }

        return this.#currentRoomTemp;
    }

    #unlockDoor() {
        this.#isLocked = false;
        console.log("%cカチャリ... ドアの鍵が開いた音がした。", "color: cyan; font-weight: bold; font-size: 1.2em;");
    }

    // Public getter for status (read-only)
    get temperature() { return this.#currentRoomTemp; }
    get isLocked() { return this.#isLocked; }
    
    // Allow users to set temp directly if they guess the property? 
    // No, simulate encapsulation. They should use methods.
}
