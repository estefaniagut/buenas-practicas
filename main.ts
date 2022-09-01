input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    text = "BYE"
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(text)
})
let number = 0
let text = ""
text = "HELLO"
number = 0
basic.forever(function () {
	
})
