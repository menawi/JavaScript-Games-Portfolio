class SnakeGame {

  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext("2d");
    this.snake = new Snake(this.canvas.width / 2, this.canvas.height / 2, "right");
    this.draw();
  }

  // construct the Game object using canvasId from HTML as the parameter :
  // canvas, ctx, snake, draw()

  draw() {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.snake.move();
    this.snake.draw(this.ctx);
    requestAnimationFrame(() => this.draw());


  }

  // draw function 
  // clear the rectangle(x,y,w,h)
  // move snake
  // draw snake 
  // animate  

}

// analysis : 

class Snake {
  constructor(x, y, direction) {
    this.parts = [{ x, y }]
    this.direction = direction
  }

  move() {
    const head = this.parts[0]
    let newX, newY;

    switch (this.direction) {

      case "up":
        newX = head.x;
        newY = head.y - 10;

        break;

      case "down":
        newX = head.x;
        newY = head.y + 10;

      case "left":
        newX = head.x - 10;
        newY = head.y;
        break;

      case "right":
        newX = head.x + 10;
        newY = head.y;
        break;
    }

    this.parts.unshift({ x: newX, y: newY });
    this.parts.pop();
  }


  draw(ctx) {
    ctx.fillStyle = "green";

    for (let i = 0; i < this.parts.length; i++) {
      const { x, y } = this.parts[i];
      ctx.fillRect(x, y, 10, 10);
    }
  }

}

const game = new SnakeGame("gameCanvas");

game

// analysis : 
