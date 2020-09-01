function shuffle() {
  const container = document.getElementById("container");
  // make a copy of the div "elements"
  const elementsArray = Array.prototype.slice.call(container.getElementsByClassName("elements"));
	
  // remove the elements from the container
  elementsArray.forEach(function(element){
  	container.removeChild(element);
  })
  
  // reorder
  shuffleArray(elementsArray);
  
  // loop in order and put back into the array
  elementsArray.forEach(function(element){
    container.appendChild(element);
  })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // generate random index
        const j = Math.floor(Math.random() * (i + 1));
        
        // swap current with random index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
