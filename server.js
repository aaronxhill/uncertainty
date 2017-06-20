const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
})