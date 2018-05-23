function quickSort(arr){
	if(arr.length>1){
		var pivot=arr.pop();
		var left=[];
		var right=[];
		var final=[];
		for(var i=0;i<arr.length;i++){
			if(arr[i]<=pivot){
				left.push(arr[i]);
			}else{
				right.push(arr[i]);
			}
		}
		return final.concat(quickSort(left),pivot,quickSort(right));
	}
	return arr;
}
