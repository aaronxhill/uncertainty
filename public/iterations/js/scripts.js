function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// <script src="title/js/vu_area_letters.js"></script>

$( document ).ready(function() {
	console.log( "ready!" );

	// function addRandomFotos (a) {
 //    var attrr = 'img_cropped/' + getRandomIntInclusive(2, 405) + '.jpg';
 //    $ ( a ).attr('src', attrr); 
 //  }
 //  addRandomFotos('#fotoOne')
 //  addRandomFotos('#fotoTwo')
 //  addRandomFotos('#fotoThree')
 //  addRandomFotos('#fotoFour')
 //  addRandomFotos('#fotoFive')
 //  addRandomFotos('#fotoSix')
  // $( "#fotoOne" ).attr('src', 'img_cropped/111.jpg')
});