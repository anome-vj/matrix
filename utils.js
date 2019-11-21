function multiplyMatrices (mat1,mat2){
    let i=mat1.length;
    //let j=mat1[i].length;
    for (let i=0;i<mat1.length;i++){
    if (mat1[i].length>0 && mat1[i].length!==mat2.length){
        return null;
    }
}
    //i=first matric rows
    //j=first matric columns and second matric rows
    //k=second matric columns

   
    let mult=[];
    for (let i=0;i<mat1.length;i++){
        mult.push([]);
        for (let k=0;k<mat2[0].length;k++){
            let result=0;
            for (let j=0;j<mat1[i].length;j++){
                result=result + (mat1[i][j])*(mat2[j][k]);
               

            }
            mult[i].push(result);
            
        }
    }
return mult;

}

function printMatrix(mat) {
    if (mat===null){
       return console.log("control the rows and columns of matrices");
    }
	let result = "";

	for(let row = 0; row < mat.length; row++) {
		for(let col = 0; col < mat[row].length; col++) {
			result += mat[row][col] + "\t";
		}
		result += "\n";
	}

	console.log(result);
}

module.exports={
    multiplyMatrices,
    printMatrix,

}
