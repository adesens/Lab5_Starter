// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horns = document.getElementById('horn-select');
  const button = document.querySelector('button');
  const volumeCtrl = document.querySelector('input');

  horns.addEventListener('change', (event) => {
    const hornChoice = horns.value;

    switch (hornChoice) {
      case 'air-horn':
        console.log('Air Horn');
        document.querySelector('img[alt="No image selected"]').src = 'assets/images/air-horn.svg';
        document.getElementsByClassName('hidden').src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        console.log('Car Horn');
        document.querySelector('img[alt="No image selected"]').src = 'assets/images/car-horn.svg';
        document.getElementsByClassName('hidden').src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        console.log('Party Horn');
        document.querySelector('img[alt="No image selected"]').src = 'assets/images/party-horn.svg';
        document.getElementsByClassName('hidden').src = 'assets/audio/party-horn.mp3';
        break;
    }



      button.addEventListener('click', (event) => {
        var audio = new Audio(document.getElementsByClassName('hidden').src);
        audio.volume = volumeCtrl.value / 100;
        audio.play();
      })

  });

  volumeCtrl.addEventListener('input', (event) => {
    var volumeLevel = volumeCtrl.value;
    
    if (volumeLevel == 0) {
      document.querySelector('img[alt="Volume level 2"]').src = 'assets/icons/volume-level-0.svg';
    }
    else if (volumeLevel >= 1 && volumeLevel < 33) {
      document.querySelector('img[alt="Volume level 2"]').src = 'assets/icons/volume-level-1.svg';
    }
    else if (volumeLevel >= 33 && volumeLevel < 67) {
      document.querySelector('img[alt="Volume level 2"]').src = 'assets/icons/volume-level-2.svg';
    }
    else if (volumeLevel >= 67) {
      document.querySelector('img[alt="Volume level 2"]').src = 'assets/icons/volume-level-3.svg';
    }

  })
  
}