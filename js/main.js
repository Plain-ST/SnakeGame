//スタート画面
//背景
BGColor("#eeeeee");
//タイトル文字
textDrawC("Snake Game", "60px serif", "#07b34c", canv.height / 2);
textDrawC("GAME START", "30px serif", "#000000", canv.height - 80);
textDrawC("PUSH \"SPACE\" KEY", "25px serif", "#ed0000", canv.height - 50);

//ゲーム画面
function gameStart() {
  //変数のリセット
  reset();
  //ゲームの処理，2000msで呼び出す
  timer = setInterval(function () {
    //背景
    BGColor("#000000");
    //スコア
    textDrawC("Score: " + score,"30px serif","#bbbbbb",canv.height / 2);
    //ハイスコア
    textDrawC(" High Score: " + highscore, "30px serif", "#bbbbbb", (canv.height / 2) + 30);
    //ヘビの色
    ctx.fillStyle = color[colorCount];
    colorCount++;
    if (colorCount == color.length) {
      colorCount = 0;
    }
    //ヘビの頭の座標
    px += xd;
    py += yd;
    //ヘビの胴体部分の処理
    snake.push({ x: px, y: py });
    for (let i = 0; i < snake.length - 1; i++) {
      ctx.fillRect(snake[i].x * SIZE, snake[i].y * SIZE, SIZE - 2, SIZE - 2);
      //頭が胴体に当たったらリセット
      if (snake[i].x == px && snake[i].y == py) {
        tail = MIN;
        score = 0;
      }
    }
    //最後尾を消す
    while (snake.length > tail) {
      snake.shift();
    }

    //リンゴの処理
    if (appleX == px && appleY == py) {
      //胴体を伸ばす
      tail++;
      //新しいリンゴを生成
      appleX = Math.floor(Math.random() * canv.width / SIZE);
      appleY = Math.floor(Math.random() * canv.height / SIZE);
      //スコアを10上げる
      score = score + 10;
      //ハイスコアの更新
      if (highscore <= score) {
        highscore = score;
      }
    }
    //リンゴの色
    ctx.fillStyle = "#ed0000";
    //リンゴの描画
    ctx.fillRect(appleX * SIZE, appleY * SIZE, SIZE - 2, SIZE - 2);

    //壁との当たり判定
    if ((px < 0) || (px > canv.width / SIZE) || (py < 0) || (py > canv.height / SIZE)) {
      gameOver();
    }
  }, 2000 / FPS);
}
//ゲームオーバー画面
function gameOver() {
  //ゲームの停止
  clearInterval(timer);
  //背景
  BGColor("#eeeeee");
  //文字
  textDrawC("GAME OVER", "48px serif", "#1100ff", canv.height / 2 - 60);
  textDrawC("Your high score is", "30px serif", "#000000", canv.height / 2 - 30);
  textDrawC(highscore, "50px serif", "#ed0000", canv.height / 2 + 30);
  textDrawC("RESTART GAME", "30px serif", "#000000", canv.height - 60);
  textDrawC("PUSH SPACE KEY", "25px serif", "#ed0000", canv.height - 30);
  //スペースキーを押せるようにしてゲーム画面に戻れるようにする
  spaceflg = 0;
}
//変数のリセット
function reset() {
  px = py = SIZE / 2;
  xd = yd = 0;
  snake = [];
  tail = MIN;
  appleX = appleY = 15;
  score = 0;
  highscore = 0;
}
//背景を単色で描画
function BGColor(c){
  ctx.fillStyle = c;
  ctx.fillRect(0, 0, canv.width, canv.height);
}
//画面横方向中央に文字の描写(文字列,フォント,色,高さ)
function textDrawC(t, f, c, h) {
  //色の設定
  ctx.fillStyle = c;
  //文字の設定
  text = t;
  //フォント(フォントサイズ)の設定
  ctx.font = f;
  //横幅の測定
  textWidth = ctx.measureText(text).width;
  //文字の描画
  ctx.fillText(text, (400 - textWidth) / 2, h);
}