document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = appleY = 15;

let color = ["#ed0000","#eff700","#07b34c","#1100ff","#ff00dd"];
let colorCount = 0;

let timer;
let spaceflg = 0;
