const desktopIdle = require("desktop-idle");
var robot = require("robotjs");
robot.setMouseDelay(2);
const maxIdleTime = 60 * 5; // 5 minutes
var moveCount = 0;
const moveSize = 100;

const idleBlock = () => {
  console.log(
    `[${new Date().toLocaleString()}] Idle Time: ${Math.floor(
      desktopIdle.getIdleTime() / 60
    )}m ${Math.floor(desktopIdle.getIdleTime() % 60)}s`
  );
  if (desktopIdle.getIdleTime() < maxIdleTime) {
    setTimeout(idleBlock, (maxIdleTime - desktopIdle.getIdleTime()) * 1000);
    return;
  }
  console.log("moving mouse");
  var mouse = robot.getMousePos();
  let moveXSize = Math.floor((moveCount % 4) / 2) == 0 ? -moveSize : moveSize;
  let moveYSize = Math.floor(((moveCount % 4) + 1) / 2) == 1 ? -moveSize : moveSize;
  robot.moveMouse(mouse.x + moveXSize, mouse.y + moveYSize);
  setTimeout(idleBlock, maxIdleTime * 1000);
  moveCount++;
};
idleBlock();
