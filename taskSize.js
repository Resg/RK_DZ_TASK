

const arr = [1,2,3];
Object.defineProperty(Array.prototype, 'size', {
    configurable:false,
    enumerable:false,
    get() {
        let result;
        for (let i in Object.values(this)) {
            result = i;
        }
      return +result + 1;
    },
    set(v) {
        const change = v - this.size;
        if (change >= 0){
            for (let i = 0; i < change; i++){
                this.push(undefined);
            }
        } else {
            for (let i = 0; i < Math.abs(change); i++){
                this.pop();
            }
        }
    }
});

