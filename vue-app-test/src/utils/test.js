export function add(...args){
    return args.reduce((a, b) => a + b);
}

export function abs(num){
    if(typeof num !== "number"){
        return NaN;
    }
    if(num < 0){
        return -num;
    }
    return num;
}

// export {add, num}