const input = document.getElementById("input")
const answer1= document.getElementById("answer1")
const answer2= document.getElementById("answer2")
const answer3= document.getElementById("answer3")

function meterTofeet (val){
    val *=3.281
    return round(val)
}

function round (val){
    val=val.toFixed(3)
    return val
}

function feetTometer(val){
    val /=3.281
    return round(val)
}

function literToGallon(val){
    val /= 3.785
    return round(val)
}

function gallonToLitter(val){
    val *= 3.785
    return round(val)
}

function kgToLbs(val){
    val *= 2.205
    return round(val)
}

function LbstoKg(val){
    val /= 2.205
    return round(val)
}
input.addEventListener("change",function(){
    const inputVal = input.value
    answer1.textContent= `${inputVal} meters = ${meterTofeet(inputVal)} feet | ${inputVal} feet = ${feetTometer(inputVal)} meters`
    answer2.textContent= `${inputVal} liters = ${literToGallon(inputVal)} gallons | ${inputVal} gallons = ${gallonToLitter(inputVal)} liters`
    answer3.textContent= `${inputVal} kilos = ${kgToLbs(inputVal)} pounds | ${inputVal} pounds = ${LbstoKg(inputVal)} kilos`
})
