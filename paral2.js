// Параллельные вычисления


function parallel(functions, result) {
    const arr = [];
    arr.length = 3;
    const resolve0 = (val) =>{
        arr[0] = val;
    };
    const resolve2 = (val) =>{
        arr[2] = val;
    };
    functions[0](resolve0);
    arr[1] = functions[1]();
    functions[2](resolve2);
    const handler = ()=>{
        if ((arr[0] !== undefined) && (arr[1] !==undefined) && (arr[2] !==undefined)) {
            result(arr);
        } else {
            setTimeout(handler, 0);
        }
    };
    setTimeout(handler, 0);
}


parallel([
    function (resolve) {
        setTimeout(function () {
            resolve(10);
        }, 50);
    },
    function () {
        return 5;
    },
    function (resolve) {
        setTimeout(function () {
            resolve(0);
        }, 10)
    }
], function (results) {
    console.log(results); // [10, 5, 0]
});
