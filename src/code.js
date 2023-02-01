window.addEventListener("load", starCalculator)
let discount
let bill
let numberPeople

function starCalculator(){
    getBill()
    getNumberPeople()
    discountManager()
}

function getBill(){
    let inputBill = document.getElementById("bill")
    inputBill.addEventListener("keyup", function(){
        bill = parseInt(inputBill.value)
        calculator()
    })
}

function getNumberPeople(){
    let inputNumberPeople = document.getElementById("number-people")
    inputNumberPeople.addEventListener("keyup", function(){
        numberPeople = parseInt(inputNumberPeople.value)
        calculator()
    })
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

    custom.addEventListener("keyup", function(){
        discount = parseInt(custom.value)
        calculator()
        console.log(discount)
    })

    five.addEventListener("click", function(){
        discount = 5
        calculator()
    })

    ten.addEventListener("click", function(){
        discount = 10
        calculator()
    })

    fifteen.addEventListener("click", function(){
        discount = 15
        calculator()
    })

    twentyFive.addEventListener("click", function(){
        discount = 25
        calculator()
    })

    fifty.addEventListener("click", function(){
        discount = 50
        calculator()
    })
}

function calculator(){    
    if(bill!=undefined && discount!=undefined && numberPeople!=undefined){
        let tipAmount = (bill*discount)/100
    
        let tipAmountPerson = (tipAmount/numberPeople)
        let totalPerson = ((bill/numberPeople) + tipAmountPerson)

        document.getElementById("tip-amount-span").innerHTML = "$"+tipAmountPerson.toFixed(2)
        document.getElementById("total-span").innerHTML = "$"+totalPerson.toFixed(2)
    } 
}
