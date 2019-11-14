

const arr = [1,2,3, undefined];
// arr.size = () => {
//     return arr.length;
// };
Object.defineProperty(arr, 'size', {
    configurable:false,
    enumerable:false,
    get() {
        let result;
        for (let i in Object.values(this)) {
            // console.log(this[i]);
            result = i;
        }
      return +result + 1;
    },
    set(v) {
        // console.log(this.size);
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
arr.size = 1;

