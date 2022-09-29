function changeIcon(x){
    x.classList.toggle("change")
}

// var menuClick = document.getElementById('mobileMneu');
// var openMenu = document.getElementById('topBar');


// menuClick.addEventListener("click", function(){
//     openMenu.classList.toggle("mobile");
// })

var slidclick = document.getElementById('mobileMneu');
var slideNav = document.getElementById("slideNav");


slidclick.addEventListener("click", function(){
    slideNav.classList.toggle("navShow")
})


var submenuIco = document.getElementById("submenuIcon");
var submenSho = document.getElementById("submenShow");

submenuIco.addEventListener("click", function(){
    submenSho.classList.toggle("dropDown")
})





//shopping card



function incresment(x,y){
    var count = document.getElementById(x);
    var prices= document.getElementById(y);
    var subtotalP = document.getElementById("Subtotal");
    

    if(count.value>=5){
        count.value =5;
        alert("Mixcumum 5 product");
    }else{
        count.value++;
        var prices= document.getElementById(y);
        var resutl = parseFloat(prices.innerHTML) + parseFloat(subtotalP.innerHTML);
        document.getElementById("Subtotal").innerHTML = resutl;
    }
}


function decriment(x,y){
    var count = document.getElementById(x);
    var prices= document.getElementById(y);
    var subtotalP = document.getElementById("Subtotal");
    if(count.value<=1){
        count.value =1;
        alert("Mixcumum 1 product");
    }else{
        count.value--;
        var resutl = parseFloat(subtotalP.innerHTML) - parseFloat(prices.innerHTML) ;
        document.getElementById("Subtotal").innerHTML = resutl;
        
    }
}