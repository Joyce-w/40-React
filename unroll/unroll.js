function unroll(squareArray) {

    let array = [];
    //loop over array
    squareArray.forEach((el, idx, arr) => {
        //if even index, loop thry  array
        if (idx % 2 === 0) {
            for (let e of arr[idx]) {
                array.push(e)
            }
        } //if odd idx, loop backwards
        if (idx % 2 !== 0) {
            for (let i = arr[idx].length - 1; i >= 0; i--) {
                array.push(arr[idx][i])
            }
        }
    });
    return array

}



module.exports = unroll;
