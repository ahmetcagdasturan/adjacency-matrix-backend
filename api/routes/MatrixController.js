var express = require('express');
var router = express.Router();
const matrixService = require('../Services/MatrixService');
const matrixDataService = require('../DataServices/MatrixDataService');


router.post('/adjacencymatrix', (req,res,next) => {
   
    var randomAdjacencyMatrix = matrixService.createRandomAdjacencyMatrix(req.body.param);

    matrixDataService.saveAdjancencyMatrix(randomAdjacencyMatrix).then(result => {
        res.status(200).json({
            result: result
        });
    }).catch(err => {
        res.status(500).json({error: err});
    });

});

router.post('/adjacencylist', (req,res,next) => {
   
    var randomAdjacencyMatrix = matrixService.createRandomAdjacencyMatrix(req.body.param);
    var adjacencyList = matrixService.transformAdjacencyMatrixIntoAdjacencyList(randomAdjacencyMatrix,req.body.param);
    matrixDataService.saveAdjancencyList(adjacencyList).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({error: err});
    });

});

module.exports = router;