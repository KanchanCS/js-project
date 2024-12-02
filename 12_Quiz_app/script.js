// Array containing the quiz questions, options, and correct answers.
const quizData = [
    {
        question: "Which of the following is a client site language?", // Question text
        a: "Java", // Option A
        b: "C",    // Option B
        c: "Python", // Option C
        d: "JavaScript", // Option D
        correct: "d", // Correct answer key
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];

// Initialize variables for tracking quiz progress and scores.
let index = 0; // Tracks the current question index.
let correct = 0, // Counter for correct answers.
    incorrect = 0, // Counter for incorrect answers.
    total = quizData.length; // Total number of questions.

// Get references to HTML elements for the question and options.
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");

// Create a timer element and style it, then add it to the DOM.
let timerElement = document.createElement('div'); // Timer element
timerElement.setAttribute("id", "timer"); // Set its ID for styling or reference.
timerElement.style.color = "red"; // Set text color.
timerElement.style.textAlign = "right";

document.querySelector(".container").prepend(timerElement); // Insert timer above the question.

// Declare a variable to hold the timer interval ID.
let timer;

// Function to load the current question and options.
const loadQuestion = () => {
    if (total === index) { // If all questions are done, end the quiz.
        return quizEnd();
    }
    reset(); // Reset any previously selected options.
    const data = quizData[index]; // Get the current question data.
    questionBox.innerHTML = `${index + 1}) ${data.question}`; // Display the question.
    allInputs[0].nextElementSibling.innerText = data.a; // Set option A.
    allInputs[1].nextElementSibling.innerText = data.b; // Set option B.
    allInputs[2].nextElementSibling.innerText = data.c; // Set option C.
    allInputs[3].nextElementSibling.innerText = data.d; // Set option D.
    startTimer(); // Start the timer for this question.
};

// Add a click event listener to the submit button.
document.querySelector("#submit").addEventListener("click", function() {
    clearInterval(timer); // Stop the timer on manual submission.
    evaluateAnswer(); // Check the answer and load the next question.
});

// Function to check the user's answer.
const evaluateAnswer = () => {
    const data = quizData[index]; // Get the current question data.
    const ans = getAnswer(); // Get the selected answer.
    if (ans === data.correct) { // If correct, increment the score.
        correct++;
    } else { // If incorrect, increment the incorrect counter.
        incorrect++;
    }
    index++; // Move to the next question.
    loadQuestion(); // Load the next question.
};

// Function to get the selected answer.
const getAnswer = () => {
    let ans;
    allInputs.forEach((inputEl) => { // Loop through all radio inputs.
        if (inputEl.checked) { // If an input is checked,
            ans = inputEl.value; // Set its value as the selected answer.
        }
    });
    return ans; // Return the selected answer.
};

// Function to reset all radio inputs (uncheck them).
const reset = () => {
    allInputs.forEach((inputEl) => {
        inputEl.checked = false; // Uncheck each radio input.
    });
};

// Timer function to count down from 10 seconds.
const startTimer = () => {
    let timeLeft = 10; // Set the initial time.
    timerElement.textContent = `Time Left: ${timeLeft}s`; // Display the time.

    timer = setInterval(() => {
        timeLeft--; // Decrease time by 1 second.
        timerElement.textContent = `Time Left: ${timeLeft}s`; // Update the display.

        if (timeLeft <= 0) { // If time runs out,
            clearInterval(timer); // Stop the timer.
            evaluateAnswer(); // Auto-submit the answer.
        }
    }, 1000); // Run every second.
};

// Function to display the final score and end the quiz.
const quizEnd = () => {
    clearInterval(timer); // Stop the timer at the end of the quiz.
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100">Hi, you've scored ${correct} / ${total}</h3>
        </div>
    `; // Show the final score.
};

// Start by loading the first question.
loadQuestion();
