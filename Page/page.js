// $(document).ready(function(){
//     $("#myCarousel").on('slid.bs.carousel', function () {
//       alert('Finished sliding');
//     });
//  });



let mySound;

function startGame() {
  mySound = new sound(thunderstorm-sound-effect.mp3);
  myGameArea.start();
}

function updateGameArea() {
      mySound.play();
      myGameArea.stop();
    }
  
