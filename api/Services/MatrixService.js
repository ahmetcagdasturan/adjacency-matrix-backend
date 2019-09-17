class MatrixService{

    createRandomAdjacencyMatrix(param) {
        var array = this.create2DArrayWithZeros(param);
        var randValue = 0;
		for(var i=0;i<param;i++) {
			for(var j=i;j<param;j++) {
				
				randValue = Math.round(Math.random());
				array[i][j] = randValue;
				array[j][i] = randValue;

                if(i == j) {
					array[i][j] = 0;
				}
            }
		}
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