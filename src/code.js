window.addEventListener("load", starCalculator)
let discount
let bill
let numberPeople

function starCalculator(){
    getBill()
    discountManager()
    getNumberPeople()
}

function getBill(){
    let inputBill = document.getElementById("bill")
    inputBill.addEventListener("keypress", function(){bill = inputBill.value})
}

function getNumberPeople(){
    let inputNumberPeople = document.getElementById("number-people")
    inputNumberPeople.addEventListener("keypress", function(){numberPeople = inputNumberPeople.value})
}

function discountManager(){
    let five = document.getElementById("five")
    let ten = document.getElementById("ten")
    let fifteen = document.getElementById("fifteen")
    let twentyFive = document.getElementById("twenty-five")
    let fifty = document.getElementById("fifty")
    let custom = document.getElementById("custom")

    custom.addEventListener("focus", function(){
        document.getElementById("inputs").reset()
    })

    custom.addEventListener("keypress", function(){
        discount = custom.value
        console.log(discount)
    })

    five.addEventListener("click", function(){discount = 5})
    ten.addEventListener("click", function(){discount = 10})
    fifteen.addEventListener("click", function(){discount = 15})
    twentyFive.addEventListener("click", function(){discount = 25})
    fifty.addEventListener("click", function(){discount = 50})
}