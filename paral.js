// Параллельные вычисления


function parallel(functions, result) {
    const promiseArr = [];
    promiseArr.push(new Promise(functions[0]));
    promiseArr.push(new Promise(functions[1]));
    promiseArr.push(new Promise(functions[2]));
    Promise.all(promiseArr).then((resolve)=>{
        console.log(resolve);
        result(resolve[1]);
    });
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
