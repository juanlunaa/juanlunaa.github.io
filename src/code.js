window.addEventListener("load", listener)

//deselectAmountTip()

function deselectAmountTip(){
    let five = document.getElementById("five")
    let ten = document.getElementById("ten")
    let fifteen = document.getElementById("fifteen")
    let twentyFive = document.getElementById("twenty-five")
    let fifty = document.getElementById("fifty")
    let custom = document.getElementById("custom")

    console.log("Hola")

    if(fifty.checked){
        console.log("Hola")
    }
}

function listener(){
    let five = document.getElementById("five")
    let ten = document.getElementById("ten")
    let fifteen = document.getElementById("fifteen")
    let twentyFive = document.getElementById("twenty-five")
    let fifty = document.getElementById("fifty")
    let custom = document.getElementById("custom")

    custom.addEventListener("focus", function(){
        console.log("Hello world")
        document.getElementById("inputs").reset()
    })
}