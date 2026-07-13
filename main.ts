//% color=#ff6600 icon="\uf1b9"
namespace robotcar {

   enum Motor {
    //% block="左"
    Left,
    //% block="右"
    Right,
    //% block="両方"
    Both
}

//% block="モータ %motor を %speed"
//% speed.min=-100
//% speed.max=100
//% speed.defl=50
export function motor(motor: Motor, speed: number) {

    let pwm = Math.abs(speed) * 10.23

    function setRight() {
        if (speed >= 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P3, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P3, 0)
        }

        pins.analogWritePin(DigitalPin.P4, pwm)
    }

    function setLeft() {
        if (speed >= 0) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }

        pins.analogWritePin(DigitalPin.P8, pwm)
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