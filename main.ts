info.onCountdownEnd(function () {
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let Character = sprites.create(assets.image`playerframe1`, SpriteKind.Player)
Character.setStayInScreen(true)
controller.moveSprite(Character)
scene.centerCameraAt(0, 0)
info.setScore(0)
info.setLife(3)
game.showLongText("Welcome to the Underworld!", DialogLayout.Bottom)
game.showLongText("Have a fun time avoiding my enemies!", DialogLayout.Bottom)
game.showLongText("Now go and fail!", DialogLayout.Bottom)
let Devil = sprites.create(assets.image`Demon`, SpriteKind.Enemy)
Devil.setStayInScreen(true)
info.startCountdown(5)
forever(function () {
    while (Character.overlapsWith(Devil)) {
        info.changeLifeBy(-1)
        pause(2000)
    }
})
