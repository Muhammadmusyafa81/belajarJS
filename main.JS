// console.log("Hello World")
// alert("ada notifikasi")
// prompt("pinjam seratus")

// var promnet = "Coding is easy"
// console.log(promnet)
// var promnet = "Coding not easy"

// let promnet = "Coding is fun"
// console.log(promnet)
// let promnet = "Coding is fun"
// console.log(promnet)

// const promnet = "Coding is my life"
// console.log(Promnet);
// const promnet = "Coding is my like"
// console.log(Promnet);

// let totalPoint = prompt("Masukkan Point Anda")
// if(totalPoint > 100){
//     document.write("Congratulation");
// } else{
//     document.write("Keep Trying");
// }

// let x = 6;
// const y = 3;

// console.log (x<10 && y < 1);
// console.log(x<10 && y > 1);
// console.log(x==5||y == 5);
// console.log(x==6||y == 5);
// console.log(!(x==y));


// document.write(x<10 && y < 1);

let p = document.querySelector("p")
let button = document.querySelector("button")
let input = document.querySelector("input")
button.addEventListener('click', function() {
    let isi = input.value
    console.log(isi)
    p.innerHTML = isi
})
