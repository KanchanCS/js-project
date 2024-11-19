
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const editTextButton = document.getElementById('editTextButton');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');
const textInput = document.getElementById('textInput');
const fontStyleSelect = document.getElementById('fontStyleSelect');
const fontSizeSelect = document.getElementById('fontSizeSelect');

// Initial text properties
let text = 'Hello Canvas!';
let textX = 130;
let textY = 200;
let textFont = 'Arial'; // Default font style
let textSize = 30; // Default font size (for display purposes)
let isEditing = false;

// Undo and Redo Stacks
const undoStack = [];
const redoStack = [];

// Save current state to undo stack
const saveState = () => {
  undoStack.push({ text, textX, textY, textFont, textSize });
  // Clear redo stack whenever a new change is made
  redoStack.length = 0;
};

// Draw text function
const drawText = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  ctx.font = `${textSize * 10}px ${textFont}`; // Set font style and size dynamically
  ctx.fillStyle = 'red';
  ctx.fillText(text, textX, textY);
};

// Initialize canvas with text
drawText();

// Show input field to edit text
editTextButton.addEventListener('click', () => {
  if (!isEditing) {
    // Show input field at current text position
    textInput.style.display = 'block';
    textInput.style.left = `${canvas.offsetLeft + textX}px`;
    textInput.style.top = `${canvas.offsetTop + textY - 30}px`;
    textInput.style.width = '200px';
    textInput.value = text;
    textInput.focus();
    isEditing = true;
  }
});

// Update canvas text on input blur
textInput.addEventListener('blur', () => {
  if (textInput.value.trim() !== '') {
    text = textInput.value;
  }
  textInput.style.display = 'none';
  saveState(); // Save the state for undo
  drawText();
  isEditing = false;
});

// Change the font style based on the dropdown selection
fontStyleSelect.addEventListener('change', () => {
  textFont = fontStyleSelect.value;
  saveState(); // Save the state for undo
  drawText();
});

// Change the font size based on the dropdown selection (1, 2, 3, ...)
fontSizeSelect.addEventListener('change', () => {
  textSize = parseInt(fontSizeSelect.value, 10);
  saveState(); // Save the state for undo
  drawText();
});

// Undo action
undoButton.addEventListener('click', () => {
  if (undoStack.length > 0) {
    const previousState = undoStack.pop(); // Get the last state
    redoStack.push({ text, textX, textY, textFont, textSize }); // Save current state to redo stack
    text = previousState.text;
    textX = previousState.textX;
    textY = previousState.textY;
    textFont = previousState.textFont;
    textSize = previousState.textSize;
    drawText();
  }
});

// Redo action
redoButton.addEventListener('click', () => {
  if (redoStack.length > 0) {
    const nextState = redoStack.pop(); // Get the last redo state
    undoStack.push({ text, textX, textY, textFont, textSize }); // Save current state to undo stack
    text = nextState.text;
    textX = nextState.textX;
    textY = nextState.textY;
    textFont = nextState.textFont;
    textSize = nextState.textSize;
    drawText();
  }
});

// Enable moving text
let isMoving = false;
let offsetX, offsetY;

// Mouse down event to start moving text
canvas.addEventListener('mousedown', (e) => {
  // Check if the mouse is over the text to start dragging
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  
  // Check if the mouse is near the text's position (within 10px)
  if (mouseX >= textX - 10 && mouseX <= textX + ctx.measureText(text).width + 10 &&
      mouseY >= textY - textSize && mouseY <= textY + textSize) {
    isMoving = true;
    offsetX = mouseX - textX;
    offsetY = mouseY - textY;
  }
});

// Mouse move event to update text position
canvas.addEventListener('mousemove', (e) => {
  if (isMoving) {
    const rect = canvas.getBoundingClientRect();
    textX = e.clientX - rect.left - offsetX;
    textY = e.clientY - rect.top - offsetY;
    drawText(); // Redraw text at the new position
  }
});

// Mouse up event to stop moving text
canvas.addEventListener('mouseup', () => {
  if (isMoving) {
    saveState(); // Save the new position for undo
    isMoving = false;
  }
});

