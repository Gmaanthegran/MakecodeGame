sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    Devil.follow(Character, 50)
    pause(5000)
    sprites.destroy(Character)
    game.showLongText("Dang it! You won for now.", DialogLayout.Bottom)
    game.showLongText("Your score was...", DialogLayout.Bottom)
    info.setScore(info.life())
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let Devil: Sprite = null
let Character: Sprite = null
music.play(music.createSoundEffect(WaveShape.Sine, 1, 5000, 0, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
Character = sprites.create(assets.image`playerframe1`, SpriteKind.Player)
Character.setStayInScreen(true)
controller.moveSprite(Character)
scene.centerCameraAt(0, 0)
info.setScore(0)
info.setLife(3)
game.showLongText("Welcome to the Underworld!", DialogLayout.Bottom)
game.showLongText("Have a fun time avoiding my enemies!", DialogLayout.Bottom)
game.showLongText("Now go and fail!", DialogLayout.Bottom)
Devil = sprites.create(assets.image`Demon`, SpriteKind.Enemy)
Devil.setStayInScreen(true)
forever(function () {
    Character.setImage(assets.image`playerframe1`)
    Character.setImage(assets.image`playerframe2`)
})
forever(function () {
    while (Character.overlapsWith(Devil)) {
        info.changeLifeBy(-1)
        pause(2000)
    }
})
