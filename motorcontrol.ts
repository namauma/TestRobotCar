enum Motor {
    //% block="左"
    Left,

    //% block="右"
    Right,

    //% block="両方"
    Both
}

namespace MotorControl {

    //% block="モータ %motor|を速度 %speed|で回す"
    export function runMotor(motor: Motor, speed: number): void {

    }
}