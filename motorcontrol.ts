/**
 * モータの種類
 */
export enum Motor {
    //% block="左"
    Left = 0,

    //% block="右"
    Right = 1,

    //% block="両方"
    Both = 2
}

/**
 * モータ制御
 */
//% color=#0078D7 icon="\uf013"
namespace MotorControl {

    /**
     * モータを回す
     * @param motor モータ
     * @param speed 速度
     */
    //% block="モータ $motor を速度 $speed で回す"
    //% speed.min=-100
    //% speed.max=100
    //% speed.defl=0
    export function runMotor(motor: Motor, speed: number): void {

        // ここに実際のモータ制御を書く

        switch (motor) {
            case Motor.Left:
                // 左モータ
                break;

            case Motor.Right:
                // 右モータ
                break;

            case Motor.Both:
                // 左右モータ
                break;
        }
    }
}