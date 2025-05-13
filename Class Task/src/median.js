function getMedian(arr1, arr2){
    let mergedArray = [...arr1, ...arr2];
    mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
}
module.exports = { getMedian };