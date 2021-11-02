let score_A = 0
let Score_B = 0
let set_hand_to = 0
input.onButtonPressed(Button.A, function () {
    score_A += 1
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (score_A == 5) {
        score_A = 0
        Score_B = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Score_B += 1
    if (Score_B == 5) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                # . # . #
                . # . # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Score_B = 0
        score_A = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    set_hand_to = randint(1, 3)
    if (set_hand_to == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (set_hand_to == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
