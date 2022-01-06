// var text ="welcome1     "
// var trimmedSrting=text.trim()
// console.log(text.length)
// console.log(trimmedSrting.length)
// console.log(text.toUpperCase())
// console.log(text.toLowerCase)


// console.log(trimmedSrting)
// console.log(trimmedSrting.charAt(2))
// var text1="welcome"
// var text2="to Toshkent!!!"


// console.log(text1.concat(text2))

// var concattedString=text1.concat(text2)
// console.log(concattedString.replace("Uzbekiston","Toshkent"))


// funksiyalar bilan ishlash !!

// squeare()

// function treangle(){
//     console.log("treangle")
// }
// function kvadrat(){
//     console.log("kvadrat");
// }

// function squeare(){
    // console.log("this iz function");
    // treangle()
    // kvadrat()
    //
// }

// let squeare=(width, height=10) =>{
//     if(typeof width === 'undefined' || typeof height==='undefined'){
//         return "qiymat yaroqsz"
//     }else{
//         return width*height
//     }
    
// }
// show(squeare(4,5))  
// // var result= squeare(3,)
// // console.log(result)
// // squeare(4,)
//  function show(result){
//         console.log(`Result: ${result}`)
//     }

// dddddddddddddd

var couter=document.getElementById('couter')
var incrementBtn=document.getElementById('increment')
var dicrementBtn=document.getElementById('dicrement')
var resetBtn=document.getElementById('reset')

var payloadInput = document.getElementById('payload')
var addPayloadBtn = document.getElementById('addPayload')

incrementBtn.addEventListener('click' , function(){
    coutterSetter(1)
})

dicrementBtn.addEventListener('click' , function(){
    coutterSetter(-1)
})

addPayloadBtn.addEventListener('click', () => {
    coutterSetter(payloadInput.value - 0 )
})
function coutterSetter(payload = 0){
    let couter=document.getElementById('couter')
    let couternumber =couter.textContent - 0
    couter.textContent=couternumber+payload
}



// function fizzBuzz(number= 0){
//     if(number % 15===0) return 'FizzBuzz'
//     if(number % 5===0) return 'Fizz'
//     if(number % 3===0) return 'Buzz'
//     return 'Berilgan qiymat to\'g\'ri kelmaydi'

// }
// var result=fizzBuzz(45)
// console.log(result)