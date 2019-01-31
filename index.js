// Move the mouse across the screen as a sine wave.
const robot = require('robotjs');

// Const returnPoint = {x: 626, y:31};
const pointToRight = {x: 1157, y: 340};
const pointToLeft = {x: 103, y: 365};
const pointToTop = {x: 680, y: 50};
const pointToTopRight = {x: 1012, y: 50};
const pointToTopLeft = {x: 264, y: 50};
const pointToBottom = {x: 680, y: 650};
const pointToBottomRight = {x: 1012, y: 650};
const pointToBottomLeft = {x: 264, y: 650};

const balade2 = [
  {position: {x: 12, y: 20}, tabPoint: [
    {x: 477, y: 268},
    {x: 298, y: 207},
    {x: 626, y: 193},
    {x: 774, y: 207},
    {x: 833, y: 150},
    {x: 743, y: 134}
  ], timeBefore: 3000, timeAfter: 30000, goTo: 'top'},
  {position: {x: 12, y: 19}, tabPoint: [
    {x: 686, y: 551},
    {x: 595, y: 298},
    {x: 665, y: 269},
    {x: 716, y: 149},
    {x: 626, y: 135}
  ], timeBefore: 3000, timeAfter: 30000, goTo: 'top'},
  {position: {x: 12, y: 18}, tabPoint: [
    {x: 565, y: 579},
    {x: 665, y: 596},
    {x: 713, y: 566},
    {x: 686, y: 521},
    {x: 566, y: 492},
    {x: 685, y: 404},
    {x: 775, y: 358},
    {x: 806, y: 315},
    {x: 865, y: 283},
    {x: 894, y: 239},
    {x: 896, y: 207},
    {x: 1015, y: 210}
  ], timeBefore: 500, timeAfter: 50000, goTo: 'right'},
  {position: {x: 13, y: 18}, tabPoint: [
    {x: 355, y: 120},
    {x: 416, y: 121}
  ], timeBefore: 2000, timeAfter: 9000, goTo: 'top'},
  {position: {x: 13, y: 17}, tabPoint: [
    {x: 297, y: 599},
    {x: 296, y: 539},
    {x: 335, y: 389},
    {x: 416, y: 389},
    {x: 385, y: 344},
    {x: 415, y: 300}
  ], timeBefore: 2000, timeAfter: 30000, goTo: 'top'},
  {position: {x: 13, y: 16}, tabPoint: [
    {x: 446, y: 106}
  ], timeBefore: 6000, timeAfter: 9000, goTo: 'top'},
  {position: {x: 13, y: 15}, tabPoint: [
    {x: 536, y: 567},
    {x: 416, y: 598},
    {x: 355, y: 567}
  ], timeBefore: 1500, timeAfter: 13000, goTo: 'left'},
  {position: {x: 12, y: 15}, tabPoint: [
    {x: 955, y: 449},
    {x: 894, y: 449},
    {x: 895, y: 508},
    {x: 745, y: 464},
    {x: 626, y: 464},
    {x: 535, y: 448},
    {x: 505, y: 434},
    {x: 356, y: 359},
    {x: 386, y: 284},
    {x: 326, y: 255},
    {x: 385, y: 225},
    {x: 326, y: 135}
  ], timeBefore: 1500, timeAfter: 50000, goTo: 'top'},
  {position: {x: 12, y: 14}, tabPoint: [
    {x: 326, y: 553},
    {x: 326, y: 494},
    {x: 446, y: 314},
    {x: 537, y: 298},
    {x: 625, y: 196},
    {x: 595, y: 150}
  ], timeBefore: 2000, timeAfter: 25000, goTo: 'top'},
  {position: {x: 12, y: 13}, tabPoint: [
    {x: 534, y: 597},
    {x: 565, y: 432},
    {x: 507, y: 315},
    {x: 445, y: 314},
    {x: 325, y: 285},
    {x: 536, y: 269},
    {x: 505, y: 194},
    {x: 625, y: 165},
    {x: 744, y: 134}
  ], timeBefore: 2500, timeAfter: 45000, goTo: 'topRight'},
  {position: {x: 12, y: 12}, tabPoint: [
    {x: 685, y: 613},
    {x: 596, y: 539},
    {x: 536, y: 569}
  ], timeBefore: 1500, timeAfter: 15000, goTo: 'left'},
  {position: {x: 11, y: 12}, tabPoint: [
    {x: 328, y: 522},
    {x: 447, y: 462}
  ], timeBefore: 6000, timeAfter: 9000, goTo: 'left'},
  {position: {x: 10, y: 12}, tabPoint: [
    {x: 863, y: 522},
    {x: 505, y: 551}
  ], timeBefore: 6000, timeAfter: 10000, goTo: 'left'},
  {position: {x: 9, y: 12}, tabPoint: [
    {x: 536, y: 268},
    {x: 775, y: 597}
  ], timeBefore: 6000, timeAfter: 8000, goTo: 'bottom'},
  {position: {x: 9, y: 13}, tabPoint: [
    {x: 714, y: 151},
    {x: 446, y: 343},
    {x: 476, y: 389}
  ], timeBefore: 1500, timeAfter: 13000, goTo: 'left'},
  {position: {x: 8, y: 13}, tabPoint: [
    {x: 983, y: 431},
    {x: 863, y: 551},
    {x: 745, y: 521}
  ], timeBefore: 1000, timeAfter: 13000, goTo: 'bottom'},
  {position: {x: 8, y: 14}, tabPoint: [
    {x: 775, y: 208},
    {x: 775, y: 386},
    {x: 744, y: 432},
    {x: 556, y: 582},
    {x: 298, y: 537}
  ], timeBefore: 3000, timeAfter: 20000, goTo: 'left'},
  {position: {x: 7, y: 14}, tabPoint: [
    {x: 1014, y: 507},
    {x: 924, y: 612}
  ], timeBefore: 3000, timeAfter: 10000, goTo: 'bottom'},
  {position: {x: 7, y: 15}, tabPoint: [
    {x: 774, y: 209},
    {x: 594, y: 328},
    {x: 715, y: 388},
    {x: 924, y: 522}
  ], timeBefore: 3000, timeAfter: 20000, goTo: 'bottom'},
  {position: {x: 7, y: 16}, tabPoint: [
    {x: 625, y: 283},
    {x: 625, y: 313},
    {x: 744, y: 491}
  ], timeBefore: 3500, timeAfter: 12000, goTo: 'bottom'},
  {position: {x: 7, y: 17}, tabPoint: [
    {x: 893, y: 178},
    {x: 862, y: 194},
    {x: 893, y: 238},
    {x: 655, y: 267},
    {x: 655, y: 297},
    {x: 685, y: 312},
    {x: 773, y: 386},
    {x: 982, y: 491},
    {x: 1042, y: 549},
    {x: 952, y: 564}
  ], timeBefore: 2500, timeAfter: 45000, goTo: 'bottom'},
  {position: {x: 7, y: 18}, tabPoint: [
    {x: 922, y: 253},
    {x: 834, y: 268},
    {x: 893, y: 297}
  ], timeBefore: 4000, timeAfter: 10000, goTo: 'right'},
  {position: {x: 8, y: 18}, tabPoint: [
    {x: 387, y: 313},
    {x: 417, y: 238},
    {x: 893, y: 89},
    {x: 982, y: 105},
    {x: 833, y: 209}
  ], timeBefore: 4000, timeAfter: 22000, goTo: 'bottom'},
  {position: {x: 8, y: 19}, tabPoint: [
    {x: 863, y: 135},
    {x: 922, y: 223}
  ], timeBefore: 4000, timeAfter: 8000, goTo: 'right'},
  {position: {x: 9, y: 19}, tabPoint: [
    {x: 269, y: 224},
    {x: 477, y: 180},
    {x: 389, y: 105},
    {x: 329, y: 135},
    {x: 950, y: 120},
    {x: 922, y: 194}
  ], timeBefore: 1000, timeAfter: 27000, goTo: 'right'},
  {position: {x: 10, y: 19}, tabPoint: [
    {x: 507, y: 255},
    {x: 626, y: 135},
    {x: 1011, y: 210},
    {x: 922, y: 460},
    {x: 952, y: 505}
  ], timeBefore: 6000, timeAfter: 24000, goTo: 'right'},
  {position: {x: 11, y: 19}, tabPoint: [
    {x: 506, y: 373},
    {x: 595, y: 387},
    {x: 625, y: 343},
    {x: 861, y: 462},
    {x: 773, y: 477},
    {x: 773, y: 505},
    {x: 803, y: 550}
  ], timeBefore: 4000, timeAfter: 29000, goTo: 'bottom'},
  {position: {x: 11, y: 20}, tabPoint: [
    {x: 862, y: 134},
    {x: 892, y: 180},
    {x: 952, y: 180},
    {x: 864, y: 253}
  ], timeBefore: 2000, timeAfter: 15000, goTo: 'right'}
];
const findMap = (balade, point) => {
  let res = 0;
  balade.forEach(map => {
    if (map.position.x === point.x && map.position.y === point.y) {
      res = balade.indexOf(map);
    }
  });
  return res;
};

