// how do I export the code in this file?

function ARROW_CONTROLS(window) {

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
}

export default { ARROW_CONTROLS }