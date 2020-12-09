
const sumReduce = (...numbers) => numbers.reduce((acc, currentValue) => acc + currentValue)

let sum = sumReduce(2, 3, 4, 5, 6);

console.log(sum);



const cijfers = [1, 2, 4, 5, 6, 7]

const sumSpread = (q, w, e, r, t, y) => q + w + e + r + t + y;

const sumArray = sumSpread(...cijfers);

console.log(sumArray);