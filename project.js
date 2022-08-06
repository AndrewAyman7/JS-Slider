var imgs = Array.from( document.querySelectorAll(".item img") );
var boxContainer = document.querySelector(".lightBoxContainer");
var boxItem = document.querySelector(".lightBoxItem");

var next = document.getElementById("next");
var prev = document.getElementById("prev");
var index=0;

var close = document.getElementById("close");


for(var i=0; i<imgs.length; i++){
    
    imgs[i].addEventListener("click" , (eventInfo)=>{
        boxContainer.style.display = "flex";
        
        var clickedImg = eventInfo.target.getAttribute("src");
        boxItem.style.backgroundImage = `url(${clickedImg})`;
        
        index = imgs.indexOf( eventInfo.target );
    })
    
} 


function nextSlide(){
    index++;
    if(index == imgs.length){
        index = 0;
    }
    var nextImg = imgs[index].src;
    boxItem.style.backgroundImage = `url(${nextImg})`
    
}


function prevSlide(){
    index--;
    if(index == -1){
        index = imgs.length-1;
    }
    var prevImg = imgs[index].src;
    boxItem.style.backgroundImage = `url(${prevImg})`
    
}


function closeSlide(){
    boxContainer.style.display = "none";
}



next.addEventListener("click" , nextSlide);
prev.addEventListener("click" , prevSlide);
close.addEventListener("click" , closeSlide);



document.addEventListener("keydown" , function(eventInfo){
    
    if(eventInfo.keyCode == 39){
        nextSlide();
    }
    else if(eventInfo.keyCode == 37){
        prevSlide();
    }
    else if(eventInfo.keyCode == 27){
        closeSlide();
    }
    
    console.log(eventInfo)
    
} ) 





