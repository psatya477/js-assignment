function mergeort(arr){
	if(arr.length>1){
		var arr1=arr.slice();
		var middle=Math.floor(arr.length/2);
		var right=arr1.splice(middle,middle);
		var left=arr1.splice(0,middle);
		return merge(mergeort(left),mergeort(right));
	}
	return arr;
}
function merge(left,right){
	var result=[];
	var leftIndex=0;
	var rightIndex=0;
	while(leftIndex<left.length && rightIndex<right.length){
		if(left[leftIndex]<right[rightIndex]){
			result.push(left[leftIndex]);
			leftIndex++;
		}else{
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex),right.slice(rightIndex));
}
