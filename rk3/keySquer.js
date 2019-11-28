

const handler = {
    get: (target, prop)=>{

        if (Number(prop)){
            return prop*prop;
        } else {
            return 'error';
        }
    }
};
const object = new Proxy({}, handler);

console.log(object.i123);