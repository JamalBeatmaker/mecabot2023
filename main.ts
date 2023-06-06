input.onButtonPressed(Button.A, function () {
    SENColor.calibrate()
})
SENColor.setPins(
DigitalPin.P15,
DigitalPin.P1,
DigitalPin.P8,
DigitalPin.P12,
DigitalPin.P10
)
basic.forever(function () {
    serial.writeValue("R", SENColor.getColor(color.red))
    serial.writeValue("G", SENColor.getColor(color.green))
    serial.writeValue("B", SENColor.getColor(color.blue))
})
