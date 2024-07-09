var map = (arr, fn) => {
    newArr = [];
    arr.forEach((item,i)=> {
        newArr.push(fn(item,i));
    });
    return newArr;
};