/**
 * Busqueda recursiva utilizando método binary Search
 * 
 * @param {Array} arr 
 * @param {Number} l 
 * @param {Number} r 
 * @param {Number} x 
 * @returns Number
 */
const binarySearch = (arr, l, r, x) => {
    if(l > r ) return -1;

    const m = Math.floor((l + r) / 2);

    if(arr[m] === x) return m;

    if(arr[m] < x) {
        return binarySearch(arr, m + 1, r, x);
    } else {
        return binarySearch(arr, l, m - 1, x);
    }

};

const arr = [2,3,4,5,6,7,8,9,10,11,12];

console.log(binarySearch(arr, 0, arr.length - 1, 2));