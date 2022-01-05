let adds = Array.from(document.getElementsByClassName('add'))
for(let btn of adds){
    btn.addEventListener('click', function(){
        btn.nextElementSibling.innerHTML++
        sum()
    })
}

let sust = document.getElementsByClassName('sust')
console.log(sust)

let qte = document.getElementsByClassName('qte')

for (let i = 0; i < sust.length; i++) {
    sust[i].addEventListener('click', function(){
        // console.log('ok')
        if (qte[i].innerHTML>0) {
             sust[i].previousElementSibling.innerHTML--
        //    qte[i].innerHTML--
            sum()
       }
    })
}

let image = document.getElementsByClassName('img')
let cartItem = document.getElementsByClassName('cart-item')
for (let el of image){
el.addEventListener('click' ,function (){
    el.parentElement.parentElement.parentElement.parentElement.remove()
    sum()
})
}//action eli bech na3emlouha expl:click,ouverflow



//var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//console.log(removeCartItemButtons)
//for (var i=0 ; i<removeCartItemButtons.length ; i++){
  //  var button = removeCartItemButtons[i]
    //button.addEventListener('click', function()){
     //  var buttonClicked = event.target
      // buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()

    //})

//}
function sum(){
    let qte = Array.from(document.getElementsByClassName('qte'))
    console.log(qte)
    let price = Array.from(document.getElementsByClassName('price'))
    console.log(price)
    let s = 0;
    for (let i = 0; i < price.length; i++) {
        s+= price[i].innerHTML * qte[i].innerHTML
    }
    return document.getElementById('totalp').innerHTML = "Shopping Bag total : $ " + s
}

    

//const whiteHeart = '\u2661';
//const blackHeart = '\u2665';
let hearts = Array.from(document.getElementsByClassName('heart'))

for(let i=0; i<hearts.length; i++){
     hearts[i].addEventListener("click", function(){
          if (hearts[i].style.color === "red") {
           hearts[i].style.color = "gray"
          } else {
             hearts[i].style.color = "red"
       // hearts[i].classList.toggle("myClass")/     })
}
      })

 // const like = hearts.textContent;
  //if(like==whiteHeart) {
    //hearts.textContent = blackHeart;
  //} else {
    //hearts.textContent = whiteHeart;
  //}
   // }
    }