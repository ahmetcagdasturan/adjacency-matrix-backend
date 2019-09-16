const AdjancencyMatrix = require('../models/AdjancencyMatrix');
const AdjancencyList = require('../models/AdjancencyList');
const mongoose = require('mongoose');

class MatrixDataService{

    saveAdjancencyMatrix(adjancencyMatrix){

        var adjancencyMatrix = new AdjancencyMatrix({
            _id: new mongoose.Types.ObjectId(),
            AdjancencyMatrix: adjancencyMatrix
        });

        return adjancencyMatrix.save();
    }

    saveAdjancencyList(adjancencyList){

        var adjancencyList = new AdjancencyList({
            _id: new mongoose.Types.ObjectId(),
            AdjancencyList: adjancencyList
        });

        return adjancencyList.save();
    }

}

module.exports = new MatrixDataService();