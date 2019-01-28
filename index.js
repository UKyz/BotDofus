// Move the mouse across the screen as a sine wave.
const robot = require('robotjs');
robotjs_combo = require('robotjs-combo');

// const returnPoint = {x: 626, y:31};
const pointToRight = {x: 1157, y: 340};
const pointToLeft = {x: 103, y: 365};
const pointToTop = {x: 680, y: 50};
const pointToBottom = {x: 680, y: 650};

const balade2 = [
  {x: 12, y: 20, tabPoint: [
      {x: 298, y: 207},
      {x: 419, y: 268},
      {x: 626, y: 193},
      {x: 774, y: 207},
      {x: 833, y: 150},
      {x: 743, y: 134},
    ], timeBefore: 2000, timeAfter: 20000, goTo: 'top'},
  {x: 12, y: 19, tabPoint: [
      {x: 686, y: 551},
      {x: 595, y: 298},
      {x: 665, y: 269},
      {x: 716, y: 149},
      {x: 626, y: 135},
    ], timeBefore: 3000, timeAfter: 30000, goTo: 'top'},
  {x: 12, y: 18, tabPoint: [
      {x: 565, y: 579},
      {x: 665, y: 596},
      {x: 713, y: 566},
      {x: 686, y: 521},
      {x: 566, y: 492},
    ], timeBefore: 500, timeAfter: 20000, goTo: 'top'},
]

const goToSide = point => {
  robot.moveMouse(point.x, point.y);
  robot.mouseClick();
  robot.setMouseDelay(3000);
}

const firstClickInTab = point => {
  robot.moveMouse(point.x, point.y);
  robot.mouseClick();
  robot.setMouseDelay(100);
}

const lastClickInTab = (point, delay) => {
  robot.moveMouse(point.x, point.y);
  robot.mouseClick();
  robot.setMouseDelay(delay);
}

const toMap = async (tabPoint, timeBefore, timeAfter) => {
  robot.setMouseDelay(timeBefore);

  await tabPoint.forEach(point => {
    if (point === tabPoint[0]) {
      firstClickInTab(point);
    } else if (point === tabPoint[tabPoint.length - 1]) {
      lastClickInTab(point, timeAfter);
    }
    else {
      robot.moveMouse(point.x, point.y);
      robot.mouseClick();
    }
  });
}

const changeMap = async goTo => {
  switch (goTo) {
    case 'top':
      await goToSide(pointToTop);
      break;
    case 'bottom':
      await goToSide(pointToBottom);
      break;
    case 'right':
      await goToSide(pointToRight);
      break;
    case 'left':
      await goToSide(pointToLeft);
      break;
    default:
      break;
  }
};

const main = async balade => {
  await balade.reduce(async (promise, map) => {
    await promise;
    await toMap(map.tabPoint, map.timeBefore, map.timeAfter).then(async () => {
      await changeMap(map.goTo);
    });
  }, Promise.resolve());
}

main(balade2);