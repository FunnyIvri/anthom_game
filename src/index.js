import files from "./file_names.json"
export function play() {
    var audio = document.getElementById('anthom_player');
    audio.pause()
    const randomIndex = Math.floor(Math.random() * files.length);
    //add the answer
    var answer = document.getElementById("answer")
    answer.style.display = "none"
    answer.id = "answer"
    answer.textContent = files[randomIndex].name
    document.body.appendChild(answer)

    //restart win and time text
    var h1 = document.getElementById("winText")
    var time = document.getElementById("remainingTime")
    time.style.removeProperty('color');
    h1.textContent = ""
    h1.style.removeProperty('color');

    audio.src = "../anthoms/"+files[randomIndex].name;
    document.body.appendChild(audio);
    audio.play();
    //get the play button
    var playbutton = document.getElementById('play_button');
    //make the play button invisable
    playbutton.style.display = 'none';
    //get the input box and enter button
    var countryinput = document.getElementById('country_input');
    var enterbutton = document.getElementById('enter_button');
    //make both visable
    countryinput.style.display = 'inline-block'
    enterbutton.style.display = 'inline-block'
    var remainingTimeElement = document.getElementById('remainingTime');
    console.log("debug: " + audio.src)

// Update remaining time when the audio is loaded
audio.addEventListener('loadedmetadata', updateRemainingTime);

// Update remaining time on time update
audio.addEventListener('timeupdate', updateRemainingTime);

// Add event listener for audio playback end
audio.addEventListener('ended', handleAudioEnd);

// Function to update the remaining time
function updateRemainingTime() {
    var currentTime = audio.currentTime;
    var duration = audio.duration;

    // Calculate remaining time in seconds
    var remainingTimeInSeconds = duration - currentTime;

    // Convert remaining time to minutes and seconds
    var minutes = Math.floor(remainingTimeInSeconds / 60);
    var seconds = Math.floor(remainingTimeInSeconds % 60);

    // Format the remaining time
    var remainingTimeFormatted = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;


    // Update the h1 element with the remaining time
    remainingTimeElement.textContent = 'Time: ' + remainingTimeFormatted;
}

function handleAudioEnd() {

    lose()
  }

}


export function getInputValue() {
    var input = document.getElementById('country_input');
    var country = input.value;
    var answer = document.getElementById('answer');
    var raw_correct_country = answer.textContent.split(".mp3")[0]
    var clean_correct_country = []
    if(country == raw_correct_country){win()}
    else{
        for (let i = 0; i < raw_correct_country.length; i++) {
            const correct_letter = raw_correct_country[i];
            if(correct_letter == "-"){clean_correct_country.push(" ")}
            else{clean_correct_country.push(correct_letter)}
            
        }
        if(country == clean_correct_country.join("")){win()}
        else{wrong()}
    }
  }

export  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      getInputValue();
     
    }
    else if(event.keyCode === 8 || event.keyCode === 46){
        var input = document.getElementById('country_input');
       input.value = input.value.slice(0, -1)
    }
    else{

        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || event.keyCode === 32) {
            var input = document.getElementById('country_input');
            input.value = input.value + String.fromCharCode(event.keyCode).toLowerCase();
          }
    }
  }
function win(){
    //stop music
    var audio = document.getElementById('anthom_player');
    audio.pause()
    //let the player know they won
    console.log("you win!")
    var h1 = document.getElementById("winText")
    var time = document.getElementById("remainingTime")
    time.style.color = "green"
    h1.textContent = "YOU WIN!"
    h1.style.color = "green"
    //restart the game
    restart()
    
}
function wrong() {
    var h2 = document.getElementById("lose")
    h2.textContent = "wrong!"
    h2.style.color = "red"
    h2.classList.add('animated');
    setTimeout(function() {
        h2.classList.remove("animated");
      }, 1000);
    return
}
function lose() {
     //stop music
     var audio = document.getElementById('anthom_player');
     audio.pause()

    //find the answer
    var answer = document.getElementById('answer');
    var raw_correct_country = answer.textContent.split(".mp3")[0]
    var clean_correct_country = []
    for (let i = 0; i < raw_correct_country.length; i++) {
        const correct_letter = raw_correct_country[i];
        if(correct_letter == "-"){clean_correct_country.push(" ")}
        else{clean_correct_country.push(correct_letter)}
        
    }
    clean_correct_country = clean_correct_country.join("")
     //let the player know they won
     console.log("you lose :(")
     var h1 = document.getElementById("winText")
     var time = document.getElementById("remainingTime")
     time.style.color = "red"
     h1.textContent = "you lost :("
     time.textContent = "The Country Was: "+clean_correct_country[0].toUpperCase() + clean_correct_country.slice(1)
     h1.style.color = "red"
     //restart the game
     restart()
}
function restart() {
     //get the play button
     var playbutton = document.getElementById('play_button');
     //make the play button visable
     playbutton.style.display = 'inline-block';
     //get the input box and enter button
     var countryinput = document.getElementById('country_input');
     var enterbutton = document.getElementById('enter_button');
     //make both invisable
     countryinput.style.display = 'none'
     enterbutton.style.display = 'none'
    //restart wrong text
    var h2 = document.getElementById("lose")
    h2.textContent = ""
}

export function handleKey(key) {

    var input = document.getElementById('country_input');
    if(key == " "){var button = document.getElementById("key-space")}
    else if(key == "delete"){input.value = input.value.slice(0,-1); var button = document.getElementById("key-delete")}
    else{var button = document.getElementById("key-" + key);}
    button.classList.add("button-pressed");
    if(input.style.display != "" && input.style.display != "none" && key != "delete"){
        
        input.value =  input.value + key.toLowerCase()
    }
    // Simulate the button release after a short delay
    setTimeout(function() {
      button.classList.remove("button-pressed");
    }, 200);
  }
  