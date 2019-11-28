// Параллельные вычисления


function parallel(functions, result) {
    const arr = [];
    arr.length = functions.length;
    for (let i = 0; i < functions.length; i++){
        const resolve = (val) =>{
            arr[i] = val;
        };
        if (functions[i](resolve)){
            arr[i] = functions[i]();
        }else {
            arr[i] = undefined;
            functions[i](resolve);
        }
    }

    const handler = ()=>{
        let flag = true;
        arr.forEach((value)=>{
            if (value === undefined){
                flag = false;
            }
        });
        if (flag) {
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
