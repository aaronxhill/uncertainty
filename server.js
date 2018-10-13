const express = require('express');
const app = express();
const handlebars = require('handlebars');
const fs = require('fs');

var treats = ['vu_area_letters', 
              'vu_area_letters2',
              'vu', 
              'vu_point_area', 
              'vu_line_v1',
              'vu_line_v2',
              'shape_01',
              'texture_NoSlider_01',
              'position_Wiggle_01'
              ];

const indexSource = fs.readFileSync("templates/index.txt").toString();

const template = handlebars.compile(indexSource, { strict: true });

app.get('/test', function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(template(getSixFotos()));
}); 

app.get('/artreview', function(req, res){
    res.redirect("/art");
});

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port ' + process.env.PORT);
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getSixFotos () {
  var holder = [];
  var obj = {};

  while (holder.length < 6) {
    var thisFoto = getRandomIntInclusive(2, 405)
    if (! holder.includes(thisFoto)) {
      holder.push(thisFoto)
    }
    if (holder.length >= 6) {
      obj.fotos = holder; 
      obj.d3script = treats[getRandomIntInclusive(0, treats.length - 1)]
      return obj; 
    }
  }
}