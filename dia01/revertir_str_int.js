//Revertir una String
function solution(str){
    return str.split('').reverse().join('');  
}

//Revertir INT
function digitize(n) {
	return n.toString().split('').reverse().map(Number);
}