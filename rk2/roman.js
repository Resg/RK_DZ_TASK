Object.defineProperties(Number.prototype, {

    'V': {
        get() {
            return [0, 1, 2, 3, 4];
        }
    },
    'VII': {
        get() {
            return [0, 1, 2, 3, 4, 5, 6];
        }
    },
    'I': {
        get() {
            return [0];
        }
    },
    'III': {
        get() {
            return [0, 1, 2];
        }
    },
    'IV': {
        get() {
            return [0, 1, 2, 3];
        }
    },
    'X': {
        get() {
            return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
    },
});
console.log(0..V);
