function bubbleSort(arr){
	var val=arr.length;
	for(var j=0;j<val;val--){
		for(var i=0;i<val;i++){
			if(arr[i]<arr[i+1]){
				var val1=arr[i];
				arr[i]=arr[i+1];
				arr[i+1]=val1;
			}
		}
	}
	return arr;
}
