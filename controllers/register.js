const register = require('../models/register');


exports.registration = function (req, res, next) {
    console.log(req.body);
    register.create(req.body, function(err, data) {
        if (err){
            return next(err);
        }
        res.send(data);
    })    
}

exports.grtdata = function (req,res,next){
    register.find(function (err, data) {
        if(err) {
            return next(err);
        }
        res.send(data)
    })
}