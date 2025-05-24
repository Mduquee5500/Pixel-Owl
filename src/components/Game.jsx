import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import Bomb from "../assets/bomb.png";
import Owl from "../assets/OwlSprites.png";
import Sky from "../assets/sky.png";
import Ground from "../assets/platform.png";
import Star from "../assets/star.png";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const GRAVITY_Y = 1300;
const MOVE_SPEED = 250;
const JUMP_VELOCITY = -700;

const Game = () => {
  const gameRef = useRef(null);
  const phaserGame = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      parent: gameRef.current,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: GRAVITY_Y },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    phaserGame.current = new Phaser.Game(config);

    return () => {
      phaserGame.current?.destroy(true);
    };
  }, []);

  let player,
    platforms,
    cursors,
    stars,
    bombs,
    score = 0,
    scoreText,
    prevDirection = "left";

  const preload = function () {
    this.load.image("sky", Sky);
    this.load.image("ground", Ground);
    this.load.image("star", Star);
    this.load.image("bomb", Bomb);
    this.load.spritesheet("owl", Owl, {
      frameWidth: 32,
      frameHeight: 32,
    });
  };

  const create = function () {
    this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, "sky");

    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    player = this.physics.add.sprite(100, 450, "owl").setScale(1.5);
    player.setBounce(0.2).setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("owl", { start: 27, end: 30 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idle-left",
      frames: this.anims.generateFrameNumbers("owl", { start: 31, end: 36 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idle-right",
      frames: this.anims.generateFrameNumbers("owl", { start: 37, end: 42 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("owl", { start: 43, end: 46 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "die-left",
      frames: this.anims.generateFrameNumbers("owl", { start: 0, end: 26 }),
      frameRate: 10,
      repeat: 0,
    });
    this.anims.create({
      key: "die-right",
      frames: this.anims.generateFrameNumbers("owl", { start: 47, end: 72 }),
      frameRate: 10,
      repeat: 0,
    });

    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, platforms);

    stars = this.physics.add.group({
      key: "star",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });
    stars.children.iterate((child) =>
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    );

    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);

    scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "32px",
      fill: "#FFF",
    });

    bombs = this.physics.add.group();
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);
  };

  const update = function () {
    if (cursors.left.isDown) {
      player.setVelocityX(-MOVE_SPEED);
      player.anims.play("left", true);
      prevDirection = "left";
    } else if (cursors.right.isDown) {
      player.setVelocityX(MOVE_SPEED);
      player.anims.play("right", true);
      prevDirection = "right";
    } else {
      player.setVelocityX(0);
      player.anims.play(prevDirection === "left" ? "idle-left" : "idle-right");
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(JUMP_VELOCITY);
    }
  };

  const collectStar = function (player, star) {
    star.disableBody(true, true);
    score += 10;
    scoreText.setText("Score: " + score);

    if (stars.countActive(true) === 0) {
      stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });

      const x =
        player.x < GAME_WIDTH / 2
          ? Phaser.Math.Between(GAME_WIDTH / 2, GAME_WIDTH)
          : Phaser.Math.Between(0, GAME_WIDTH / 2);
      const bomb = bombs.create(x, 16, "bomb");
      bomb
        .setBounce(1)
        .setCollideWorldBounds(true)
        .setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  };

  const hitBomb = function (player, bomb) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play(prevDirection === "left" ? "die-left" : "die-right");
    showGameOverScreen.call(this);
    sendScore(score);
  };

  const showGameOverScreen = function () {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    const bg = this.add.graphics();
    bg.fillStyle(0x000000, 0.75);
    bg.fillRect(0, 0, width, height);

    this.add
      .text(width / 2, 200, "Game Over", { fontSize: "64px", fill: "#fff" })
      .setOrigin(0.5);
    this.add
      .text(width / 2, 330, "Score: " + score, {
        fontSize: "32px",
        fill: "#fff",
      })
      .setOrigin(0.5);

    const restart = this.add
      .text(width / 2, 400, "Restart", {
        fontSize: "32px",
        fill: "#fff",
        padding: { x: 20, y: 10 },
      })
      .setOrigin(0.5)
      .setInteractive();

    restart.on("pointerdown", () => {
      this.scene.restart();
      score = 0;
    });
  };

  const sendScore = async (username, score) => {
    try {
      const res = await fetch("http://localhost:3001/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, score }),
      });
      if (!res.ok) {
        console.error("Error sending score");
      }
    } catch (error) {
      console.error("Error sending score", error);
    }
  };

  return (
    <div className="game-container">
      <div ref={gameRef} />
    </div>
  );
};

export default Game;
