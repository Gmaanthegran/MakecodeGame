def on_on_created(sprite):
    Devil.follow(Character, 50)
    pause(5000)
    sprites.destroy(Devil)
    info.set_score(info.life())
    game.game_over(True)
sprites.on_created(SpriteKind.enemy, on_on_created)

def on_life_zero():
    game.game_over(False)
info.on_life_zero(on_life_zero)

Devil: Sprite = None
Character: Sprite = None
music.play(music.create_sound_effect(WaveShape.SINE,
        1,
        5000,
        0,
        255,
        500,
        SoundExpressionEffect.NONE,
        InterpolationCurve.LINEAR),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
Character = sprites.create(assets.image("""
    playerframe1
"""), SpriteKind.player)
Character.set_stay_in_screen(True)
controller.move_sprite(Character)
scene.center_camera_at(0, 0)
info.set_score(0)
info.set_life(3)
game.show_long_text("Welcome to the Underworld!", DialogLayout.BOTTOM)
game.show_long_text("Have a fun time avoiding my enemies!", DialogLayout.BOTTOM)
game.show_long_text("Now go and fail!", DialogLayout.BOTTOM)
Devil = sprites.create(assets.image("""
    Demon
"""), SpriteKind.enemy)
Devil.set_stay_in_screen(True)

def on_forever():
    Character.set_image(assets.image("""
        playerframe1
    """))
    Character.set_image(assets.image("""
        playerframe2
    """))
forever(on_forever)

def on_forever2():
    while Character.overlaps_with(Devil):
        info.change_life_by(-1)
        pause(2000)
forever(on_forever2)
