




// 📍canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// const resolution = 10; // 👈 defines the size of each square unit in the game, which is used for positioning and movement of the snake and the food.
canvas.width = 400;
canvas.height = 400;


// 📍snake object
class Snake {
  constructor() {
    this.length = 1;
    this.body = [{ x: 1, y: 1 }];
    // 👆 this is where the snake body starts, at +10 from the left of the border, and from +10 above the centre of the border. It is an array with one index and two inner values.

    // as the snake grows, it becomes an array of objects, each object with its own x and y coordinates. [ {} , {} , {} , {}  ]
    this.velX = 1;
    this.velY = 0;
    this.food = { x: 1, y: 1 };
  }

  //  📍this is the snake's movement function. It controls the movement of the snake body.
  update() {
    let head = { x: this.body[0].x + this.velX, y: this.body[0].y + this.velY };
    // 👉 this means that no matter how many new additions to this array are made (as the snake grows, more {x,y} are added to it) , the first index of snake array will alway be considered the head

    // 👉 let headIndex = snakeBodyArray[0]

    // if snake goes beyond the right-side boundary
    if (head.x < 0) {
      head.x = canvas.width - 1;
      // 👆 key point: since the canvas width is divided b to result in "40 blocks" in each direction, we need to reset the right position of the snake to 39 (because , as an array, it starts at 0 and thus the indexes in it are 0 to 39)

    }

    // if snake goes beyond the left-side boundary
    else if (head.x >= canvas.width) {
      head.x = 0;
    }

    // if snake goes beyond the bottom-side boundary

    if (head.y < 0) {
      head.y = canvas.height - 1;
    } else if (head.y >= canvas.height) {
      head.y = 0;
    }
    //  if the snake eats the food, the snake grows.
    this.body.unshift(head);
    if (this.body[0].x === this.food.x && this.body[0].y === this.food.y) {
      this.length++;
      this.food.x = Math.floor(Math.random() * (canvas.width / 10));
      this.food.y = Math.floor(Math.random() * (canvas.height / 10));
    }


    // 👆 if position of snake intersects positoiin of food , then +1 to the snake length. 
    // set food to new random position 
    // 📍
    while (this.body.length > this.length) {
      this.body.pop();
    }
    // 👆 new snake-body-array length = 2 , which is greater than 1 , simulate the snake moving by "popping" the last object in the array 

  }

  // end of update function //

  // draw function that renders the game

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'lightgreen';

    for (let i = 0; i < this.body.length; i++) {
      ctx.fillRect(this.body[i].x, this.body[i].y, (canvas.width / 10), (canvas.height / 10));
    }
    // for each part of the snake body array, render it , and render the entire resoulution context (10px per cube)

    // 👆There are actually TWO things happening here :
    // 1. We are rendenring the _location_ of the snake array body part 
    // 2. We are modifying the rendering _size_ of that body part 

    ctx.fillStyle = 'red';
    ctx.fillRect(this.food.x, this.food.y, (canvas.width / 10), (canvas.height / 10));

    // same as snake rendering concept

    //   // Set line width and color
    //   ctx.lineWidth = 1;
    //   ctx.strokeStyle = "gray";

    //   // Draw vertical lines
    //   for (let x = 0; x <= canvas.width; x++) {
    //     ctx.beginPath();
    //     ctx.moveTo(x, 0);
    //     ctx.lineTo(x, canvas.height);
    //     ctx.stroke();
    //   }

    //   // Draw horizontal lines
    //   for (let y = 0; y <= canvas.height; y++) {
    //     ctx.beginPath();
    //     ctx.moveTo(0, y);
    //     ctx.lineTo(canvas.width, y);
    //     ctx.stroke();
    //   }


    // }

  }
}

// new instance of Snake
const snake = new Snake();

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      snake.velX = -1;
      snake.velY = 0;
      break;
    case 'ArrowRight':
      snake.velX = 1;
      snake.velY = 0;
      break;
    case 'ArrowUp':
      snake.velX = 0;
      snake.velY = -1;
      break;
    case 'ArrowDown':
      snake.velX = 0;
      snake.velY = 1;
      break;
  }
});

// 👉 axis awareness :: 
//  X [ right = +  , left = - ]
// Y [ up = -, down = +]

function loop() {
  snake.update();
  snake.draw();
}

// setInterval(loop, 100);

// loop()


window.onload = () => {
  requestAnimationFrame(() => setInterval(loop, 60));
};

// window.onload(requestAnimationFrame(
//   setInterval(loop, 100)
// )
// )
