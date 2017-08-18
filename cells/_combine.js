var xfs = require('fs');

xfs.truncate('/home/ubuntu/workspace/uncertainty/public/sketch.js', 0, function() {
    for (var i = 0; i < files.length; i++) {
        xfs.appendFileSync('/home/ubuntu/workspace/uncertainty/public/sketch.js', xfs.readFileSync(files[i]));
    }
});

var files = ['ps.js', 'po.js', 'pc.js', 'ptb.js', 'pt.js', 'pz.js',
             'lx.js', 'ls.js', 'lo.js', 'lc.js', 'lt.js', 'lz.js', 
             'cx.js', 'cs.js', 'co.js', 'cc.js', 'ct.js', 'cz.js',
             'gx.js', 'gs.js', 'gc.js'];
