const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilesSchema = mongoose.Schema({
    img: [{type: String,data: Buffer}]
});

module.exports = mongoose.model('Files', FilesSchema);