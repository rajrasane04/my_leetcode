function expect(val) {
    const origVal = val;
    return {
        toBe : (value) => {
            if(origVal===value){
                return true;
            }
            else{
                throw new Error ("Not Equal");
            }
        },
        notToBe : (value) => {
            if(origVal!==value){
                return true;
            }
            else{
                throw new Error ("Equal");
            }
        }
    }
};