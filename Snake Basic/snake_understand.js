// document.write("hello world")


// const demonstration_element = document.createElement("h1")
// demonstration_element.innerHTML = "Hello World"

// // document.body.appendChild(demonstration_element)

// -----




// print results of code onto DOM 

function PRINT_TO_DOM(output) {
  const print_element = document.createElement("p")
  print_element.innerHTML = output
  document.body.appendChild(print_element)
}


// more readable name for the function to print to dom
const print = PRINT_TO_DOM








// PRINT_TO_DOM("bye bye")


// export default { PRINT_TO_DOM }
