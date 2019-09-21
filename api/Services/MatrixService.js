class MatrixService{

    createRandomAdjacencyMatrix(param) {
        var array = this.create2DArrayWithOnes(param);
        var randValue = 0;
        var totalZeroInOneNode = 0;
		for(var i=0;i<param;i++) {
            totalZeroInOneNode = 0;
			for(var j=0;j<param;j++) {
                if(j>i){
                    if(totalZeroInOneNode >= Math.round((param-1)/2)){
                        break;
                    }
                    randValue = Math.round(Math.random());
                    totalZeroInOneNode = randValue == 0 ? totalZeroInOneNode + 1 : totalZeroInOneNode;
                    var zeros = 0;
                    for(var k=0; k<param; k++){
                        if(array[j][k]==0){
                            zeros += 1;
                        }
                    }
                    randValue = zeros >= Math.round((param-1)/2) ? 1 : randValue;
                    array[i][j] = randValue;
                    array[j][i] = randValue;
                    
                }else{
                    if(array[i][j]==0){
                        totalZeroInOneNode +=1
                    }
                }
            }
        }
        console.log(array)
        return array;
    }

    create2DArrayWithOnes(rows) {
        var arr = [];
        for(var i = 0; i < rows; ++i) {
            arr.push([]);
            for(var j = 0; j < rows; ++j) {
                if(i==j){
                    arr[i].push(0); 
                }else{
                    arr[i].push(1);
                }
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