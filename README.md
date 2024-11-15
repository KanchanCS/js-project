# All JavaScript Project
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







