let num = 0;

if (num > 0) {
    console.log("양수입니다.")
}
else if (num == 0) {
    console.log("0입니다.")
}
else if (num < 0) {
    console.log("음수입니다.")
}

let beverage = num > 0 ? "양수" :(num == 0 ? '0' : 음수);
console.log(beverage);