class MatrixService{

    createRandomAdjacencyMatrix(param) {
        var array = this.create2DArrayWithZeros(param);
        var nodeRelationCounts = [];
        var maxRelationCount = Math.floor(param/2);

        for(var m=0;m<param;m++){
            nodeRelationCounts.push(0);
        }    
		for(var i=0;i<param;i++) {
			for(var j=0;j<i;j++) {
                if(nodeRelationCounts[i]< maxRelationCount && nodeRelationCounts[j]<maxRelationCount){
                    var randValue = Math.round(Math.random());
                    array[i][j] = randValue;
                    array[j][i] = randValue;
                    if(randValue==1){
                       nodeRelationCounts[i]++;
                       nodeRelationCounts[j]++;
                    }
                }
            }
        }
        console.log(array)
        return array;
    }

    create2DArrayWithZeros(rows) {
        var arr = [];
        for(var i = 0; i < rows; ++i) {
            arr.push([]);
            for(var j = 0; j < rows; ++j) {
                arr[i].push(0); 
            }
        }
        return arr;
    }
    createEmpty2DArray(rows) {
        var arr = [];
        for(var i = 0; i < rows; ++i) {
            arr.push([]);
        }
        return arr;
    }

    transformAdjacencyMatrixIntoAdjacencyList(matrix,param){
        var list = this.createEmpty2DArray(param);
        for(var i=0; i<param; i++){
            for(var j=0; j<param; j++){
                if(matrix[i][j] == 1){
                    list[i].push(j+1);
                }
            }
        }
        return list;
    }

}

module.exports = new MatrixService();