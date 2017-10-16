var xfs = require('fs');

xfs.truncate('sketch.js', 0, function() {
    for (var i = 0; i < files.length; i++) {
        xfs.appendFileSync('sketch.js', xfs.readFileSync(files[i]));
    }
});

var files = ['ps.js', 'po.js', 'pc.js', 'ptb.js', 'pt.js', 'pz.js','pv.js',
             'lx.js', 'ls.js', 'lo.js', 'lc.js', 'lt.js', 'lz.js','lv.js', 
             'cx.js', 'cs.js', 'co.js', 'cc.js', 'ct.js', 'cz.js','cv.js',
             'gx.js', 'gs.js', 'gc.js', 'gv.js'];
             
             
