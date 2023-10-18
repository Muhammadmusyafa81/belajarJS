// console.log("Hello World")
// alert("ada notifikasi")
// prompt("Minjam seratus")

// var promnet = "Coding is easy"
// console.log(promnet)
// var promnet = "Coding not easy"
// console.log(promnet)

// console.log(promnet)
// var promnet = "nothing"
// console.log(promnet)

// let promnet = "Coding is fun"
// console.log(promnet)
// let promnet = "Coding not fun"
// console.log(promnet)

// const promnet = "Coding yes"
// console.log(promnet);
// const promnet = "Coding no"
// console.log(promnet);

// let totalpoin = prompt("Masukkan poin anda")
//     if (totalpoin > 100){
//         document.write("Selamat");
//     }
//     else{
//         document.write("coba lagi")
//     }

// x = 6
// y = 2
// console.log(x<10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x==5 ||y==5)
// console.log(x==6 ||y==5)
// console.log(!(x==y))

// document.write(x<10 && y > 1)
// document.write("<br>")
// document.write(x < 10 && y < 1)
// document.write("<br>")
// document.write(x==5 ||y==5)
// document.write("<br>")
// document.write(x==6 ||y==5)
// document.write("<br>")
// document.write(!(x==y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function()
// {
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

inputBox.addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        addTask();
    }
}); 