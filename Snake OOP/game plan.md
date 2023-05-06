# Snake
by Omar Elmenawi @menawi

### Mechanics

The objective of the snake game is to eat as much food as possible without running into any walls or the snake's own body. The snake moves around the game board and grows longer as it eats food. The game ends if the snake runs into a wall or its own body.

### Objects

#### Snake
- The snake consists of a head and a body made up of multiple parts.
- The snake can move in four directions: up, down, left, and right.
- The snake grows longer when it eats food.

#### Food
- Food is randomly generated on the game board.
- The snake must eat the food to grow longer and increase its score.

#### Game Board
- The game board is a rectangular grid of cells.
- The snake and food move around the game board.
- The game board has boundaries that the snake cannot cross.

#### Score
- The score represents the number of food items the snake has eaten.

### Logic

#### Game Initialization
- Initialize the game board with a grid of cells.
- Initialize the snake with a starting position and direction.
- Generate the first food item on the game board.

#### Snake Movement
- Update the position of the snake's head based on its current direction.
- Move the rest of the snake's body along with the head.
- Check if the snake has collided with any walls or its own body.

#### Food Generation
- Generate a new food item on the game board in a random position.
- Check if the new food item is not on the snake's body.

#### Game Over
- End the game if the snake collides with a wall or its own body.
- Display the final score and prompt the player to restart the game.

#### Scorekeeping
- Increase the score when the snake eats food.

### Other Important Aspects

#### User Interface
- Display the game board and the snake on the screen.
- Display the current score.
- Display a game over message when the game ends.

#### Controls
- Allow the player to control the snake's direction using arrow keys or swipe gestures.

#### Sound Effects
- Play sound effects when the snake eats food or collides with a wall or its own body.

#### Difficulty Levels
- Increase the speed of the snake as the player's score increases.
- Increase the frequency of generating new food items as the player's score increases.

I hope this plan and design helps you build a successful snake game in JavaScript!