var createCounter = (init) =>  {
    n=init;
    return {
        increment : () => {
            return ++n;
        },

        decrement : () => {
            return --n;
        },

        reset : () => {
            n = init;
            return n;
        }
    }
};