function checkInteger(value) {
    return (Number.isInteger(value) && value > 0);
}
console.log(checkInteger(1))
console.log(checkInteger(1.23) );

let checkIn = (value) => {
    return (Number.isInteger(value) && value > 0);
}

let songuyenduong = (val) => {
    return (typeof val == 'number' && val > 0 && val % 1 == 0);
}
console.log(songuyenduong(4));
console.log(checkIn(12));

let sumarray = (val) => {
    let sum = 0;
    val.forEach(function(val){
        sum += val;
    });
        return sum;
};
let mang = [1,2,3,4,5,6,3,3,4,5,4];
console.log(sumarray(mang));

let chao = (name, age) => {
    return console.log("My name is " + name + " and age is " + age);
}
chao("Phong",20);

mang.map(function(val){
    val += 12;
    console.log(val+=val);
});

console.log("here")

