ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canv.width, canv.height);
ctx.fillStyle = "#000000";
ctx.font = "48px serif";
ctx.fillText("Snake Game", 0, 50);
ctx.font = "30px serif";
ctx.fillText("PUSH SPACE KEY", 0, canv.height);
function gameStart(){
   timer = setInterval(function(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = color[colorCount];
    colorCount++;
    if(colorCount == color.length){
      colorCount = 0;
    }
    px += xd;
    py += yd;
    snake.push({x:px,y:py});
    for(let i=0;i<snake.length-1;i++){
      ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
      if(snake[i].x ==px && snake[i].y == py){
        tail = MIN;
      }
    }
    while(snake.length > tail){
      snake.shift();
    }
    if(appleX ==px && appleY == py){
      tail++;
      appleX = Math.floor(Math.random()*canv.width/SIZE);
      appleY = Math.floor(Math.random()*canv.height/SIZE);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2);
    if(px < 0 || px > canv.width/SIZE || py < 0 || py > canv.height/SIZE){
      gameOver();
    }
  },1000/FPS);
}
function gameOver(){
  clearInterval(timer);
  reset();
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "#000000";
  ctx.font = "48px serif";
  ctx.fillText("GameOver", 0, 50);
  ctx.font = "30px serif";
  ctx.fillText("PUSH SPACE KEY", 0, canv.height);
}
function reset(){
  px = py = SIZE/2;
  xd = yd = 0;
  snake = [];
  tail = MIN;
  appleX = appleY = 15;
  spaceflg = 0;
}
