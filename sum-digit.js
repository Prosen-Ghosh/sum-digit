module.exports = (number) => {
    if(typeof number !== 'number' && typeof number !== 'string'){
        throw TypeError(`expects Numeric value got ` + (typeof number));
    }
    return [...number.toString()].reduce((c,v) => c += +v,0);
}