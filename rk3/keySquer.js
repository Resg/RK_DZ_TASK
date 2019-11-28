

const handler = {
    get: (target, prop)=>{

        if (Number(prop)!== NaN){
            return prop*prop;
        } else {
            return 'error';
        }
    }
};
const object = new Proxy({}, handler);

console.log(object[-1]);