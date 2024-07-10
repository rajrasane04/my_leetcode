let reduce = (nums, fn, init) => {
    let val = init;
    nums.forEach((i) => {
        if(nums.length==0){
            return init;
        }
        val = fn(val,i)
    });
    return val;
};