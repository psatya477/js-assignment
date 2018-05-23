function insertionSort(arr){
	var i=1;
	while(i<arr.length){
		var j=i;
		while(j>0 && arr[j-1]>arr[j]){
			var val1=arr[j];
			arr[j]=arr[j-1];
			arr[j-1]=val1;
			j--;
		}
		i++;
	}
	return arr;
}
