// Select the button element by its ID and add an event listener for the 'click' event
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  container.innerHTML = '';

  let grids = parseInt(prompt('Enter the number of grids wanted per side: '));
   if(grids > 100) {
    alert('please enter a valid number inferior or equal to 100');
   }else {
    gridCreation(grids);
   }
});

// Debugging log to indicate the script is running
console.log('script running');

// Select the container element by its ID where the grids will be created
let container = document.getElementById('container');

// Function to create the grid based on the number of grids per side
function gridCreation(grids) {
  // Set the container's width to 960 pixels
  container.style.width = '960px';

  // Loop to create the total number of squares (grids * grids)
  for (let i = 1; i <= grids * grids; i++) {
    let square; // Declare variable to hold each square
    square = document.createElement('div'); // Create a new div element for the square
    square.dataset.count = '0'; // Initialize a custom attribute to track hover count for each square

    // Calculate the size of each square based on the grid size (960 divided by the number of grids)
    let squareSize = 960 / grids;
    square.style.width = `${squareSize}px`;  // Set square width
    square.style.height = `${squareSize}px`; // Set square height

    // Set initial background color and border for the square
    square.style.backgroundColor = `rgba(0,0,0,0.1)`; 
    square.style.border = 'solid #fff 1px'; // Add a white border to the square

    // Append the square to the container element
    container.appendChild(square); 
    console.log('divs created'); // Debugging log to confirm square creation

    // Set the initial opacity (fallback to 0.1 if not set)
    let opacity = parseFloat(square.style.opacity) || 0.1;

    // Add an event listener to each square that listens for the 'mouseenter' event (hover)
    square.addEventListener('mouseenter', function (event) {
      // Retrieve the current hover count from the dataset (default to 0 if not set)
      let hoverCount = parseInt(square.dataset.count) || 0;

      // Increase hover count if it's less than 10
      if (hoverCount < 10) {
        hoverCount++;
        square.dataset.count = hoverCount; // Update hover count in the dataset
      } 

      // Increase opacity on each hover, until the maximum value of 1
      if (opacity < 1) {
        opacity += 0.2; 
        square.style.backgroundColor = `rgba(0,0,0,${opacity.toFixed(1)})`; // Adjust the square color based on new opacity
      }
    });
  }
}


  

