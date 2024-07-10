var reduce = function(nums, fn, init) {
    let val = init;
    for(let i =0 ; i < nums.length ; i++ ){
        if(nums.length==0){
            return init;
        }
        val = fn(val,nums[i]);
    }
    return val;
};