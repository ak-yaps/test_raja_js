const selectNb = document.getElementById('nb-select');
const showResult = document.getElementById('showResult');
const showColor = document.getElementById('showColor');
const resquestURL = "https://gist.githubusercontent.com/jjdelc/1868136/raw/c9160b1e60bd8c10c03dbd1a61b704a8e977c46b/crayola.json";


randomColor = () => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      let res = xhr.response;
      showColor.innerHTML = res[Math.floor(Math.random() * res.length)].hex;
    }
  }
  xhr.open('GET', resquestURL);
  xhr.responseType = 'json';
  xhr.send();
}


newElement = (shape, color) => {
  
  let newShape = document.createElement("div");
  newShape.id = shape;
  newShape.classList.add("randomColor");
  newShape.style.backgroundColor = color;
  showResult.appendChild(newShape);
}


selectNb.addEventListener('change', () => {
  let getNb = selectNb.value;

  if (!isNaN(getNb)) {

    let isEven = getNb % 2;

    if (isEven === 0) {
      randomColor();

      for (let i = 0; i < getNb; i++) {
        
        newElement('square', showColor.innerHTML)
        
      };

    } else if (isEven === 1) {
      
      randomColor();

      for (let i = 0; i < getNb; i++) {
        
        newElement('circle', showColor.innerHTML);

      }
    }

  } else {

    alert('it Not a Number');
  }

});

randomColor();
