var $reset = document.querySelector('.reset');
var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
var $son = document.querySelector('.son');
var i = 0 ;


$left.addEventListener('click' , function (){
 i = i-1;
 $son.textContent =  i
})
$reset.addEventListener('click' , function (){
    i = i = 0;
    $son.textContent = i
})
$right.addEventListener('click' , function (){
    i = i+1;
    $son.textContent = i
})
