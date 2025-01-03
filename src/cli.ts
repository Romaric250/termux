import { GameEngine } from "./core/engine";
import { Level1 } from "./levels/level1";

const levels = [new Level1("level 1", "try searching for this file")]

const game = new GameEngine(levels)

game.startGame()
game.playlevel()