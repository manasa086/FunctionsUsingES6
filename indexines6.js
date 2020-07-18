let func = function func() {
    let arr = ["Hello", "World"];
    let arr2 = ["Happy", "Learning"];
    let res = arr.concat(arr2);
    let sum_array = [1, 2, 89, 65, 90];
    let sum = sum_array.reduce((currentValue, sum) => {
        return currentValue + sum;
    });
    console.log("Reduce funtion using ES6: " + sum);
    let filter = sum_array.filter((filter) => {
        return filter > 50;
    });
    console.log("Filter Function using ES6: " + filter);
    let map = sum_array.map((map) => {
        return map * 100;
    });
    console.log("Map Function using ES6: " + map);
    console.log("Array Function using ES6: " + Array.isArray(map));
    let find = sum_array.find((find) => find >= 90);
    console.log("Find Function using ES6: " + find);
    console.log("Slice of an Array using ES6: " + res.slice(2, 4));
    let product = {
        name: "book",
        price: 200,
        quantity: 1
    };
    console.log("Product Details using ES6:");
    console.log({...product });

};
func();