const goToSide = point => {
  robot.moveMouse(point.x, point.y);
  robot.setMouseDelay(3000);
  robot.mouseClick();
};

const firstClickInTab = point => {
  robot.moveMouse(point.x, point.y);
  robot.mouseClick();
  robot.setMouseDelay(100);
};

const lastClickInTab = (point, delay) => {
  robot.moveMouse(point.x, point.y);
  robot.mouseClick();
  robot.setMouseDelay(delay);
};

const toMap = async (tabPoint, timeBefore, timeAfter) => {
  robot.setMouseDelay(timeBefore);

  await tabPoint.forEach(point => {
    if (point === tabPoint[0]) {
      firstClickInTab(point);
    } else if (point === tabPoint[tabPoint.length - 1]) {
      lastClickInTab(point, timeAfter);
    } else {
      robot.moveMouse(point.x, point.y);
      robot.mouseClick();
    }
  });
};

const changeMap = async goTo => {
  switch (goTo) {
    case 'top':
      await goToSide(pointToTop);
      break;
    case 'topRight':
      await goToSide(pointToTopRight);
      break;
    case 'topLeft':
      await goToSide(pointToTopLeft);
      break;
    case 'bottom':
      await goToSide(pointToBottom);
      break;
    case 'bottomRight':
      await goToSide(pointToBottomRight);
      break;
    case 'bottomLeft':
      await goToSide(pointToBottomLeft);
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

const main = async (balade, startPosition = 0) => {
  startPosition = (startPosition === 0) ? startPosition :
    findMap(balade2, startPosition);
  await balade.slice(startPosition, balade.length)
    .reduce(async (promise, map) => {
      await promise;
      console.log('Bot in the map :');
      console.log(map.position);
      await toMap(map.tabPoint, map.timeBefore,
        map.timeAfter).then(async () => {
        await changeMap(map.goTo);
      });
    }, Promise.resolve());
};

if (process.argv[2] === '-m') {
  const startPosition = {x: parseInt(process.argv[3], 10), y:
      parseInt(process.argv[4], 10)};
  main(balade2, startPosition);
} else {
  main(balade2);
}

