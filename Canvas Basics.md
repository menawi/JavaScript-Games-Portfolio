Here are the five main drawing techniques in canvas:

1. Draw a rectangle:

To draw a rectangle, we use the `fillRect()` method, which takes four arguments: x, y, width, and height. Here is an example:

```
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);
```

This will draw a red rectangle with a top-left corner at (10,10), a width of 50, and a height of 50.

2. Draw a line:

To draw a line, we use the `stroke()` method, which takes two arguments: x and y. Here is an example:

```
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();
```

This will draw a line from (0,0) to (100,100).

3. Draw a circle:

To draw a circle, we use the `arc()` method, which takes six arguments: x, y, radius, start angle, end angle, and clockwise. Here is an example:

```
ctx.beginPath();
ctx.arc(50, 50, 25, 0, 2 * Math.PI);
ctx.stroke();
```

This will draw a circle with a center at (50,50), a radius of 25, and a full angle of 2π radians.

4. Draw text:

To draw text, we use the `fillText()` or `strokeText()` methods, which take three arguments: the text to be drawn, x, and y. Here is an example:

```
ctx.fillStyle = "blue";
ctx.font = "30px Arial";
ctx.fillText("Hello, world!", 50, 50);
```

This will draw the text "Hello, world!" in blue with a font size of 30 pixels at position (50,50).

5. Draw an image:

To draw an image, we use the `drawImage()` method, which takes three or five arguments depending on the overload used. Here is an example:

```
const img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0);
}
img.src = "example.png";
```

This will draw the image "example.png" at position (0,0). Note that we need to wait for the image to load before we can draw it.