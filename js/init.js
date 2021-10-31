//キーが押された時の処理
document.addEventListener('keydown', keyPush);

//キャンバスの要素を取得
const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");

//1マスのサイズ
const SIZE = 20;
//フレームレート
const FPS = 10;
//ヘビの長さの初期値
const MIN = 5;

//ヘビ関連の処理
//頭の位置
let px = py = SIZE/2;
//進行方向
let xd = yd = 0;
//胴体
let snake = [];
//最後尾
let tail = MIN;
//リンゴの大きさ
let appleX = appleY = 15;

//文字関連の変数
//文字列
let text;
//文字列の横の長さ
let textWidth;

//snakeの色
let color = ["#ed0000","#eff700","#07b34c","#1100ff","#ff00dd"];
let colorCount = 0;

//スコア関連の変数
//現在のスコア
let score = 0;
//ハイスコア
let highscore = 0;

//タイマー処理(ゲームの継続)
let timer;

//spaceキーが押されたときのフラグ
let spaceflg = 0;
