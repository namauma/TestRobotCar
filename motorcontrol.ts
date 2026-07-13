enum Motor {
    //% block="左"
    Left,

    //% block="右"
    Right,

    //% block="両方"
    Both
}

//% color=#0078D7 icon="\uf013"
namespace MotorControl {

    //% block="モータ %motor|を速度 %speed|で回す"
    //% speed.min=-100
    //% speed.max=100
    //% speed.defl=0
    export function runMotor(motor: Motor, speed: number): void {

        let pwm = Math.idiv(Math.abs(speed) * 1023, 100)

        function setRight() {
            if (speed >= 0) {
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P3, 1)
            } else {
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P3, 0)
            }

            pins.analogWritePin(AnalogPin.P4, pwm)
        }

        function setLeft() {
            if (speed >= 0) {
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P7, 1)
            } else {
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P7, 0)
            }

            pins.analogWritePin(AnalogPin.P8, pwm)
        }

        switch (motor) {
            case Motor.Left:
                setLeft()
                break

            case Motor.Right:
                setRight()
                break

            case Motor.Both:
                setLeft()
                setRight()
                break
        }
    }
}
