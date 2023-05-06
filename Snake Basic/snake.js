// Sure! Here's a simple Snake game written in JavaScript:

// canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const resolution = 10; // 👈 defines the size of each square unit in the game, which is used for positioning and movement of the snake and the food.
canvas.width = 400;
canvas.height = 400;


// snake object
class Snake {
  constructor() {
    this.length = 1;
    this.body = [{ x: 100, y: 10 }];
    // 👆 this is where the snake buddy starts, at +10 from the left of the border, and from +10 above the centre of the border. It is an array with one index and two inner values.

    // as the snake grows, it becomes an array of objects, each object with its own x and y coordinates. [ {} , {} , {} , {}  ]
    this.velX = 1;
    this.velY = 0;
    this.food = { x: 20, y: 20 };
  }

  update() {
    let head = { x: this.body[0].x + this.velX, y: this.body[0].y + this.velY };

    // if snake goes beyond the right-side boundary
    if (head.x < 0) {
      head.x = canvas.width / resolution - 1;
      // 👆 key point: since the canvas width is divided by resolution to result in "40 blocks" in each direction, we need to reset the right position of the snake to 39 (because , as an array, it starts at 0 and thus the indexes in it are 0 to 39)

    }

    // if snake goes beyond the left-side boundary
    else if (head.x >= canvas.width / resolution) {
      head.x = 0;
    }

    // if snake goes beyond the bottom-side boundary

    if (head.y < 0) {
      head.y = canvas.height / resolution - 1;
    } else if (head.y >= canvas.height / resolution) {
      head.y = 0;
    }
    //  if the snake eats the food, the snake grows.
    this.body.unshift(head);
    if (this.body[0].x === this.food.x && this.body[0].y === this.food.y) {
      this.length++;
      this.food.x = Math.floor(Math.random() * canvas.width / resolution);
      this.food.y = Math.floor(Math.random() * canvas.height / resolution);
    }

    // 👆 if position of snake intersects positoiin of food , then +1 to the snake length. 
    // set food to new random position 

    while (this.body.length > this.length) {
      this.body.pop();
    }
    // 👆 new snake-body-array length = 2 , which is greater than 1 , simulate the snake moving by "popping" the last object in the array 

  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    for (let i = 0; i < this.body.length; i++) {
      ctx.fillRect(this.body[i].x * resolution, this.body[i].y * resolution, resolution, resolution);
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(this.food.x * resolution, this.food.y * resolution, resolution, resolution);
  }
}

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

function loop() {
  snake.update();
  snake.draw();
}

// setInterval(loop, 100);

loop()


// This code creates a simple Snake game using the `canvas` element and its `2d` context. The `Snake` class defines the behavior of the snake and its food. The `update` method updates the position of the snake and checks if it has eaten the food. The `draw` method draws the snake and the food on the canvas. The `keydown` event listener allows the user to control the direction of the snake using the arrow keys. The `loop` function calls the `update` and `draw` methods at a regular interval to animate the game.

// You can copy and paste this code into an HTML file with a `canvas` element to see it in action. Is there anything else you would like to know?



// You can modify the `update` method of the `Snake` class to check if the snake has gone out of bounds and update its position accordingly.Here's an example:

// update() {
//   let head = { x: this.body[0].x + this.velX, y: this.body[0].y + this.velY };
//   if (head.x < 0) {
//     head.x = canvas.width / resolution - 1;
//   } else if (head.x >= canvas.width / resolution) {
//     head.x = 0;
//   }
//   if (head.y < 0) {
//     head.y = canvas.height / resolution - 1;
//   } else if (head.y >= canvas.height / resolution) {
//     head.y = 0;
//   }
//   this.body.unshift(head);
//   if (this.body[0].x === this.food.x && this.body[0].y === this.food.y) {
//     this.length++;
//     this.food.x = Math.floor(Math.random() * canvas.width / resolution);
//     this.food.y = Math.floor(Math.random() * canvas.height / resolution);
//   }
//   while (this.body.length > this.length) {
//     this.body.pop();
//   }
// }



// ```

// In this updated version of the `update` method, we check if the `x` and `y` coordinates of the snake's head are out of bounds. If the `x` coordinate is less than `0`, we set it to the maximum value (`canvas.width / resolution - 1`). If it's greater than or equal to the maximum value (`canvas.width / resolution`), we set it to `0`. We do the same for the `y` coordinate.

// This will make the snake appear on the opposite side of the canvas when it goes out of bounds. You can copy and paste this updated `update` method into your code to see it in action. Is there anything else you would like to know?