function selectionSort(arr){
	var min;
	var val1;
	for(var i=0;i<arr.length;i++){
		min=i;
		for(var j=i+1;j<arr.length;j++){
			if(arr[j]<arr[min]){
				min=j;
			}
		}
		if(i!=min){
			val1=arr[i];
			arr[i]=arr[min];
			arr[min]=val1;
		}
	}
	return arr;
}
