var xfs = require('fs');

xfs.truncate('/home/ubuntu/workspace/uncertainty/public/sketch.js', 0, function() {
    for (var i = 0; i < files.length; i++) {
        xfs.appendFileSync('/home/ubuntu/workspace/uncertainty/public/sketch.js', xfs.readFileSync(files[i]));
    }
});

var files = ['po.js', 'ptb.js', 'pt.js', 'ps.js', 'pz.js', 'pc.js',
             'lx.js', 'lo.js', 'ls.js', 'lt.js', 
             'cx.js', 'cz.js', 'co.js', 'ct.js', 'cc.js',
             'gx.js', 'gs.js', 'gc.js'];