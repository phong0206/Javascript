let a = 5; c = " phong";

console.log(a + c);
c = undefined;
d = 8;
console.log(d);
console.log(c==d);
console.log("\'\\\\\\\\\\\\\\f");
let co = {fo : "phong", d : 5 };
for(let i = 0; i< 2; i++) {
    console.log(co[i]);
}
let str = "Apple, Banana, Kiwi , Apple, Kiwi, Kiwi, Kiwi, Kiwi, Kiwi";
let part = str.slice(-12, -6);
let te = str.substring(4,10);
let strange = str.replace("Apple", "Phong"); // replace không thay đổi chuỗi ban đầu, mà tạo ra 1 chuỗi mới
console.log(strange);
let t1 = str.replace(/ApPLE/i, "Phong"); // /string/i : không phân biệt chữ hoa chữ thường.
console.log(t1);

let t2 = str.replace(/Kiwi/g,"Haaahaha ô"); // /string/g : replace lại mọi chỗ trong string.
console.log(t2);
//.trim() : loại bỏ khoảng trắng 2 bên string

let text = "5";
let padded = text.padStart(4,"x");
let padded1 = text.padEnd(4,"x");

console.log(padded1);
console.log(te);
console.log(part);