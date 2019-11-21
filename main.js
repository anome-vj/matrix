const reader=require('readline-sync');
const util=require('./utils.js');
mat1=[[1,2,3],[3,4,4],[0,8,1]];
mat2=[[1,6,1],[5,7,1],[2,3,3]];
//console.log(util.multiplyMatrices(mat1,mat2));
util.printMatrix(util.multiplyMatrices(mat1,mat2));


