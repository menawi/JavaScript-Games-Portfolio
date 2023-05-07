# Snake Basic 

## Draw Canvas✅

## Draw Snake ✅

## Draw Food ✅

## Draw Game Loop ✅

## User Controls ✅

## Game Menu 


--- 

## Summary of Learning:

### For Review 
1. Drawing Canvas 
2. Snake Class (and functions within)
3. Food 
4. Rendering

### Key concepts 🔑

1. Resolution = broke down the canvas into blocks of , each block is 10px and we have 39 blocks not 40 (but length is 40 because array!)
2. Can't emphasize this enough , the resolution concept is crucial to the rendering of this game 


3. Snake body = Array of Objects = [{x,y} , {x,y}]
4. Snake head = always the first index of the array 

> Write a function that adds objects to an array while always printing the first index of the array to the DOM



5. Collision logic = if point is beyond boundaries 
6. Deleting the tail to simulate movement 
7. fillRect


### Practice Problem 1
Rewrite the game without the resolution system so you can understand how the resoultion system works. I want to know how the entire program understands to use the resolution.

> Problem : WHen I run the code, it renders the snake and food as different sizes. The canvas box is also rendered dispropriatne to the the snake and food (it doesnt fit crisply). Additionally, the collision method doesn't work and the food is not eaten by the snake upon collision AND the snake doesn't grow.

### Difficulty Understanding 

1. The resolution thing ; how does the program know to apply it to all measurements ? WRITE THE PROGRAM WITHOUT THE RESOLUTION SYSTEM

### Next Steps 
1. Collision with body make it cause damage by splitting the snake length at that one point and letting the rest fade after a few seconds 
2. Game UI with updated score 
3. 









<!-- 
1. What are the basics of Canvas?
2. What are the basic methods being used here? 
3.  -->