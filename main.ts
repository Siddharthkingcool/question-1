let counter = 0
serial.writeNumber(counter)
counter = 7
counter += 1
for (let index = 0; index < 10000000000000000; index++) {
    if (counter == 85) {
        counter += -1
    }
    if (counter == 7) {
        counter += 1
    }
}
basic.forever(function () {
	
})
