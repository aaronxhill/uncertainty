var xfs = require('fs');

xfs.truncate('sketch.js', 0, function() {
    for (var i = 0; i < files.length; i++) {
        xfs.appendFileSync('sketch.js', xfs.readFileSync(files[i]));
    }
});

var files = ['px.js', 'ps.js', 'po.js', 'pc.js', 'ptb.js', 'pt.js', 'pv.js','pz.js',
             'lx.js', 'ls.js', 'lo.js', 'lc.js', 'lt.js', 'lv.js', 'lz.js',  
             'cx.js', 'cs.js', 'co.js', 'cc.js', 'ct.js', 'cv.js', 'cz.js',  
             'gx.js', 'gs.js', 'go.js', 'gc.js', 'gt.js', 'gv.js', 'gz.js' ];