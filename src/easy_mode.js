export function easy_mode(country_name){
  
  const hints_list = require("./hints.json")
  const hint =  hints_list[country_name]

// Progress event listener on the audio element
const audio = document.getElementById('anthom_player');
audio.addEventListener('timeupdate', updateSentences);

function updateSentences() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // Calculate the progress percentage
  const progressPercentage = (currentTime / duration) * 100;
 
  // Determine the number of sentences to display based on the progress percentage
  let sentencesToDisplay = 0;
  if (progressPercentage >= 75) {
    sentencesToDisplay = 3;
  } else if (progressPercentage >= 50) {
    sentencesToDisplay = 2;
  } else if (progressPercentage >= 25) {
    sentencesToDisplay = 1;
  }
  document.getElementById("precent").textContent = Math.round(progressPercentage) + "%"
  // Update the content of the h2 elements with the sentences
  for (let i = 0; i < hint.length; i++) {
    const h2Element = document.getElementById(`hint${i + 1}`);
    if (i < sentencesToDisplay) {
      h2Element.textContent = hint[i];
    } else {
      h2Element.textContent = '';
    }
  }
}

}
