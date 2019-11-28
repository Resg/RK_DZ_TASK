Object.defineProperty(Function.prototype, 'delay', {
    value: (delay) => {
        setTimeout(foo, delay)
    },
});

foo.delay(300);
function foo() {
    console.log("Wow!");
}
