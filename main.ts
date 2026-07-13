//% color=#ff6600 icon="\uf1b9"
namespace robotcar {

    //% block="モータ"
    export enum Motor {
        //% block="左"
        Left = 0,

        //% block="右"
        Right = 1,

        //% block="両方"
        Both = 2
    }

    /**
     * モータを回す
     */
    //% block="モータ %motor を %speed % で回す"
    //% speed.min=-100
    //% speed.max=100
    //% speed.defl=10
    export function motor(motor: Motor, speed: number): void {

        if (speed > 100) speed = 100
        if (speed < -100) speed = -100

        let pwm = Math.abs(speed) * 10.23

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

    /**
     * モータ停止
     */
    //% block="モータ停止"
    export function stop(): void {
        pins.analogWritePin(AnalogPin.P4, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    }
}