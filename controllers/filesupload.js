const upload = require('../models/files');

exports.upload = function(req,res,next){
    // console.log(req.body);
    console.log(req.file);
    // upload.create(req.body, function(err, file){
    //     if (err) {
    //         next(err);
    //     }
    //     res.send('saved successfully.......');
    // })
}