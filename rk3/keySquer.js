

const handler = {
    get: (target, prop)=>{
        if (parseInt(prop)){
            return prop*prop;
        } else {
            return 'error';
        }
    }
};
const object = new Proxy({}, handler);
