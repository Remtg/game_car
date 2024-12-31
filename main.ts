input.onButtonPressed(Button.A, function () {
    if (play_start == 1) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        led.unplot(car_x, car_y)
        if (car_x - 1 < 0) {
            car_x = 0
        } else {
            car_x = car_x - 1
        }
        for (let index = 0; index < 4; index++) {
            led.plot(car_x, car_y)
            basic.pause(20)
            led.unplot(car_x, car_y)
            basic.pause(20)
            led.plot(car_x, car_y)
        }
    }
})
function get_x_0_1_radom () {
    x_0_1 = x_0_0 + 3
    if (x_0_1 > 4) {
        x_0_1 = 4
    }
}
input.onButtonPressed(Button.AB, function () {
    if (game_over == 0) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        play_start = 1
        game_over = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (play_start == 1) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        led.unplot(car_x, car_y)
        if (car_x + 1 > 4) {
            car_x = 4
        } else {
            car_x = car_x + 1
        }
        for (let index = 0; index < 4; index++) {
            led.plot(car_x, car_y)
            basic.pause(20)
            led.unplot(car_x, car_y)
            basic.pause(20)
            led.plot(car_x, car_y)
        }
    }
})
function get_x_0_0_radom () {
    if (x_0_0 == 0) {
        r_org = randint(0, 1)
    } else {
        if (x_0_0 == 2) {
            r_org = randint(0, 1)
            r_org = r_org + 1
        } else {
            r_org = randint(0, 2)
        }
    }
    x_0_0 = r_org
}
let x_1_1 = 0
let x_1_0 = 0
let x_2_1 = 0
let x_2_0 = 0
let x_3_1 = 0
let x_4_1 = 0
let x_3_0 = 0
let x_4_0 = 0
let r_org = 0
let x_0_0 = 0
let x_0_1 = 0
let car_y = 0
let car_x = 0
let play_start = 0
let game_over = 0
let item = 0
let first_line = 0
let i_4 = 0
led.setBrightness(80)
game_over = 0
let score = 0
play_start = 0
car_x = 2
car_y = 4
let y_0 = 0
let y_1 = 1
let y_2 = 2
let y_3 = 3
let y_4 = 4
get_x_0_0_radom()
get_x_0_1_radom()
images.createBigImage(`
    . . . . . . . . . .
    . # . . # . . . . .
    # # # # # . . . . .
    . # . . # . . . . .
    . . . . . . . . . .
    `).scrollImage(1, 150)
while (play_start == 0) {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 4; index++) {
    led.plot(car_x, car_y)
    basic.pause(100)
    led.unplot(car_x, car_y)
    basic.pause(100)
    led.plot(car_x, car_y)
}
basic.forever(function () {
    while (play_start) {
        x_4_0 = x_3_0
        x_4_1 = x_3_1
        for (let i_42 = 0; i_42 <= 4; i_42++) {
            led.unplot(i_42, y_4)
        }
        if (x_4_0 != 0 || x_4_1 != 0) {
            led.plot(x_4_0, y_4)
            led.plot(x_4_1, y_4)
            led.plot(car_x, car_y)
        }
        if (x_4_0 == car_x || x_4_1 == car_x) {
            play_start = 0
            music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showNumber(score)
            basic.pause(1000)
        }
        score = score + 1
        x_3_0 = x_2_0
        x_3_1 = x_2_1
        for (let i_3 = 0; i_3 <= 4; i_3++) {
            led.unplot(i_3, y_3)
        }
        if (x_3_0 != 0 || x_3_1 != 0) {
            led.plot(x_3_0, y_3)
            led.plot(x_3_1, y_3)
            led.plot(car_x, car_y)
        }
        x_2_0 = x_1_0
        x_2_1 = x_1_1
        for (let i_2 = 0; i_2 <= 4; i_2++) {
            led.unplot(i_2, y_2)
        }
        if (x_2_0 != 0 || x_2_1 != 0) {
            led.plot(x_2_0, y_2)
            led.plot(x_2_1, y_2)
            led.plot(car_x, car_y)
        }
        x_1_0 = x_0_0
        x_1_1 = x_0_1
        for (let i_1 = 0; i_1 <= 4; i_1++) {
            led.unplot(i_1, y_1)
        }
        if (x_1_0 != 0 || x_1_1 != 0) {
            led.plot(x_1_0, y_1)
            led.plot(x_1_1, y_1)
            led.plot(car_x, car_y)
        }
        get_x_0_0_radom()
        get_x_0_1_radom()
        for (let i_0 = 0; i_0 <= 4; i_0++) {
            led.unplot(i_0, y_0)
        }
        led.plot(x_0_0, y_0)
        led.plot(x_0_1, y_0)
        led.plot(car_x, car_y)
        if (score <= 20) {
            basic.pause(600)
        }
        if (score > 20 && score <= 40) {
            basic.pause(500)
        }
        if (score > 40 && score <= 60) {
            basic.pause(400)
        }
        if (score > 60 && score <= 80) {
            basic.pause(300)
        }
        if (score > 80 && score <= 100) {
            basic.pause(200)
        }
        if (score > 100) {
            basic.pause(150)
        }
    }
    while (play_start == 0) {
        game_over = 0
        score = 0
        car_x = 2
        car_y = 4
        x_4_0 = 0
        x_4_1 = 0
        x_3_0 = 0
        x_3_1 = 0
        x_2_0 = 0
        x_2_1 = 0
        x_1_0 = 0
        x_1_1 = 0
        basic.showIcon(IconNames.Skull)
        basic.pause(300)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        led.plot(car_x, car_y)
        basic.pause(100)
        led.unplot(car_x, car_y)
        basic.pause(100)
        led.plot(car_x, car_y)
    }
    get_x_0_0_radom()
    get_x_0_1_radom()
})
