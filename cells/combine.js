var xfs = require('fs');

var files = ['po.js', 'ptb.js', 'ps.js', 'lx.js', 'lo.js', 'cx.js', 'cz.js', 'co.js', 'gx.js', 'gs.js'];

for (var i=0; i < files.length; i++) {
    xfs.appendFileSync('assembled.js', xfs.readFileSync(files[i]));
}