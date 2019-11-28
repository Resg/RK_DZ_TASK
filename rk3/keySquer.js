

const handler = {
    get: (target, prop)=>{
        const key = Number(prop)
        if (!isNaN(key)){
            return key*key;
        } else {
            return 'error';
        }
    }
};
const object = new Proxy({}, handler);

console.log(object[11234]);