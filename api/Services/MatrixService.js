class MatrixService{

    createRandomAdjacencyMatrix(param) {
        var array = this.create2DArrayWithZeros(param);
        var randValue = 0;
        var totalZeroInOneNode = 0;
		for(var i=0;i<param;i++) {
            totalZeroInOneNode = 0;
			for(var j=0;j<param;j++) {
                if(j>=i){

                    if(totalZeroInOneNode == Math.round((param-1)/2)){
                        break;
                    }

                    randValue = Math.round(Math.random());
                    totalZeroInOneNode = randValue == 0 ? totalZeroInOneNode + 1 : totalZeroInOneNode;
                    array[i][j] = randValue;
                    array[j][i] = randValue;

                    if(i == j) {
                        array[i][j] = 0;
                        totalZeroInOneNode = randValue == 1 ? totalZeroInOneNode + 1 : totalZeroInOneNode;
                    }
                    
                    
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

    create2DArrayWithZeros(rows) {
        var arr = [];
        for(var i = 0; i < rows; ++i) {
            arr.push([]);
            for(var j = 0; j < rows; ++j) {
                arr[i].push(1); 
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