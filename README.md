# All JavaScript Project Live Demo
<details >
<summary>01 Color_Changer</summary>
<br>


    
https://github.com/user-attachments/assets/fed994fd-5114-4d0a-8586-3241df858b4e



<br>

 * ### Get Source Code
      [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/01_colorChanger)
</details>

<details >
<summary>02 Digital_Clock</summary>


</details>

<details >
<summary>03 Counter</summary>

  


</details>

<details >
<summary>06 Dark_light_Mode</summary>
<br>


    
https://github.com/user-attachments/assets/db2c3d3d-3813-4b4e-aa33-554214ccf4e2
    
    
   * ### Get Source Code
   [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/06_Dark_Light_mode)

</details>
<details >
<summary>07 Transform_String</summary>
<br>


         
https://github.com/user-attachments/assets/9027ad8e-0dbc-4127-83e7-08f3abb0106d
    
    
  * ### Get Source Code
    [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/07_String_Transform)

</details>
<details>
<summary>08 Auto_Type</summary>
<br>
         

https://github.com/user-attachments/assets/c0851699-d2de-4210-aa43-aeb812f45eab


    
    
   * ### Get Source Code
   [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/08_Auto_Typing)

</details>
<details>
<summary>09 Generate_Meme_API</summary>
<br>
         



https://github.com/user-attachments/assets/72874079-76c7-48ad-b0f0-dfc03a2d0abc



* `generatebtn` selects the "Generate Meme" button using its class `.btn.`
* `memeTitle` selects the `<h1>` element where the meme title will be displayed.
* `memeImage` selects the `<img>` element for the meme image.
* `authorOutput` selects the `<p>` element for the author's name.

#### 1. Fetch Data:
  * The `fetch()` function requests data from the `meme-api` URL for wholesome `memes: https://meme-api.com/gimme/wholesomememes.`
  * `.then(response => response.json())` parses the fetched response into JSON format.
    
#### 2. Extract and Display Meme Data:
  * The API returns an object containing `author`, `title`, and `url`. These are destructured into variables.
  * `memeTitle.innerText = title`: Updates the title of the meme.
  * `memeImage.src = url`: Sets the image `src` attribute to the URL of the meme.
  * `authorOutput.innerText = \`Meme by: ${author}: Displays the author's name below the meme.

#### 3.  `getMeme()` This function call ensures that a meme is loaded automatically when the page is first opened.
#### 4.  `Event Listener:`
      generatebtn.addEventListener('click', () => {
    getMeme()
   * Adds a `click` event listener to the "Generate Meme" button.
   * When clicked, it calls the `getMeme()` function to fetch and display a new meme.
})

## Key Features
  * Dynamic Fetching: Uses the Fetch API to get data from `https://meme-api.com/gimme/wholesomememes`.
  * Event Handling: Uses an event listener to handle button clicks.
  * Dynamic Content Update: Updates the webpage with new data (title, image, and author) every time a new meme is fetched.
    
   * ### Get Source Code
   [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/09_Meme_Generate_API)

</details>

<details>
    <summary>12 Quiz App</summary>
    <br>

        
https://github.com/user-attachments/assets/2e0201f3-b132-408f-b553-0a295a0d69bb

     
     
* ### Get Source Code
   [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/12_Quiz_app)

### 1. Quiz Data: Contains all the questions, options, and correct answers.
### 2. Variables:
* `index` tracks the current question.
* `correct` and incorrect count the scores.
* `timer` manages the countdown.
### 3. Functions:
 * `loadQuestion()`: Loads each question and starts the timer.
 * `evaluateAnswer()`: Checks the user's answer.
 * `getAnswer()`: Finds the selected radio button.
 * `reset()`: Clears previous selections.
 * `startTimer()`: Starts and updates the 10-second timer.
 * `quizEnd()`: Displays the final score when the quiz ends.


</details>

<details>
    <summary>13 Calculator</summary>
    <br>

        

https://github.com/user-attachments/assets/11656d95-3d45-4a17-b0a0-1b1099f1491b




     
     
* ### Get Source Code
   [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/13_Calculator)

## 1. Selecting Elements:

 * The `input` variable holds a reference to the input box where the user sees their input or result.
 * The `buttons` variable selects all button elements.
### 2. Handling User Input:

  * The `string` variable keeps track of the user’s input (the mathematical expression).
  * The `arr` variable converts the list of buttons into an array for easier iteration.
### 3. Event Handling:

   * For each button:
   * `=` Button: When clicked, the code evaluates the expression using `eval()` and displays the result.
   * `AC` Button: Clears the entire input.
   * `DEL` Button: Deletes the last character from the expression.
   * Other Buttons (Numbers/Operators): Appends the button's value to the string and updates the input.
### Updating Display:

   * The input box `(input.value)` is updated after every button click to show the current state of the expression or result.


</details>

<details>
    <summary>14 TextToVoice-Converter
r</summary>
    <br>

        



https://github.com/user-attachments/assets/0c5bbd01-d4c4-4ebd-a3df-6560986132d3



     
     
* ### Get Source Code
   [Open Source Code](https://github.com/KanchanCS/js-project/tree/main/13_Calculator)


</details>








