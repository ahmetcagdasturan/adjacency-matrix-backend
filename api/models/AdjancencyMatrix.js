const mongoose = require('mongoose');

const AdjancencyMatrixSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    AdjancencyMatrix: Array
});

module.exports = mongoose.model('AdjancencyMatrix', AdjancencyMatrixSchema);