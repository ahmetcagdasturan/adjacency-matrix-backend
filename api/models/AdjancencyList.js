const mongoose = require('mongoose');

const AdjancencyListSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    AdjancencyList: Array
});

module.exports = mongoose.model('AdjancencyList', AdjancencyListSchema);